import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhsaBVA0P0-wYJkl7aI1MGG7LZJPqdH0I",
    authDomain: "currency-converter-web-app.firebaseapp.com",
    projectId: "currency-converter-web-app",
    storageBucket: "currency-converter-web-app.appspot.com",
    messagingSenderId: "779529040176",
    appId: "1:779529040176:web:75aa744fc9cce5755dd8f5"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth,provider,storage};
export default db;
