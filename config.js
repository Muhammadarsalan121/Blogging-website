
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnTPQxH0LLY6XZA7ePTIfoNdVjJrYa3pg",
  authDomain: "blogging-app-121.firebaseapp.com",
  projectId: "blogging-app-121",
  storageBucket: "blogging-app-121.appspot.com",
  messagingSenderId: "345674219632",
  appId: "1:345674219632:web:299df7f5c35f6924fa74b5",
  measurementId: "G-M6F4X3BFJW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
export const db = getFirestore(app);