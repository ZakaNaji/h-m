import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCsfMqP0c7RGZ2vFpVoPtWsUoSz1sU7wb8",
    authDomain: "h-and-m-1a291.firebaseapp.com",
    databaseURL: "https://h-and-m-1a291.firebaseio.com",
    projectId: "h-and-m-1a291",
    storageBucket: "h-and-m-1a291.appspot.com",
    messagingSenderId: "122875218014",
    appId: "1:122875218014:web:a1425aabb3b2c76c968ccf"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//sign in with google config:
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

