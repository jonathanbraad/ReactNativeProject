import { auth, db } from '../firebaseConfig';

// Function to handle user login
const loginUser = async (email, password) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// Function to handle user registration and create a Realtime Database entry
const registerUser = async (email, password, additionalData) => {
  try {
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
