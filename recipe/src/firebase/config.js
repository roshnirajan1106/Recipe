import firebase from "firebase/app";
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDjuqHT0HTjl-QfoSJXFc87gqFV3n1DSus",
    authDomain: "cooking-ninja-site-d311a.firebaseapp.com",
    projectId: "cooking-ninja-site-d311a",
    storageBucket: "cooking-ninja-site-d311a.appspot.com",
    messagingSenderId: "118249671784",
    appId: "1:118249671784:web:f51b7dd6040eed178ebfdd"
  }
  //init firebase
  firebase.initializeApp(firebaseConfig) //this will conect our app to firebase backend

  //init services
  const projectFirestore =firebase.firestore();
  //gives the services

  export {projectFirestore}