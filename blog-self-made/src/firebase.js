import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5PtwxXku-a8M3M-tlMzvKtFATdw8pRvY",
  authDomain: "blog-self-made.firebaseapp.com",
  projectId: "blog-self-made",
  storageBucket: "blog-self-made.appspot.com",
  messagingSenderId: "265873382403",
  appId: "1:265873382403:web:8f232932ab7da7fb078236"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };