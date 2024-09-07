// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBT_qry31S2QZH7vV01dni_5kpHWqdLskY",
  authDomain: "ratemate-e18a3.firebaseapp.com",
  projectId: "ratemate-e18a3",
  storageBucket: "ratemate-e18a3.appspot.com",
  messagingSenderId: "1080923555563",
  appId: "1:1080923555563:web:f1460af7b963aebcd8e0ae",
  measurementId: "G-6TSDKB0FV8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth and Google Auth Provider
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
