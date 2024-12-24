import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMqsHRaXdLeMWJPAguymxo4K6q4kODHnw",
  authDomain: "vue-firebase-e7591.firebaseapp.com",
  projectId: "vue-firebase-e7591",
  storageBucket: "vue-firebase-e7591.firebasestorage.app",
  messagingSenderId: "874262044551",
  appId: "1:874262044551:web:2681c66521fac030d7bd22"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };