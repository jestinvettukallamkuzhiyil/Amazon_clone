import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEGtEaub_llyzDq8xgQiRf-1x6pJ1jzGg",
  authDomain: "clone-61d9b.firebaseapp.com",
  projectId: "clone-61d9b",
  storageBucket: "clone-61d9b.appspot.com",
  messagingSenderId: "618845296644",
  appId: "1:618845296644:web:cde4f9feb817e8c973bd51",
  measurementId: "G-SFBBZJ6ZV1"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
};
