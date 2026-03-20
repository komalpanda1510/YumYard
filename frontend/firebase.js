// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "yumyard-b85c6.firebaseapp.com",
  projectId: "yumyard-b85c6",
  storageBucket: "yumyard-b85c6.firebasestorage.app",
  messagingSenderId: "37887874811",
  appId: "1:37887874811:web:bbbf839be977603bc0825e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app,auth };