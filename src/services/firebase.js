import axios from "axios";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB25F3Xqt7ehnvWG1tZJLa-Rhs456iTYFc",
  authDomain: "contact-list-5874e.firebaseapp.com",
  projectId: "contact-list-5874e",
  storageBucket: "contact-list-5874e.appspot.com",
  messagingSenderId: "171916379767",
  appId: "1:171916379767:web:bf099af89ef4e26e44e872"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default axios.create(
    {
        baseURL:'https://contact-list-5874e-default-rtdb.firebaseio.com/'
    }
)