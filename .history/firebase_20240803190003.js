// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoeMrOARYRG4KhF3eDAX__qDLRnCzhPvE",
  authDomain: "signal-mobile-app-f8b1f.firebaseapp.com",
  projectId: "signal-mobile-app-f8b1f",
  storageBucket: "signal-mobile-app-f8b1f.appspot.com",
  messagingSenderId: "613258740775",
  appId: "1:613258740775:web:9a91a1e2a5270b9a7c7a02",
  measurementId: "G-WKNY0G2ZMP",
};

let app;

if (firebase.apps.length === 0) {
  // Initialize Firebase
  app = initializeApp(firebaseConfig);
} else {
  app = firebase.app(); // if already initialized, use that one
}

const analytics = getAnalytics(app);
