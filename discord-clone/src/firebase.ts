import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2wLVqjAD1z2UXMsvQ4Ctw71_10h9pLRA",
  authDomain: "discord-clone-26a1c.firebaseapp.com",
  projectId: "discord-clone-26a1c",
  storageBucket: "discord-clone-26a1c.firebasestorage.app",
  messagingSenderId: "888967854934",
  appId: "1:888967854934:web:c2ca9d117053f7108ef4f7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
