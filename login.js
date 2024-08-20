import {  signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { auth } from "./config.js";





const form = document.querySelector('#formm')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

form.addEventListener('submit' , (event)=>{
    event.preventDefault()

    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location = 'loggedIn.html'
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
   
  });



})