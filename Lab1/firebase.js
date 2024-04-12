// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCduO80yLYCcfNUmQOL9DbKBD4UpODLj1s",
  authDomain: "lab6-7f080.firebaseapp.com",
  projectId: "lab6-7f080",
  storageBucket: "lab6-7f080.appspot.com",
  messagingSenderId: "309515028196",
  appId: "1:309515028196:web:646b3b93cb1c49f6784ef1"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0 ){
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth()
const db = app.firestore()

export { auth, db };