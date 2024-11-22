import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCm5bztn5G6hI0o4l2FsiKb3FAzT8_byug",
    authDomain: "auth-49af8.firebaseapp.com",
    projectId: "auth-49af8",
    storageBucket: "auth-49af8.firebasestorage.app",
    messagingSenderId: "293047578418",
    appId: "1:293047578418:web:7950b8cc92547074cef12b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };