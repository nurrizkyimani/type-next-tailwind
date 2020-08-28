import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDjf7oclJHeydoOwzRFxd22AcQ9J0wsj-g',
	authDomain: 'type-rest.firebaseapp.com',
	databaseURL: 'https://type-rest.firebaseio.com',
	projectId: 'type-rest',
	storageBucket: 'type-rest.appspot.com',
	messagingSenderId: '1082963221457',
	appId: '1:1082963221457:web:3f8d8989f962781b5f5ef0',
	measurementId: 'G-J16WG50KPM'
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const signInWithGoogle = () => {
	auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
		const provider = new firebase.auth.GoogleAuthProvider();

		return auth
			.signInWithPopup(provider)
			.then((result) => {
				console.log(result);
				const token = result.credential.accessToken;
				const user = result.user;
			})
			.catch((err) => {
				console.log(err);
			});
	});
};

// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

// const firebaseConfig = {
// 	apiKey: 'AIzaSyDjf7oclJHeydoOwzRFxd22AcQ9J0wsj-g',
// 	authDomain: 'type-rest.firebaseapp.com',
// 	databaseURL: 'https://type-rest.firebaseio.com',
// 	projectId: 'type-rest',
// 	storageBucket: 'type-rest.appspot.com',
// 	messagingSenderId: '1082963221457',
// 	appId: '1:1082963221457:web:3f8d8989f962781b5f5ef0',
// 	measurementId: 'G-J16WG50KPM'

// 	// apiKey: process.env.API_KEY,
// 	// authDomain: process.env.AUTH_DOMAIN,
// 	// databaseURL:  process.env.DATABASE_URL,
// 	// projectId: process.env.PROJECT_ID,
// 	// storageBucket: process.env.STORAGE_BUCKET,
// 	// messagingSenderId: process.env.MESSAGING_SENDER_ID,
// 	// appId: process.env.APP_ID,
// 	// measurementId: process.env.MEASUREMENT_ID
// };

// if (!firebase.apps.length) {
// 	firebase.initializeApp(firebaseConfig);
// }

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// export const signInWithGoogle = async () => {
// 	try {
// 		const res = await auth.signInWithPopup(provider);
// 		console.log(res);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };
