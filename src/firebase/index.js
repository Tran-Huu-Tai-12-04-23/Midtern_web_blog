import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
export const config = {
  apiKey: "AIzaSyCtd2SFkJhdX69-kIHOEHdahNGk8X93NNM",
  authDomain: "blog-web-d97cf.firebaseapp.com",
  projectId: "blog-web-d97cf",
  storageBucket: "blog-web-d97cf.appspot.com",
  messagingSenderId: "677675906339",
  appId: "1:677675906339:web:098831f24a027c7bef4896",
  measurementId: "G-8RTNX8WCQX",
};

// Initialize Firebase
const app = initializeApp(config);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
