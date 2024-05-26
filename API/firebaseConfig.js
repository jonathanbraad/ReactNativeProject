import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import 'firebase/database';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVM0k1pj1-zIP2mCuVgXjLLfS5SlkCbbE",
  authDomain: "nutrifit-d6ea0.firebaseapp.com",
  projectId: "nutrifit-d6ea0",
  storageBucket: "nutrifit-d6ea0.appspot.com",
  messagingSenderId: "693598253099",
  appId: "1:693598253099:web:594a3615bcce54440e3a6e",
  measurementId: "G-3J55H9JTY8"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics only if supported
let analytics;
(async () => {
  if (await isSupported()) {
    analytics = getAnalytics(app);
  }
})();

// Initialize Authentication
const auth = getAuth(app);
const db = firebase.database();

export { app, db, auth, analytics };
