import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClsaeVHyemxEKxKCv86iFJqKF8_Gqt-As",
  authDomain: "react-login-firebase-4845f.firebaseapp.com",
  projectId: "react-login-firebase-4845f",
  storageBucket: "react-login-firebase-4845f.appspot.com",
  messagingSenderId: "702913512326",
  appId: "1:702913512326:web:55422eaa39abc4562b2207"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);