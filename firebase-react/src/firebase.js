// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCciFvHCudT_5kb9XD0SUdcsr7Qy7jRwcc",
  authDomain: "react-firebase-5e04e.firebaseapp.com",
  projectId: "react-firebase-5e04e",
  storageBucket: "react-firebase-5e04e.appspot.com",
  messagingSenderId: "219877158477",
  appId: "1:219877158477:web:39e1eb90d8515d13e97604"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;