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
  collection,
  query,
  where,
  serverTimestamp,
  getDocs,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { firebaseConfig } from "../Constants";
import { getAccountsByUserId } from "./Accounts";
import { getPlans } from "./Plans";
import { verifyPlans } from "../hooks/Plans";
import { getCustomer, createCustomer } from "./Stripe";

const collName = "users";
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const provider = new GoogleAuthProvider();

export function checkUser(setUser, setDone, done) {
  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (typeof checkUser.counter == "undefined") {
      checkUser.counter = 0;
    }

    if (user && checkUser.counter === 0) {
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
    checkUser.counter++;
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
    const usr = userCredential.user;
    await addUser(usr);

    const user = await getUser(usr.uid);
    // await sendEmailVerification(auth.currentUser);
    return { user, error: null };
  } catch (error) {
    console.log("SignUp error => . ", error.message);
    return {
      user: null,
      error,
      // err: errorMessage,
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
      err: "Email or password incorrect",
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
      err: "an error occurred while trying to sign out!",
      error,
    };
  }
}

export async function changePassword(password) {
  const auth = getAuth();
  const user = auth.currentUser;
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
    const customer = await createCustomer(user);

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

  console.log("Getting user ...", uid);
  if (!uid) return null;

  if (docSnap.exists()) {
    const user = docSnap.data();

    const stripeP = getCustomer(user);
    const plansP = getPlans(uid);
    const accountsP = getAccountsByUserId(uid);

    const [stripe, plans, accounts] = await Promise.all([
      stripeP,
      plansP,
      accountsP,
    ]);

    user["stripe"] = stripe?.data;
    user["plans"] = plans;
    user["accounts"] = accounts;

    const verify = await verifyPlans(user);
    console.log(verify);
    if (verify === true) user["plans"] = await getPlans(uid);

    console.log(user);
    return user;
  } else {
    console.log("No such document!");
    const user = await addUser(uid);
    return user;
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

  if (withAccounts) user["accounts"] = await getAccountsByUserId(user.uid);

  return user;
}
