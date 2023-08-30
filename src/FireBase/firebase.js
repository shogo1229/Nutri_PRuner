//いつもの本体 30Sheql
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const API_KEY = process.env.REACT_APP_FIREBASE;
const AUTHDOMAIN = process.env.REACT_APP_AUTHDOMAIN;
const PROJECT_ID = process.env.REACT_APP_PROJECTID;
const STORAGE_BUCKET = process.env.REACT_APP_STORAGEBUCKET;
const MESSAGINGSENDER_ID = process.env.REACT_APP_MESSAGINGSENDERID;
const APP_ID = process.env.REACT_APP_APPID;
const MEASUREMENT_ID = process.env.REACT_APP_MEASUREMENTID;
const CHAT = process.env.REACT_APP_CHAT;
//就活用アカウントのFireBase
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGINGSENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

console.log("Get AWS");
console.log(firebaseConfig);
console.log(CHAT);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
export const auth = getAuth(app);
