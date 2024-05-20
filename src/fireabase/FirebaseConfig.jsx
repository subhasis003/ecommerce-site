// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDoJvalILWn6esetahpL9BGRT__B5azWvI",
//   authDomain: "myfirstapp-38751.firebaseapp.com",
//   projectId: "myfirstapp-38751",
//   storageBucket: "myfirstapp-38751.appspot.com",
//   messagingSenderId: "273202707457",
//   appId: "1:273202707457:web:5724f212508b5b82f31400"
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH5mGXQH-BUnsxVuixZ-hmA0fVjzvB4ow",
  authDomain: "messenger-clone-45103.firebaseapp.com",
  projectId: "messenger-clone-45103",
  storageBucket: "messenger-clone-45103.appspot.com",
  messagingSenderId: "371892095489",
  appId: "1:371892095489:web:a7191652c6953eb9ec0e00",
  measurementId: "G-3BV93KGEGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}