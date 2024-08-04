import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAKFylkuAb8qyeykOdNImefOv1uuPIB1j0",
  authDomain: "blog-udemy-6e829.firebaseapp.com",
  projectId: "blog-udemy-6e829",
  storageBucket: "blog-udemy-6e829.appspot.com",
  messagingSenderId: "1094749339644",
  appId: "1:1094749339644:web:776ac1d5789af41fde7c79"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };