// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWv-XgKXC0GSTbZbzBbFfMkdAsAWcsxBQ",
  authDomain: "my-portfolio-c8638.firebaseapp.com",
  projectId: "my-portfolio-c8638",
  storageBucket: "my-portfolio-c8638.appspot.com",
  messagingSenderId: "13228328355",
  appId: "1:13228328355:web:af03b5c582994772540616"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()