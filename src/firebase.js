// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import {getFirestore} from "@firebase/firestore"
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBc2HTF4WSMARQz0L_M8y8QPCgfcPiC3xg",
//   authDomain: "wedding-a78bf.firebaseapp.com",
//   projectId: "wedding-a78bf",
//   storageBucket: "wedding-a78bf.appspot.com",
//   messagingSenderId: "1079666249401",
//   appId: "1:1079666249401:web:82dc3cadccfbfa688e1568"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const firestore = getFirestore(app)



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "@firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADtQT9zjt0aDzoxx9dzn6YzTGMoArJiWA",
  authDomain: "testwed-4235e.firebaseapp.com",
  projectId: "testwed-4235e",
  storageBucket: "testwed-4235e.appspot.com",
  messagingSenderId: "727341053892",
  appId: "1:727341053892:web:a96f54f391c4d496e49691"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)
