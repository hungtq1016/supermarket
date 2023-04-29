// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3tQxOijhb7b5BG-0ouHr92w8vlxuPl3Q",
  authDomain: "ecommerce-55314.firebaseapp.com",
  projectId: "ecommerce-55314",
  storageBucket: "ecommerce-55314.appspot.com",
  messagingSenderId: "26687589128",
  appId: "1:26687589128:web:f01f9e5314c29218f97abd",
  measurementId: "G-CLDEM1XBHR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);