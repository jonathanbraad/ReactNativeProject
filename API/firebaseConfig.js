import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVM0k1pj1-zIP2mCuVgXjLLfS5SlkCbbE",
  authDomain: "nutrifit-d6ea0.firebaseapp.com",
  projectId: "nutrifit-d6ea0",
  storageBucket: "nutrifit-d6ea0.appspot.com",
  messagingSenderId: "693598253099",
  appId: "1:693598253099:web:594a3615bcce54440e3a6e",
  measurementId: "G-3J55H9JTY8"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;
(async () => {
  if (await isSupported()) {
    analytics = getAnalytics(app);
  }
})();

const auth = getAuth(app);

