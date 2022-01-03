// Import the functions you need from the SDKs you need
// import AsyncStorage from '@react-native-community/async-storage';
// : Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR2bUz0DboSJIzi68-uEAHnaXs_qxN1x0",
  authDomain: "campusfiretest.firebaseapp.com",
  databaseURL: "https://campusfiretest-default-rtdb.firebaseio.com",
  projectId: "campusfiretest",
  storageBucket: "campusfiretest.appspot.com",
  messagingSenderId: "405977687881",
  appId: "1:405977687881:web:aaf0393e1ca428fff55c98",
  measurementId: "G-KL7LTJPHWP"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
}else{
  app = firebase.app();
}
// export default !firebase.app.length ? firebase.initializeApp(config) : firebase.app();
const db = app.firestore();
const auth = firebase.auth();
export {db, auth};
