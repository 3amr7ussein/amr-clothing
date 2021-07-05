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

  export const createUserProfileDocument = async (userAuth,additionalData) =>{
  
    if(!userAuth) return;
    const userRef = firestore.doc(`/users/${userAuth.uid}`); 
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
      const {displayName ,email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
       })
      }
      catch(error){
        console.log('error creating user',error.message);
      }
    }
      return userRef;
    };

  firebase.initializeApp(config)

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;