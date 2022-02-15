import axios from "axios";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  signOut,
  onAuthStateChanged,
  updatePassword,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  addDoc,
  updateDoc,
  collection,
  query,
  where,
  serverTimestamp,
  getDocs,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { firebaseConfig } from "../Constants";

const collName = "users";
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export function checkUser(setUser, setDone) {
  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const uid = user.uid;
      let usr = await getUser(uid);

      if (!usr) {
        await addUser(user);
        usr = await getUser(uid);
      }
      // console.log("user=> . ", usr, user);
      setUser(usr);
    } else {
      setUser(null);
    }

    setDone(1);
  });
}

export async function getActiveUser(setUser) {
  const auth = getAuth();
  const usr = auth.currentUser;

  // console.log("auth ", usr);
  if (usr) {
    const user = await getUser(usr.uid);
    if (setUser) setUser(user);
    //  console.log("auth ", user);
    return user;
  }
  return null;
}

export async function signUp(email, password) {
  const auth = getAuth();
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    // await addUser(user);
    // await sendEmailVerification(auth.currentUser);
    return { user, error: null };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      user: null,
      error,
      err: "An error occurred while trying to sign up",
    };
  }
}

export async function signIn(email, password) {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    // const user = await getUser(usr.uid);
    return { user, error: null };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      user: null,
      err: "User doesn't exists",
      error,
    };
  }
}

export async function signOutf() {
  const auth = getAuth();
  try {
    const userCredential = await signOut(auth);
    const usr = userCredential.user;
    return { usr, user: null, error: null };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      user: null,
      err: "User doesn't exists",
      error,
    };
  }
}

export async function changePassword(password) {
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(password, user);
  try {
    await updatePassword(user, password);
    return { user: null, error: null };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      err: "Error occurred while updating password",
      error,
    };
  }
}

export async function resetPassword(email) {
  const auth = getAuth();
  try {
    const reset = await sendPasswordResetEmail(auth, email);
    return { reset, error: null };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      reset: null,
      err: "Email not exist",
      error,
    };
  }
}

async function addUser(user) {
  console.log("Adding user ...");

  try {
    const req = await axios.post("/api/stripe/createCustomer", {
      email: user.email,
    });
    const customer = req.data.customer;

    const docRef = await setDoc(doc(db, collName, user.uid), {
      email: user.email,
      uid: user.uid,
      customerId: customer.id,
      created_at: serverTimestamp(),
    });
    console.log("Document written with: ", docRef);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getUser(uid) {
  const docRef = doc(db, collName, uid);
  const docSnap = await getDoc(docRef);

  console.log("Getting user ...");

  if (docSnap.exists()) {
    //console.log("Document data:", docSnap.data());
    const user = docSnap.data();
    const stripe = await axios.post("/api/stripe/getCustomer", {
      email: user.email,
      customerId: user.customerId,
    });
    user["stripe"] = stripe.data;
    user["accounts"] = await getAccounts(uid);
    // console.log(user);
    return user;
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    return null;
  }
}

export async function getUserByEmail(email) {
  const q = query(collection(db, collName), where("email", "==", email));
  console.log("Getting user by email ...");

  const querySnapshot = await getDocs(q);
  const r = [];
  querySnapshot.forEach((doc) => {
    //console.log(`${doc.id} => ${doc.data()}`);
    r.push(doc.data());
  });
  if (r.length === 0) return null;

  let user = r[0];

  user["accounts"] = await getAccounts(user.uid);

  return user;
}

export async function addAccount(
  accountServer,
  accountNumber,
  accountName,
  email,
  id
) {
  let uid = id;
  console.log("Add account to user by email ...");

  if (!uid) {
    const q = query(collection(db, collName), where("email", "==", email));
    const querySnapshot = await getDocs(q);

    const r = [];
    querySnapshot.forEach((doc) => {
      //console.log(`${doc.id} => ${doc.data()}`);
      r.push(doc.data());
    });

    if (r.length === 0) return null;

    uid = r[0]?.uid;
  }

  const ref = doc(
    db,
    collName,
    uid,
    "accounts",
    `${accountNumber}.${accountServer}`
  );

  const res = await setDoc(
    ref,
    {
      accountNumber,
      accountServer,
      accountName,
      isActive: true,
      created_at: serverTimestamp(),
      data: [],
    },
    { merge: true }
  );

  return res;
}

export async function getAccounts(uid) {
  const coll = collection(db, collName, uid, "accounts");
  const querySnapshot = await getDocs(coll);
  const r = [];
  querySnapshot.forEach((doc) => {
    r.push({ ...doc.data(), id: doc.id });
  });
  return r;
}

export async function disableOrEnableAccount(uid, accountId, active) {
  const docRef = doc(db, collName, uid, "accounts", accountId);

  const upd = await updateDoc(docRef, { isActive: active });
  console.log(upd);

  const acc = await getAccounts(uid);
  return acc;
}
