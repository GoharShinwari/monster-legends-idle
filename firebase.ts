
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyArTNCPAE60UHbrHxuCeI3dJwQHxGxRbE4",
    authDomain: "monster-legends-idle.firebaseapp.com",
    projectId: "monster-legends-idle",
    storageBucket: "monster-legends-idle.appspot.com",
    messagingSenderId: "1024077220424",
    appId: "1:1024077220424:web:8c6c69e987845b39f6267d",
    measurementId: "G-KLRQ576D6L"
  };  
  

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
