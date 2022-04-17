// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/firebase-auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL8eCzYaq75fOkrOmF9TqlOnsnEhlWWuM",
  authDomain: "gym-react-app-9775a.firebaseapp.com",
  projectId: "gym-react-app-9775a",
  storageBucket: "gym-react-app-9775a.appspot.com",
  messagingSenderId: "521578855061",
  appId: "1:521578855061:web:69181bf2ec8e04a381399c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Auth = getAuth(app);

export default Auth;