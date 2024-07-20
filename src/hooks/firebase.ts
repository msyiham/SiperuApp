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
  apiKey: "AIzaSyDfBG_2knNVMAlKX_950eeGa4jW1_d3s3M",
  authDomain: "siperuversi2.firebaseapp.com",
  projectId: "siperuversi2",
  storageBucket: "siperuversi2.appspot.com",
  messagingSenderId: "812536973398",
  appId: "1:812536973398:web:30d1291775d07955a113f7",
  measurementId: "G-JKT7Y1ZDDE"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);