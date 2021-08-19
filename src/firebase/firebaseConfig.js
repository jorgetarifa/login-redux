import firebase from 'firebase/app'
import 'firebase/firestore' 
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDqE0VYlEZShvkWGxrc6QIzvgb3_vAjH9I",
    authDomain: "sprint3-8e29a.firebaseapp.com",
    projectId: "sprint3-8e29a",
    storageBucket: "sprint3-8e29a.appspot.com",
    messagingSenderId: "851263751901",
    appId: "1:851263751901:web:1674583b72df06f4ec3d34"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const google = new firebase.auth.GoogleAuthProvider();
  
  export {
    db,
    google,
    firebase}