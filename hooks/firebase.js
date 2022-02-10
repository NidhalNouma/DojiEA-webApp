import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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

const firebaseConfig = {
  apiKey: "AIzaSyCNboygqhiVSCRWZ-RGAhgwityFtLdJgOQ",
  authDomain: "ea-website-5968a.firebaseapp.com",
  projectId: "ea-website-5968a",
  storageBucket: "ea-website-5968a.appspot.com",
  messagingSenderId: "555783767028",
  appId: "1:555783767028:web:fed6f60d92a9216597afa1",
};

const collName = "users";
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export async function getActiveUser() {
  const auth = getAuth();
  const user = auth.currentUser;

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
    await addUser(user);
    return { user, error: null };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return { user: null, error };
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
    return { usr, user, error: null };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return { user: null, err: "User doesn't exists", error };
  }
}

async function addUser(user) {
  try {
    const docRef = await setDoc(doc(db, collName, user.uid), {
      email: user.email,
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

  if (docSnap.exists()) {
    //console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    return null;
  }
}
