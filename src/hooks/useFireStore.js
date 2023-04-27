import { db } from "../firebase/index";
import { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

const useFirestore = (nameCollection, condition, condition2, createdAt) => {
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    let collectionRef = collection(db, nameCollection);

    if (condition) {
      const { fieldName, operator, compareValue } = condition;
      if (!compareValue || !compareValue.length) {
        setDocuments([]);
        return;
      }
      collectionRef = query(
        collectionRef,
        where(fieldName, operator, compareValue)
      );
    }

    if (condition2) {
      const { fieldName, operator, compareValue } = condition2;
      collectionRef = query(
        collectionRef,
        where(fieldName, operator, compareValue)
      );
    }
    if (createdAt) {
      collectionRef = query(collectionRef, orderBy(createdAt));
    }

    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      const documents = snapshot.docs.map((doc) => {
        if (nameCollection === "users") {
          return {
            ...doc.data(),
            user_id: doc.data().id,
            id: doc.id,
          };
        } else {
          return {
            ...doc.data(),
            id: doc.id,
          };
        }
      });

      setDocuments(documents);
    });

    return unsubscribe;
  }, [nameCollection, condition, condition2]);

  return documents;
};

export default useFirestore;
