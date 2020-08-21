import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL:  process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
    
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