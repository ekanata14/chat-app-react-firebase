// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9u60weGO_gMsMVm7K9Z5oQ7W1uGvH5jA",
  authDomain: "ngorta-app.firebaseapp.com",
  projectId: "ngorta-app",
  storageBucket: "ngorta-app.appspot.com",
  messagingSenderId: "1074769122913",
  appId: "1:1074769122913:web:29c4cc7d82c987941abc20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);