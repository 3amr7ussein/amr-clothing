import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCSmAbgsxPvgMUnBQuL5IxEQX_uBEWkHbY",
    authDomain: "crwn-db-fba8e.firebaseapp.com",
    projectId: "crwn-db-fba8e",
    storageBucket: "crwn-db-fba8e.appspot.com",
    messagingSenderId: "914063021929",
    appId: "1:914063021929:web:5651db79b7fb475dbd8ff8",
    measurementId: "G-XR2260FR0Z"
  }


  firebase.initializeApp(config)

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;