import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import firebase from 'firebase/compat/app';
 


const app = initializeApp ({
  apiKey: process.env.REACT_APP_apiKey,
authDomain: "katia-391415.firebaseapp.com",
  projectId: "katia-391415",
  storageBucket: "katia-391415.appspot.com",
  messagingSenderId: "360091417577",
  appId: "1:360091417577:web:040c730bd90b755cf8e978",
  measurementId: "G-TX6EE8PTC6"
});

const storage = getStorage(app);
export default storage;
