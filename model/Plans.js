import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  updateDoc,
  collection,
  query,
  orderBy,
  serverTimestamp,
  getDocs,
  setDoc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { firebaseConfig } from "../Constants";

const collName = "users";
const subCollName = "plans";

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export async function addPlan(uid, planId, lifeTime, renew, metadata, status) {
  console.log("Creating a new Plan ...", uid);
  const data = {
    id: planId,
    isActive: true,
    lifeTime,
    uid,
    renew,
    metadata,
    status,
    created_at: serverTimestamp(),
  };

  try {
    const docRef = await setDoc(
      doc(db, collName, uid, subCollName, planId),
      data
    );
    return data;
  } catch (e) {
    console.error("Error Creating Plan: ", e);
    return null;
  }
}

export async function getPlans(uid) {
  const q = query(
    collection(db, collName, uid, subCollName),
    orderBy("created_at", "desc")
  );
  console.log("Getting Plans by user Id ...", uid);

  const querySnapshot = await getDocs(q);
  const plans = [];
  querySnapshot.forEach((doc) => {
    //console.log(`${doc.id} => ${doc.data()}`);
    plans.push({ id: doc.id, ...doc.data() });
  });

  return plans;
}

export async function getPlan(uid, id) {
  console.log("Getting Plan by user Id ...", uid);
  const docRef = doc(db, collName, uid, subCollName, id);

  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const plan = docSnap.data();
    return plan;
  } else {
    console.log("No such document!");
    return null;
  }
}

export async function desactivePlan(uid, id) {
  console.log("Update renew ...", id);
  const docRef = doc(db, collName, uid, subCollName, id);

  const upd = await updateDoc(docRef, { isActive: false });

  return upd;
}

export async function updateRenew(uid, id, renew, status) {
  console.log("Update renew ...", id);
  const docRef = doc(db, collName, uid, subCollName, id);

  const upd = await updateDoc(docRef, { renew, status });

  return upd;
}

async function deletePlan(uid, id) {
  console.log("Deleting plan ...", id);
  const ref = doc(db, collName, uid, subCollName, id);
  const del = await deleteDoc(ref);
  return del;
}
