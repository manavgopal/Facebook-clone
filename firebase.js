import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCnnF8fdS0MTjwENtSWJDLksm91lq8XUl0",
  authDomain: "facebook-clone-854c5.firebaseapp.com",
  projectId: "facebook-clone-854c5",
  storageBucket: "facebook-clone-854c5.appspot.com",
  messagingSenderId: "127534421005",
  appId: "1:127534421005:web:a05ebf75e5720e88863144"
};
 
// check the initialisation and rendering of serversite 
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export {db,storage};