// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCW4d4G0jtPZZbApgtI80YbTUCBs7lo5uo",
  authDomain: "netflix-clone-80580.firebaseapp.com",
  projectId: "netflix-clone-80580",
  storageBucket: "netflix-clone-80580.appspot.com",
  messagingSenderId: "455586833675",
  appId: "1:455586833675:web:1575797cff6b9946f92e0e",
  measurementId: "G-PNZVMSJBV2",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();


export { auth };
export default db;
