import { useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./index.js";

export const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
};
