import React, { useState } from "react";
import { db } from "../firebase/index";
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

const useFirestore = (nameCollection, condition) => {
  console.log(condition);
  const [documents, setDocuments] = useState([]);

  React.useEffect(() => {
    let collectionRef;

    if (db) {
      collectionRef = query(collection(db, nameCollection));

      if (condition) {
        if (!condition.compareValue || !condition.compareValue.length) {
          setDocuments([]);
          return;
        }

        collectionRef = query(
          collectionRef,
          where(condition.fieldName, condition.operator, condition.compareValue)
        );
      }
      collectionRef = query(collectionRef, orderBy("id"));

      const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
        const documents = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setDocuments(documents);
      });

      return unsubscribe;
    }
  }, [db, nameCollection, condition]);

  return documents;
};
export default useFirestore;
