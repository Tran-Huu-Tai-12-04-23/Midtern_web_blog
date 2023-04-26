import { db } from "./index";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";

export const addDocument = async (nameCollection, data) => {
  return await addDoc(collection(db, nameCollection), {
    ...data,
    createdAt: serverTimestamp(),
  });
};

export const checkUsernameExists = async (username) => {
  const querySnapshot = await getDocs(collection(db, "users"));
  const users = querySnapshot.docs.map((doc) => doc.data());
  return users.some((user) => user.username === username);
};
