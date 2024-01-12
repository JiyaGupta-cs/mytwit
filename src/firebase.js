import { getAuth} from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCcT7B1WRDqhg95nNLt7zcm8jMI_Jut32I",
    authDomain: "twit-e135f.firebaseapp.com",
    projectId: "twit-e135f",
    storageBucket: "twit-e135f.appspot.com",
    messagingSenderId: "767197518366",
    appId: "1:767197518366:web:14d618137f35b9d96aac0f",
    measurementId: "G-Z2Q8WTQJLH"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);

 export  const db = firebaseApp.firestore();

  const app=initializeApp(firebaseConfig);
 export  const auth=getAuth(app);
  // export default {db};