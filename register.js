import {  createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { auth } from "./config.js";





const form = document.querySelector('#form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')



form.addEventListener('submit' ,(event)=>{
    event.preventDefault()
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    console.log(userCredential);
    
   window.location = 'login.html'
  })
  .catch((error) => {
    const errorCode = error.code;
   console.log(errorCode)
    // ..
  })
})