import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import config from "../config";

//就活用アカウントのFireBase
const firebaseConfig = {
  apiKey: config.FireBase_apiKey,
  authDomain: config.FireBase_authDomain,
  projectId: config.FireBase_projectId,
  storageBucket: config.FireBase_storageBucket,
  messagingSenderId: config.FireBase_messagingSenderId,
  appId: config.FireBase_appId,
  measurementId: config.FireBase_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
export const auth = getAuth(app);
