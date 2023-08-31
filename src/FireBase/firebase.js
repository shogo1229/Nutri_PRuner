import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import config from "../config";

const API_KEY = process.env.REACT_APP_FIREBASE;
const AUTHDOMAIN = process.env.REACT_APP_AUTHDOMAIN;
const PROJECT_ID = process.env.REACT_APP_PROJECTID;
const STORAGE_BUCKET = process.env.REACT_APP_STORAGEBUCKET;
const MESSAGINGSENDER_ID = process.env.REACT_APP_MESSAGINGSENDERID;
const APP_ID = process.env.REACT_APP_APPID;
const MEASUREMENT_ID = process.env.REACT_APP_MEASUREMENTID;
// 就活用アカウントのFireBase
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGINGSENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

//就活用アカウントのFireBase
// const firebaseConfig = {
//   apiKey: config.FireBase_apiKey,
//   authDomain: config.FireBase_authDomain,
//   projectId: config.FireBase_projectId,
//   storageBucket: config.FireBase_storageBucket,
//   messagingSenderId: config.FireBase_messagingSenderId,
//   appId: config.FireBase_appId,
//   measurementId: config.FireBase_measurementId,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
export const auth = getAuth(app);
