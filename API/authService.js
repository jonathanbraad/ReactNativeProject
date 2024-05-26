import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from './firebaseConfig';
import firestore from '@react-native-firebase/firestore';
import firebase from 'firebase/app';
import 'firebase/database';  // Import the Firebase database module



// Function to handle user login
const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};


// Function to handle user registration and create a Firestore document
// Function to handle user registration and create a Realtime Database entry
const registerUser = async (email, password, additionalData) => {
  try {
    // Authenticate the user
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Add additional user information to Firebase Realtime Database
    await db.ref('users/' + user.uid).set({
      email: email,
      ...additionalData  // Spread additional data like name, preferences, etc.
    });

    return user;
  } catch (error) {
    throw error;
  }
};

export { loginUser, registerUser };
