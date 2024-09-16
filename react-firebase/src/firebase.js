import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa12PM6RfRZ2BixkCTVAKjivlfWIpoPUY",
  authDomain: "react-firebase-a8744.firebaseapp.com",
  projectId: "react-firebase-a8744",
  storageBucket: "react-firebase-a8744.appspot.com",
  messagingSenderId: "280439343505",
  appId: "1:280439343505:web:a7b8c689f24aef8b663230"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };