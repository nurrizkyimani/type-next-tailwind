import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  //   apiKey: process.env.apiKey,
  //   authDomain: process.env.authDomain,
  //   databaseURL:  process.env.databaseURL,
  //   projectId: process.env.projectId,
  //   storageBucket: process.env.storageBucket,
  //   messagingSenderId: process.env.messagingSenderId,
  //   appId: process.env.appId,
  // measurementId: process.env.measurementId
    
  apiKey: "AIzaSyDjf7oclJHeydoOwzRFxd22AcQ9J0wsj-g",
  authDomain: "type-rest.firebaseapp.com",
  databaseURL: "https://type-rest.firebaseio.com",
  projectId: "type-rest",
  storageBucket: "type-rest.appspot.com",
  messagingSenderId: "1082963221457",
  appId: "1:1082963221457:web:3f8d8989f962781b5f5ef0",
  measurementId: "G-J16WG50KPM"
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