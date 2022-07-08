// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfAQVO-afVwThOs9DpBmFYYPgtk7W8MXc",
  authDomain: "e-clone-95439.firebaseapp.com",
  projectId: "e-clone-95439",
  storageBucket: "e-clone-95439.appspot.com",
  messagingSenderId: "1056653075822",
  appId: "1:1056653075822:web:b037d120c680529ffacd7f",
  measurementId: "G-3QLTDY15DG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
