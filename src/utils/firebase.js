import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXZpRdoblGf2TU-l71-K2PppTbXggW82M",
  authDomain: "netflix-gpt-b6c14.firebaseapp.com",
  projectId: "netflix-gpt-b6c14",
  storageBucket: "netflix-gpt-b6c14.firebasestorage.app",
  messagingSenderId: "454559751232",
  appId: "1:454559751232:web:4adda2d9bdb86dfadfd3a5",
  measurementId: "G-7TBYT5FXL3",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
