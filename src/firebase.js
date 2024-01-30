// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDKnwji_FpmTz3i3Tr7TC5CtraJ5P7YOIg",
  authDomain: "buyerfolio-3fefb.firebaseapp.com",
  projectId: "buyerfolio-3fefb",
  storageBucket: "buyerfolio-3fefb.appspot.com",
  messagingSenderId: "288626877025",
  appId: "1:288626877025:web:aa0521e7cfab7ee67dc020"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;