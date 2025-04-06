// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx5rU3ZAYkbAZGlABvayH5WsUTQc6SAyk",
  authDomain: "classtrack-app.firebaseapp.com",
  projectId: "classtrack-app",
  storageBucket: "classtrack-app.firebasestorage.app",
  messagingSenderId: "52161028261",
  appId: "1:52161028261:web:6c5cfc56631a411e4c6d4c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
