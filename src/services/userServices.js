import { doc, setDoc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

/* CREATE */
export async function addUser(uid, username, email) {
    try {     
        await setDoc(doc(db, "Users", uid), {
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
export async function getUser(uid) {
    try {
        const docSnap = await getDoc(doc(db, "Users", uid));
        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            console.log('User does not exist');
            return null;
        }
    } catch (err) {
        console.log('Error getting user', err);
        return null;
    }
}

/* UPDATE */
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
export async function deleteUser(uid) {
    try {
        await deleteDoc(doc(db, "Users", uid));
        return null;
    } catch (err) {
        console.log('Error deleting user', err);
        return uid;
    }
}
