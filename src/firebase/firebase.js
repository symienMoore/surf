// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDpBy2BF3q_tgf2GpZmUsuw5HjN-qoHOXg",
  authDomain: "surf-f5fdd.firebaseapp.com",
  projectId: "surf-f5fdd",
  storageBucket: "surf-f5fdd.appspot.com",
  messagingSenderId: "143916511905",
  appId: "1:143916511905:web:44431a80b9cbfc178636e0",
  measurementId: "G-WJBMPE9BJ4"
};

export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);