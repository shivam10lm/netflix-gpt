// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXZpRdoblGf2TU-l71-K2PppTbXggW82M",
  authDomain: "netflix-gpt-b6c14.firebaseapp.com",
  projectId: "netflix-gpt-b6c14",
  storageBucket: "netflix-gpt-b6c14.firebasestorage.app",
  messagingSenderId: "454559751232",
  appId: "1:454559751232:web:4adda2d9bdb86dfadfd3a5",
  measurementId: "G-7TBYT5FXL3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
