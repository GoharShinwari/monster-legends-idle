// firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyArTNCPAE60UHbrHxuCeI3dJwQHxGxRbE4",
  authDomain: "monster-legends-idle.firebaseapp.com",
  projectId: "monster-legends-idle",
  storageBucket: "monster-legends-idle.appspot.com",
  messagingSenderId: "1024077220424",
  appId: "1:1024077220424:web:8c6c69e987845b39f6267d",
  measurementId: "G-KLRQ576D6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase services
const auth = getAuth(app);
const db = getDatabase(app);

export { app, auth, db };
