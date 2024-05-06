import { getDatabase, ref, set, get } from "firebase/database";
import app from './firebaseConfig';

const database = getDatabase(app);

const writeUserData = async (userId, data) => {
  try {
    await set(ref(database, 'users/' + userId), data);
  } catch (error) {
    throw error;
  }
};

const readUserData = async (userId) => {
  try {
    const snapshot = await get(ref(database, 'users/' + userId));
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