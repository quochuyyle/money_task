import * as firebase from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7Cht4PiRszN59UZ80Xl7Dmlmy5QFG0wM",
  authDomain: "imoney-cffd9.firebaseapp.com",
  projectId: "imoney-cffd9",
  storageBucket: "imoney-cffd9.appspot.com",
  messagingSenderId: "948450990631",
  appId: "1:948450990631:web:525409bd19772b447e0c02",
  measurementId: "G-XVSV05D36E",
};

firebase.initializeApp(firebaseConfig);

const projectAuth = getAuth();
const projectFireStore = getFirestore();

const timestamp = serverTimestamp();

export {
  projectAuth,
  projectFireStore,
  timestamp,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};
