// Import the functions you need from the SDKs you need
// import * as firebase from "firebase/app";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import "firebase/auth";
import "firebase/firestore";
import { config } from "dotenv";
config({ path: ".env.local" });

console.log(process.env.FIREBASE_API_KEY);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

let app;

if (getApps(app).length === 0) {
  // Initialize Firebase
  app = initializeApp(firebaseConfig);
} else {
  app = getApp(app); // if already initialized, use that one
}

const db = getFirestore(app);

const auth = getAuth(app);

// if (!firebase.app.length) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app(); // if already initialized, use that one
// }

// const db = app.firestore();
// const auth = app.auth();

export { db, auth };
