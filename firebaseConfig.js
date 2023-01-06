// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH3UYFNBJd5h2fM8RxjiP9KnFc_DA1e4k",
  authDomain: "next-crud-41141.firebaseapp.com",
  projectId: "next-crud-41141",
  storageBucket: "next-crud-41141.appspot.com",
  messagingSenderId: "743775066250",
  appId: "1:743775066250:web:83ad498587b3f6049a3573",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
