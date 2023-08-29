//いつもの本体 30Sheql
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const API_KEY = process.env.REACT_FIREBASE_APIKEY;
const AuthDomain = process.env.REACT_FIREBASE_AUTHDOMAIN;
const ProjectID = process.env.REACT_FIREBASE_PROJECTID;
const StorageBucket = process.env.REACT_FIREBASE_STORAGEBUCKET;
const MessagingSenderID = process.env.REACT_FIREBASE_MESSAGINGSENDERID;
const AppID = process.env.REACT_FIREBASE_APPID;
const MeasurementID = process.env.REACT_FIREBASE_MEASUREMENTID;

//就活用アカウントのFireBase
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AuthDomain,
  projectId: ProjectID,
  storageBucket: StorageBucket,
  messagingSenderId: MessagingSenderID,
  appId: AppID,
  measurementId: MeasurementID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
export const auth = getAuth(app);
