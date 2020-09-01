import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBeJpIhhEj-2fzFBeDptY6h12J1tkzTGu8",
    authDomain: "watsapp-clone-37280.firebaseapp.com",
    databaseURL: "https://watsapp-clone-37280.firebaseio.com",
    projectId: "watsapp-clone-37280",
    storageBucket: "watsapp-clone-37280.appspot.com",
    messagingSenderId: "549952344785",
    appId: "1:549952344785:web:f99c03ee0eb8a5c20debf0",
    measurementId: "G-W95SCL0XXF"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
  