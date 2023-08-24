import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1NGCjbZt*****",
  authDomain: "react-todo-*****",
  databaseURL: "https://react-todo*****",
  projectId: "react-todo****",
  storageBucket: "react-todo*****",
  messagingSenderId: "4666****",
  appId: "1:46660757180:******",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
export const auth = getAuth(app);
