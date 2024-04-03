import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signInUserWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signUpUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      console.log("Observing current user", currentUser);
    });

    return () => unSubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, signUpUser, loginUser, signInUserWithGoogle, signOutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
