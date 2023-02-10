import { doc, setDoc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

/* CREATE */
/**
 * Adds user to database
 * Note that users are identified solely by uid. 
 * Usernames are not unique.
 * @param {String} uid User id on Firebase Authentication
 * @param {String} username Username of user to be displayed
 * @param {String} email Email that user registered with
 * @returns uid is successful, null if not
 */
export async function addUser(uid, username, email) {
    try {     
        await setDoc(doc(db, "Users", uid), {
            uid: uid,
            username: username,
            email: email,
        });
        return uid;
    } catch (err) {
        console.log('Error adding user', err);
        return null;
    }
}

/* READ */
/**
 * Retrieves user object from database
 * User object has the following fields accessible by dot notation:
 * uid, username, email
 * @param {String} uid User id on Firebase Authentication
 * @returns User object
 */
export async function getUser(uid) {
    try {
        const docSnap = await getDoc(doc(db, "Users", uid));
        if (docSnap.exists()) {
            console.log(docSnap.data());
            return docSnap.data();
        } else {
            console.log('User does not exist');
        }
    } catch (err) {
        console.log('Error getting user', err);
    }
}

/* UPDATE */
/**
 * Updates a user's username on the database
 * @param {String} uid User id on Firebase Authentication
 * @param {String} username New username of user to be displayed
 * @returns uid if successful, null if not
 */
export async function updateUsername(uid, username) {
    try {
        await updateDoc(doc(db, "Users", uid), {
            username: username,
        });
        return uid;
    } catch (err) {
        console.log('Error getting user', err);
        return null;
    }
}

/* DELETE */
/**
 * Deletes a user from database
 * @param {String} uid User id on Firebase Authentication
 * @returns uid if successfull, null otherwise
 */
export async function deleteUser(uid) {
    try {
        await deleteDoc(doc(db, "Users", uid));
        return uid;
    } catch (err) {
        console.log('Error deleting user', err);
        return null;
    }
}
