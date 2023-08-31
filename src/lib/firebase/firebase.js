// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOOTwzGM-Y0eTTrwxeBW8PxwD_M5yzx0k",
  authDomain: "todoapp-e7492.firebaseapp.com",
  projectId: "todoapp-e7492",
  storageBucket: "todoapp-e7492.appspot.com",
  messagingSenderId: "510462614834",
  appId: "1:510462614834:web:1094cd742f088c0c5bcb2b",
  measurementId: "G-MXZYMRYDBV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);