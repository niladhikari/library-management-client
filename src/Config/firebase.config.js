// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFQq3gcdUDIxo12NE-sgfVhvp-GEcnNtw",
  authDomain: "library-management-f81b2.firebaseapp.com",
  projectId: "library-management-f81b2",
  storageBucket: "library-management-f81b2.appspot.com",
  messagingSenderId: "690407108905",
  appId: "1:690407108905:web:314ba8cd430d95bae50738"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;