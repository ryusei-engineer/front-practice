// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGe9NIpARczNR4QKI9Dowj6e4brrHWdoY",
  authDomain: "vue-firebase-memo-app-15d07.firebaseapp.com",
  projectId: "vue-firebase-memo-app-15d07",
  storageBucket: "vue-firebase-memo-app-15d07.firebasestorage.app",
  messagingSenderId: "200791212204",
  appId: "1:200791212204:web:af128de9cc895c8689df09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };