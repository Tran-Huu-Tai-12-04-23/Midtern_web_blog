import { createContext, useContext, useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/index.js";
import { LoginContext } from "../Context";

// authentication context
const AuthContext = createContext();

const AuthenticationGoogleAccount = ({ setLogin, children, setLoader }) => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  const logOut = () => {
    signOut(auth);
  };
  logOut();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLogin({
        username: currentUser.username,
        id: currentUser.uid,
      });
      setLoader(true);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ googleSignIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthenticationGoogleAccount;

export const UserAuth = () => {
  return useContext(AuthContext);
};
