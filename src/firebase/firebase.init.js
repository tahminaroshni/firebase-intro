// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_API_,
  authDomain: process.env.REACT_API_,
  projectId: process.env.REACT_API_,
  storageBucket: process.env.REACT_API_,
  messagingSenderId: process.env.REACT_API_,
  appId: process.env.REACT_API_
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;