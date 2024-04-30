import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB8AuyItMGOydS02-8DmnQcgJA0_f-kg6k",
  authDomain: "books-dcb77.firebaseapp.com",
  projectId: "books-dcb77",
  storageBucket: "books-dcb77.appspot.com",
  messagingSenderId: "58386537880",
  appId: "1:58386537880:web:7392cdd09eafd6f9c1dfed",
  measurementId: "G-W450GTQKFH"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

// init auth
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }
