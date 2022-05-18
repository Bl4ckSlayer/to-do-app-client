// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUTHffRmeGoY7YelmPkNCfdYNOoCU8-Fg",
  authDomain: "to-do-8189b.firebaseapp.com",
  projectId: "to-do-8189b",
  storageBucket: "to-do-8189b.appspot.com",
  messagingSenderId: "76412896370",
  appId: "1:76412896370:web:9f848ad601a1352bf8eeeb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
