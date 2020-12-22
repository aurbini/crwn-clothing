import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCXBdSQ3mY2pzeHSZX2tCylMJ-fV8rpUjg",
  authDomain: "crwn-db-807b0.firebaseapp.com",
  projectId: "crwn-db-807b0",
  storageBucket: "crwn-db-807b0.appspot.com",
  messagingSenderId: "283403916504",
  appId: "1:283403916504:web:59fc5ed39ad942ba7bf3ad",
  measurementId: "G-PBNYNNMM71"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore() 

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;