// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "broker-983d8.firebaseapp.com",
  projectId: "broker-983d8",
  storageBucket: "broker-983d8.appspot.com",
  messagingSenderId: "679426859389",
  appId: "1:679426859389:web:42ca70794dde3703d06c14"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);