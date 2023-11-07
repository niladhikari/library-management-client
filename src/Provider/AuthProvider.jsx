import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import auth from "./../Config/firebase.config";
import useAxios from "../Hooks/useAxios";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axios = useAxios();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // for sign in user
  const userSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in with google
  const SignInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // sign out user
  const userSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // update user profile
  const userUpdateProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        axios
          .post("/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("token response", res.data);
          });
      } else {
        axios
          .post("/logout",loggedUser,{
              withCredentials: true,
            })
          .then((res) => {
            console.log(res.data);
          });
      }
   
    });
    return () => {
      unSubscriber();
    };
  }, []);

  const authInfo = {
    createUser,
    user,
    loading,
    userUpdateProfile,
    userSignOut,
    userSignIn,
    SignInGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
