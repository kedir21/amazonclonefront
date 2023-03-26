// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGLkg_9mhjEMC6RfX1onNE2By5KNBd-Dk",
  authDomain: "clone-6d4b4.firebaseapp.com",
  projectId: "clone-6d4b4",
  storageBucket: "clone-6d4b4.appspot.com",
  messagingSenderId: "715624750948",
  appId: "1:715624750948:web:b3716316e7ee9a17a5e471",
  measurementId: "G-04F1RYG68C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth };