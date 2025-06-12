import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCQOciJ47ZnZgiOzL4nwo-P-DFlj62PbuQ",
  authDomain: "iwhsproject.firebaseapp.com",
  projectId: "iwhsproject",
  storageBucket: "iwhsproject.firebasestorage.app",
  messagingSenderId: "717929552010",
  appId: "1:717929552010:web:f3b9ea2645fb93fb827573"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };