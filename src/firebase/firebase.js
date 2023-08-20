// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXQSZ_qqfGTTNYQNczgfDwU6rDbOxL4Uo",
  authDomain: "filmyverse-2da9c.firebaseapp.com",
  projectId: "filmyverse-2da9c",
  storageBucket: "filmyverse-2da9c.appspot.com",
  messagingSenderId: "654637066188",
  appId: "1:654637066188:web:e9635c4b4e9b4b3339df69",
  measurementId: "G-HHXB07WQM6"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db =getFirestore(app);
export const moviesRef =collection(db,"movies");
export const usersRef = collection(db, "users");
export const reviewsRef = collection(db, "reviews");
export default app;