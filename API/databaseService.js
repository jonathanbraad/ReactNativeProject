import { db } from './firebaseConfig';

// Function to write user data to the Realtime Database
const writeUserData = async (userId, data) => {
  try {
    await db.ref('users/' + userId).set(data);
  } catch (error) {
    throw error;
  }
};

// Function to read user data from the Realtime Database
const readUserData = async (userId) => {
  try {
    const snapshot = await db.ref('users/' + userId).once('value');
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};

export { writeUserData, readUserData };
