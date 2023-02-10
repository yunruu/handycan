import { auth } from "../config/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { addUser } from "./userServices";

export async function handleLogin(email, password, setLoading) {
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setLoading(false);
        return user;
    })
}

export async function handleRegister(username, email, password, setLoading) {
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const uid = user.uid;
        addUser(uid, username);
        setLoading(false);
        return user;
    })
}
