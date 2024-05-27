// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxr0evgh7fV_0RWE1ZN5OSf73YcaQEwp0",
  authDomain: "eatfit-7afd4.firebaseapp.com",
  projectId: "eatfit-7afd4",
  storageBucket: "eatfit-7afd4.appspot.com",
  messagingSenderId: "757154758756",
  appId: "1:757154758756:web:b809cc7c45962651f8df71",
  measurementId: "G-KMLXWPMMW2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
