// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtuWS33f2le1bImqVO_4GqYFwPxe9X6ls",
  authDomain: "call-center-1bbb9.firebaseapp.com",
  databaseURL: "https://call-center-1bbb9-default-rtdb.firebaseio.com",
  projectId: "call-center-1bbb9",
  storageBucket: "call-center-1bbb9.appspot.com",
  messagingSenderId: "6669914597",
  appId: "1:6669914597:web:6dfd4cd1d01d6fce6bdf0c",
  measurementId: "G-DDTJYYXTRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);