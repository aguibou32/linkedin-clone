import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWiDMwAPN7YEvg8514U7bd3S-ze-PEvao",
  authDomain: "linkedin-clone-59571.firebaseapp.com",
  projectId: "linkedin-clone-59571",
  storageBucket: "linkedin-clone-59571.appspot.com",
  messagingSenderId: "1034719825398",
  appId: "1:1034719825398:web:33c127fe66056dd88ecbd7",
  measurementId: "G-KX5ZKVJGP3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig); // initializing our app
const db = firebaseApp.firestore(); // Accessing the database
const auth = firebase.auth();

export { db, auth };
