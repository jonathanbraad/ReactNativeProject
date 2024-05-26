import { firebase } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

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

const authInstance = auth();
const databaseInstance = database();

export { firebase, authInstance as auth, databaseInstance as db };
