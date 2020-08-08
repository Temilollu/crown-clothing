import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyCEoq9StcdaXs6yRb3gasBePQmRXnYN2LA",
    authDomain: "crown-db-6228b.firebaseapp.com",
    databaseURL: "https://crown-db-6228b.firebaseio.com",
    projectId: "crown-db-6228b",
    storageBucket: "crown-db-6228b.appspot.com",
    messagingSenderId: "204962140454",
    appId: "1:204962140454:web:30dcf39b0740f1bdc2f1e7",
    measurementId: "G-Q2802HPDHX"
  }

  export const createUserProfileDocument = async (userAuth,additionalData) =>{
    if(!userAuth)return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`)  
    const snapShot  = await userRef.get()

    if(!snapShot.exists){
      const { displayName, email} = userAuth;
      const createdAt = new Date()
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      } 
      catch(error){
       console.log('error creating user', error.message)
      }
     }
     return userRef;
  }

  firebase.initializeApp(config);

  export  const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase