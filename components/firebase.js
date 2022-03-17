// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore";;
import { getAuth} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBtt9vShgdL-46-bVaMjuUYgHY7WKQVuWs",
  authDomain: "chat-ab583.firebaseapp.com",
  projectId: "chat-ab583",
  storageBucket: "chat-ab583.appspot.com",
  messagingSenderId: "395742845331",
  appId: "1:395742845331:web:93505ccec2cd53ddaa7066",
  measurementId: "G-W0QN4M0YVZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const authentication = getAuth(app);


