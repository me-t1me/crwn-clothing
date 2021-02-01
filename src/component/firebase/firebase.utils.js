import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firebase-firestore';

const config = {
    apiKey: "AIzaSyCt0Xot4Ukt6NjAQRn5rM6CmIFc6iQe0Ps",
    authDomain: "crwn-db-5ebb6.firebaseapp.com",
    projectId: "crwn-db-5ebb6",
    storageBucket: "crwn-db-5ebb6.appspot.com",
    messagingSenderId: "785755125388",
    appId: "1:785755125388:web:2efd5427d14454ba38eda9",
    measurementId: "G-8QL52ENCEY"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;