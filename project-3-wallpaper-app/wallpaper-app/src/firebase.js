// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDrbmSVmKN6rtCykFlavOU92AHf72y8Wh4",
    authDomain: "wallpaper-app-71800.firebaseapp.com",
    projectId: "wallpaper-app-71800",
    storageBucket: "wallpaper-app-71800.appspot.com",
    messagingSenderId: "297009811287",
    appId: "1:297009811287:web:a39e67e35683565958b812",
    measurementId: "G-F8VV43STX5"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const storage = firebase.storage();