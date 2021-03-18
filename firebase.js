import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'


var firebaseConfig = {
    apiKey: "AIzaSyAwki7_re3QFPAZMsB5uKy8bA_-dx5NmCc",
    authDomain: "plant-tree-a597e.firebaseapp.com",
    projectId: "plant-tree-a597e",
    storageBucket: "gs://plant-tree-a597e.appspot.com",
    messagingSenderId: "802311492568",
    appId: "1:802311492568:web:56ab8d6b4f276609ba98ad",
    measurementId: "G-PSVME348LK"
  };
 // Initialize Firebase
 export const fb = firebase.initializeApp(firebaseConfig);

 export const db = firebase.firestore()
 export const dbMenuAdd = db.collection('menuItems');
 export const dbOrders = db.collection('orderItems');