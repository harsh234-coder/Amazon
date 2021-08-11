import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlY0Ma1Rlm5en1mihhAPQdlIY39KJ8AyM",
  authDomain: "app-6ae52.firebaseapp.com",
  projectId: "app-6ae52",
  storageBucket: "app-6ae52.appspot.com",
  messagingSenderId: "1062783217862",
  appId: "1:1062783217862:web:f9085617bf350c2d65e7c7",
  measurementId: "G-Q10WTPMTPS"
};
//initialize app
const firebaseAPP = firebase.initializeApp(firebaseConfig);
//initialize database, firestore is a real time database in firebase
const db = firebaseAPP.firestore();
//This gives us a variable auth to handle sign in,etc
const auth = firebase.auth();

export { db, auth };
