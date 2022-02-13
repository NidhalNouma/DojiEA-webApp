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
  collection,
  getDocs,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { firebaseConfig } from "../Constants";

const collName = "users";
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export function checkUser(setUser) {
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
  });
}

export async function getActiveUser(setUser) {
  const auth = getAuth();
  const usr = auth.currentUser;

  // console.log("auth ", usr);
  if (usr) {
    const user = await getUser(usr.uid);
    setUser(user);
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
    await sendEmailVerification(auth.currentUser);
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
    // const user = await getUser(usr.uid);
    return { usr, user, error: null };
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
    console.log(req);
    const docRef = await setDoc(doc(db, collName, user.uid), {
      email: user.email,
      uid: user.uid,
      customerId: customer.id,
      accounts: [],
      membership: null,
      created_at: Date.now(),
    });
    console.log("Document written with: ", docRef);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getUsers() {
  const querySnapshot = await getDocs(collection(db, collName));
  const r = [];
  querySnapshot.forEach((doc) => {
    //console.log(`${doc.id} => ${doc.data()}`);
    r.push({ [doc.id]: doc.data() });
  });
  return r;
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
    console.log(user);
    return user;
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    return null;
  }
}
