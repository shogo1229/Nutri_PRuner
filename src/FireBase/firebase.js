//いつもの本体 30Sheql
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAAdEVX-w0fFWGnHECw_Z3EX3qnzToF4is",
//   authDomain: "nutripruner.firebaseapp.com",
//   projectId: "nutripruner",
//   storageBucket: "nutripruner.appspot.com",
//   messagingSenderId: "871663923817",
//   appId: "1:871663923817:web:c823b6d827b587e56868f8",
//   measurementId: "G-8BX7ZVD9J1",
// };

//就活用アカウントのFireBase
const firebaseConfig = {
  apiKey: "AIzaSyA1eQCfcYpbz8vcQIrM0ImNqAimsPoKUJI",
  authDomain: "nutripruner-bddc8.firebaseapp.com",
  projectId: "nutripruner-bddc8",
  storageBucket: "nutripruner-bddc8.appspot.com",
  messagingSenderId: "315722300690",
  appId: "1:315722300690:web:8cd0a154511b2c659dc7cb",
  measurementId: "G-3GQWL9KNVY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
export const auth = getAuth(app);
