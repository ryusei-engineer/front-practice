// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfPuBVAu2vvvglpDegnP40Yik-M4zxpF4",
  authDomain: "twitter-clone-605bb.firebaseapp.com",
  projectId: "twitter-clone-605bb",
  storageBucket: "twitter-clone-605bb.appspot.com",
  messagingSenderId: "650342770213",
  appId: "1:650342770213:web:090643a1d5ebcafaf681cc"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;