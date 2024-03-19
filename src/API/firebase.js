// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOgaQ8_YDDrqEnUZv2NS7FVrc8Tgi9Rg8",
  authDomain: "netflix-clone-90f9a.firebaseapp.com",
  projectId: "netflix-clone-90f9a",
  storageBucket: "netflix-clone-90f9a.appspot.com",
  messagingSenderId: "947569994557",
  appId: "1:947569994557:web:cc6eeccb74647b9b3c3354"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)