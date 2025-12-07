import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCICw8rLUePjRPSYyV-ApjBXr270OUCkgU",
  authDomain: "abhiram-portfolio-f876b.firebaseapp.com",
  projectId: "abhiram-portfolio-f876b",
  storageBucket: "abhiram-portfolio-f876b.firebasestorage.app",
  messagingSenderId: "75047262480",
  appId: "1:75047262480:web:008ad13e96b52e9df42d95",
  measurementId: "G-JQB5471MC0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);