// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcU0FqWX2_qMCKXcfw9rOSXr4keg_0O-w",
  authDomain: "twetter-clone-43bb2.firebaseapp.com",
  projectId: "twetter-clone-43bb2",
  storageBucket: "twetter-clone-43bb2.appspot.com",
  messagingSenderId: "84114909215",
  appId: "1:84114909215:web:a21eff129aea7a69364d2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;