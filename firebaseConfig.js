import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAVM0k1pj1-zIP2mCuVgXjLLfS5SlkCbbE",
  authDomain: "nutrifit-d6ea0.firebaseapp.com",
  projectId: "nutrifit-d6ea0",
  storageBucket: "nutrifit-d6ea0.appspot.com",
  messagingSenderId: "693598253099",
  appId: "1:693598253099:web:594a3615bcce54440e3a6e",
  measurementId: "G-3J55H9JTY8",
  databaseURL: "https://nutrifit-d6ea0-default-rtdb.firebaseio.com"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.database();

export { firebase, auth, db };
