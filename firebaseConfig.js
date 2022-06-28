// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnnK-5dNgsvgQjqyBpjTfgKly8P0wjrgw",
  authDomain: "labapp-444db.firebaseapp.com",
  projectId: "labapp-444db",
  storageBucket: "labapp-444db.appspot.com",
  messagingSenderId: "616604598125",
  appId: "1:616604598125:web:8cf9b57f49c7b24a61e464",
  measurementId: "G-7BNQXJCLJF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app); 