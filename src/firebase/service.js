import { db } from "./index";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  query,
  where,
  updateDoc,
  onSnapshot,
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

export const addFriend = async (userId, friendId) => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.docs.map(async (doc) => {
    if (doc.data().id === userId) {
      await updateDoc(doc.ref, { friends: [...doc.data().friends, friendId] });
    }
  });
};

export const listenToFriends = (userId, callback) => {
  const q = query(collection(db, "users"), where("id", "==", userId));

  const unsubscribe = onSnapshot(q, (snapshot) => {
    snapshot.forEach((doc) => {
      if (doc.data().id === userId) {
        const friends = doc.data().friends || [];
        callback(friends);
      }
    });
  });
  return unsubscribe;
};

export const getFriendsFromId = async (friendsId) => {
  const q = query(collection(db, "users"), where("id", "in", friendsId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => doc.data());
};
