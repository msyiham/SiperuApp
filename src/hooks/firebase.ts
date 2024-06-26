// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9T4NF-gy7HcGT2woZngE3m0e7tATuNUg",
  authDomain: "siperu-pkmk-2024.firebaseapp.com",
  projectId: "siperu-pkmk-2024",
  storageBucket: "siperu-pkmk-2024.appspot.com",
  messagingSenderId: "161181926396",
  appId: "1:161181926396:web:05f7f4bb30542d07f82879",
  measurementId: "G-PSPZSZPV81"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);