// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from  "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaOKcmymXJbJk4O-YZP7Eon2u1LwMYqp8",
  authDomain: "task-manager-d0564.firebaseapp.com",
  projectId: "task-manager-d0564",
  storageBucket: "task-manager-d0564.firebasestorage.app",
  messagingSenderId: "529847356932",
  appId: "1:529847356932:web:985797e868e9aa9f086f51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
export {auth , db};