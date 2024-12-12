import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuCYoVV5CzZU7t3W8NFq12fbCUwk7dKcc",
  authDomain: "grinns-66dfd.firebaseapp.com",
  projectId: "grinns-66dfd",
  storageBucket: "grinns-66dfd.firebasestorage.app",
  messagingSenderId: "1027972563291",
  appId: "1:1027972563291:web:58e729c2c51ce7ea975a7e",
  measurementId: "G-FMEZNV0N0Z",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
