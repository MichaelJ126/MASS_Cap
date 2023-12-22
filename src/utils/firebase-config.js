
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBKkrHAKTiPIQ0jCQcUnrb80Agr6ul0qIA",
  authDomain: "massmovies-44c8d.firebaseapp.com",
  projectId: "massmovies-44c8d",
  storageBucket: "massmovies-44c8d.appspot.com",
  messagingSenderId: "660715862090",
  appId: "1:660715862090:web:793e2d7278b04f0086ceb3"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const db=getFirestore(app);