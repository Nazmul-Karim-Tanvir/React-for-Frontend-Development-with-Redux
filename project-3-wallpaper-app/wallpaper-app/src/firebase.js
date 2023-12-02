// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDrbmSVmKN6rtCykFlavOU92AHf72y8Wh4",
    authDomain: "wallpaper-app-71800.firebaseapp.com",
    projectId: "wallpaper-app-71800",
    storageBucket: "wallpaper-app-71800.appspot.com",
    messagingSenderId: "297009811287",
    appId: "1:297009811287:web:a39e67e35683565958b812",
    measurementId: "G-F8VV43STX5"
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const storage = getStorage(app);