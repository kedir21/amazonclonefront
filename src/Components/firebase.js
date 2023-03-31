import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyDGLkg_9mhjEMC6RfX1onNE2By5KNBd-Dk",
  authDomain: "clone-6d4b4.firebaseapp.com",
  projectId: "clone-6d4b4",
  storageBucket: "clone-6d4b4.appspot.com",
  messagingSenderId: "715624750948",
  appId: "1:715624750948:web:b3716316e7ee9a17a5e471",
  measurementId: "G-04F1RYG68C"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export  { db, auth };