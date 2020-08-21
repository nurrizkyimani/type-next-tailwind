import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL:  process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
    
 
};

if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
}
  
export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(provider)
    console.log(res);
  } catch (error) {
    console.log(error);
  }  
};