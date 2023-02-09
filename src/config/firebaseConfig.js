// Import the functions you need from the SDKs you need
import { initializeApp, getAuth} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYnaI715--oaLM2M6mOPVr22zoyN-zwqc",
  authDomain: "handycan-2d688.firebaseapp.com",
  projectId: "handycan-2d688",
  storageBucket: "handycan-2d688.appspot.com",
  messagingSenderId: "205001058939",
  appId: "1:205001058939:web:7289824f7ea3874e3750de",
  measurementId: "G-GGZ20BC5DK"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };
