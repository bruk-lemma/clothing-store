import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config={
    apiKey: "AIzaSyDZMjFhuV8KNaylCK1neQkvL47eMcoW8c4",
    authDomain: "clothing-store-db-4ac76.firebaseapp.com",
    projectId: "clothing-store-db-4ac76",
    storageBucket: "clothing-store-db-4ac76.appspot.com",
    messagingSenderId: "537865513733",
    appId: "1:537865513733:web:d5f7a8776952062fe2e56c"
  };

  firebase.initializeApp(config);
  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);
  
  export default firebase;