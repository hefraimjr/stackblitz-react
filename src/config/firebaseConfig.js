// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6ugfERj8SrRj-s8SbN8E18s9e6V-GFA0",
  authDomain: "silviosantos.firebaseapp.com",
  projectId: "silviosantos",
  storageBucket: "silviosantos.firebasestorage.app",
  messagingSenderId: "621939307376",
  appId: "1:621939307376:web:53140e008f63d6e7ac55b5",
  measurementId: "G-8J4BY84NQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};