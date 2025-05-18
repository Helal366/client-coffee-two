// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd4rDK7nzSRuI2ko2cOOgPNdNe7igU0cQ",
  authDomain: "coffee-two.firebaseapp.com",
  projectId: "coffee-two",
  storageBucket: "coffee-two.firebasestorage.app",
  messagingSenderId: "398293770884",
  appId: "1:398293770884:web:2a4478f11eb3de716098d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;