import axios from "axios";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  updatePassword,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  addDoc,
  writeBatch,
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
const provider = new GoogleAuthProvider();

export function checkUser(setUser, setDone, done) {
  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user && done === 0) {
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

    setDone((d) => (d === 0 ? 1 : d));
  });
}

export async function getActiveUser(setUser, setDone) {
  const auth = getAuth();
  const usr = auth.currentUser;

  let user = null;

  console.log("auth ", usr);
  if (usr) {
    user = await getUser(usr.uid);
    if (!user) {
      await addUser(user);
      user = await getUser(usr.uid);
    }
    // console.log("user=> ", user);
    if (setUser) setUser(user);
    //  console.log("auth ", user);
  }
  setDone((d) => (d === 0 ? 1 : d));
  return user;
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
    const usr = userCredential.user;
    const user = await getUser(usr.uid);
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

export async function continueWithGoogle() {
  const auth = getAuth();
  try {
    const result = await signInWithPopup(auth, provider);

    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const usr = result.user;

    let user = await getUser(usr.uid);
    if (user === null) {
      await addUser(usr);
      user = await getUser(usr.uid);
    }

    return { user, error: null };
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
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

export async function getUserByEmail(email, withAccounts = true) {
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

  if (withAccounts) user["accounts"] = await getAccounts(user.uid);

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
    const user = getUserByEmail(email);
    uid = user?.uid;
  }
  if (!uid) return null;

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

export async function getAccount(uid, accountServer, accountNumber, email) {
  if (!uid) {
    const user = await getUserByEmail(email);
    uid = user?.uid;
  }
  if (!uid) return null;
  const docRef = doc(
    db,
    collName,
    uid,
    "accounts",
    `${accountNumber}.${accountServer}`
  );
  const acc = await getDoc(docRef);

  return acc?.data();
}

export async function disableOrEnableAccount(uid, accountId, active) {
  const docRef = doc(db, collName, uid, "accounts", accountId);

  const upd = await updateDoc(docRef, { isActive: active });
  console.log(upd);

  const acc = await getAccounts(uid);
  return acc;
}

export async function addData(
  data,
  lastOrder,
  accountServer,
  accountNumber,
  email,
  id
) {
  let uid = id;
  console.log("Add data to user account ...");
  if (data?.length === 0) return null;

  if (!uid) {
    const user = await getUserByEmail(email);
    uid = user?.uid;
  }
  if (!uid) return null;

  const batch = writeBatch(db);

  data.forEach((val) => {
    var docRef = doc(
      db,
      collName,
      uid,
      "accounts",
      `${accountNumber}.${accountServer}`,
      "data",
      val.orderTicket
    );
    batch.set(docRef, val);
  });

  const res = await batch.commit();

  const ref = doc(
    db,
    collName,
    uid,
    "accounts",
    `${accountNumber}.${accountServer}`
  );

  await setDoc(
    ref,
    {
      lastOrder,
    },
    { merge: true }
  );

  return res;
}
