// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOtH3gPKPlZHgrUcKs5148ktnB1kkFZs8",
  authDomain: "craft-85d70.firebaseapp.com",
  projectId: "craft-85d70",
  storageBucket: "craft-85d70.appspot.com",
  messagingSenderId: "447774687804",
  appId: "1:447774687804:web:83ac857b3a3269a6573939"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;