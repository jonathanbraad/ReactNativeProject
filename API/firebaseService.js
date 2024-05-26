import firestore from '@react-native-firebase/firestore';
import firebase from 'firebase/app';
import 'firebase/database';  // Import the Firebase database module


// Function to add a user to Firebase Realtime Database
export const addUser = (userId, name, email) => {
  return firebase.database().ref('users/' + userId).set({
    name: name,
    email: email
  });
};


// Function to retrieve a user from Firebase Realtime Database
export const getUser = (userId) => {
  return firebase.database().ref('/users/' + userId).once('value').then(snapshot => {
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return null;  // Return null if user does not exist
    }
  });
};

