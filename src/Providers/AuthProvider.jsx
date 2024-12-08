import { useEffect, useState } from "react";
import { AuthContext } from "./Contexts";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { auth } from "../Firebase/Firebase_config";
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem("hTheme") || "light");

  // handle dark and light theme
  useEffect(() => {
    localStorage.setItem("hTheme", theme);
    console.log(theme);
    document
      .querySelector("html")
      .setAttribute("data-theme", theme === "light" ? "light" : "dark");
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  //   signUp with email and pass
  const signUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   signin with email and pass
  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateNameAndPhoto = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //   signIn with Gmail
  const signInWithGmail = () => {
    return signInWithPopup(auth, provider);
  };

  //   sign out
  const signout = () => {
    return signOut(auth);
  };

  // Observer
  useEffect(() => {
    const disconnect = onAuthStateChanged(auth, (user) => {
      console.log(user);
      setUser(user);
      setLoading(false);
    });
    return () => disconnect();
  }, [setUser, setLoading]);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    signInWithEmail,
    signUpWithEmail,
    signInWithGmail,
    updateNameAndPhoto,
    signout,
    theme,
    setTheme,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
