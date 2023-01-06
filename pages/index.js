import Image from "next/image";
import { Inter } from "@next/font/google";

import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

import { auth } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import Login from "../components/Login";
import App from "../components/App";

export default function Home() {
  const [user, setUser] = useAuthState(auth);
  const googleAuth = new GoogleAuthProvider();

  const handleLogin = async () => {
    const result = await signInWithPopup(auth, googleAuth);
  };
  const handleLogout = async () => {
    signOut(auth);
  };

  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <>
      {user ? (
        <App signOut={handleLogout} user={user} />
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </>
  );
}
