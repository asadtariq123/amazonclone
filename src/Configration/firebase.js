import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBiCAjv2zBz6xa0kI40y4R0oa87ChJRySg",
  authDomain: "copy-fa1df.firebaseapp.com",
  projectId: "copy-fa1df",
  storageBucket: "copy-fa1df.appspot.com",
  messagingSenderId: "835101114831",
  appId: "1:835101114831:web:9e204538f8d9038066d2ba"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export const db = firebase.firestore();
  export const auth = firebase.auth()
  