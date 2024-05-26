import { db } from '../firebaseConfig'; // Using the initialized db instance from firebaseConfig

// Function to add a user to Firebase Realtime Database
export const addUser = (userId, name, email) => {
  return db.ref('users/' + userId).set({
    name: name,
    email: email
  });
};

// Function to retrieve a user from Firebase Realtime Database
export const getUser = (userId) => {
  return db.ref('/users/' + userId).once('value').then(snapshot => {
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return null;  // Return null if user does not exist
    }
  });
};
