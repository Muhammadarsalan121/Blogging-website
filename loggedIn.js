import {  onAuthStateChanged  ,  signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js"
import { auth , db} from "./config.js";



const form = document.querySelector('#form');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const div = document.querySelector('#body-div')
const logoutBtn = document.querySelector('#Logout-btn')
let arr = []




form.addEventListener('submit', (event)=>{
   event.preventDefault()
   addItem()

})
function addItem(){
    arr.push({
        title : title.value,
        description : description.value,
    });
    console.log(arr);

    arr.map(async(item)=>{
        div.innerHTML += `<h1>${item.title}</h1>
       <h3> ${item.description}</h3>`

    try {
        const docRef = await addDoc(collection(db, "Data"), {
         title: title.value,
          description: description.value,
          
        });
        window.location = 'index.html'
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    })

}






logoutBtn.addEventListener('click' , ()=>{

  signOut(auth).then(() => {
    window.location = 'login.html'
  }).catch((error) => {
    // An error happened.
  });
})


onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(user)
      // ...
    } else {
      // User is signed out
      window.location = 'login.html'
    }
  });
  