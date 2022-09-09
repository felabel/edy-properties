// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; import axios from 'axios'

// import nodemailer from 'nodemailer'
import cors from 'cors'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: "my-cms-51b3e.appspot.com",
  messagingSenderId: "112153334230",
  appId: "1:112153334230:web:f1a53d7afa875714e3d477",
  measurementId: "G-VDKZXZHR1L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// const analytics = getAnalytics(app);
const db = getFirestore(app)
// export {axios, db}
export default db;