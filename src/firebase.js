import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const config = {
  apiKey: "AIzaSyBKwXSjZdk2lsvSXTPpwB7URrpBOxbbFOg",
  authDomain: "auth-test-a02ab.firebaseapp.com",
  projectId: "auth-test-a02ab",
  storageBucket: "auth-test-a02ab.appspot.com",
  messagingSenderId: "358192318583",
  appId: "1:358192318583:web:e65dd500899e90a36cde72"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;