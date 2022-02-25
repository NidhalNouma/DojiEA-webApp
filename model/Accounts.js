import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  addDoc,
  writeBatch,
  updateDoc,
  collection,
  query,
  where,
  orderBy,
  serverTimestamp,
  getDocs,
  setDoc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { firebaseConfig } from "../Constants";

const collName = "accounts";
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export async function createAccount(user) {
  console.log("Creating an account ...");
  const data = {
    email: user.email,
    uid: user.uid,
    isActive: false,
    created_at: serverTimestamp(),
  };

  try {
    const docRef = await addDoc(collection(db, collName), data);
    return { id: docRef.id, ...data };
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  return null;
}

export async function setAccount(
  id,
  accountNumber,
  accountServer,
  accountName
) {
  console.log("Set an account ...", id);

  try {
    const docRef = await setDoc(
      doc(db, collName, id),
      {
        accountNumber,
        accountServer,
        accountName,
        isActive: true,
      },
      { merge: true }
    );
    console.log("Document written with: ", docRef);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function getAccount(id) {
  const docRef = doc(db, collName, id);
  const docSnap = await getDoc(docRef);

  console.log("Getting account ...", id);

  if (docSnap.exists()) {
    const account = docSnap.data();
    return account;
  } else {
    console.log("No such document!");
    return null;
  }
}

export async function getAccountsByEmail(email) {
  const q = query(
    collection(db, collName),
    where("email", "==", email),
    orderBy("created_at", "desc")
  );
  console.log("Getting accounts by email ...", email);

  const querySnapshot = await getDocs(q);
  const accounts = [];
  querySnapshot.forEach((doc) => {
    //console.log(`${doc.id} => ${doc.data()}`);
    accounts.push({ id: doc.id, ...doc.data() });
  });

  return accounts;
}

export async function getAccountsByUserId(id) {
  const q = query(
    collection(db, collName),
    where("uid", "==", id),
    orderBy("created_at", "desc")
  );
  console.log("Getting accounts by user id ...", id);

  const querySnapshot = await getDocs(q);
  const accounts = [];
  querySnapshot.forEach((doc) => {
    //console.log(`${doc.id} => ${doc.data()}`);
    accounts.push({ id: doc.id, ...doc.data() });
  });

  return accounts;
}

export async function disableOrEnableAccount(id, active) {
  console.log("Disabling or enabling account ...", active, id);
  const docRef = doc(db, collName, id);

  const upd = await updateDoc(docRef, { isActive: active });

  // const acc = await getAccount(id);
  return upd;
}

export async function addData(id, data, lastOrder) {
  console.log("Add data to account ...", id);
  if (data?.length === 0) return null;

  const batch = writeBatch(db);

  data.forEach((val) => {
    var docRef = doc(db, collName, id, "data", val.orderTicket);
    batch.set(docRef, val);
  });

  const res = await batch.commit();

  const ref = doc(db, collName, id);

  await setDoc(
    ref,
    {
      lastOrder,
    },
    { merge: true }
  );

  return res;
}

async function getData(id) {
  const coll = collection(db, collName, id, "accounts");
  const querySnapshot = await getDocs(coll);
  const r = [];
  querySnapshot.forEach((doc) => {
    r.push({ ...doc.data(), id: doc.id });
  });
  return r;
}

export async function deleteAccount(id) {
  console.log("Deleting account ...", id);
  const ref = doc(db, collName, id);
  const del = await deleteDoc(ref);
  return del;
}
