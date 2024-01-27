import { Link, Outlet } from "react-router-dom"

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import "firebase/compat/auth";

import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectiveData } from "react-firebase-hooks/firestore"

const env = import.meta.env

firebase.initializeApp({
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_AUTH_DOMAIN,
  projectId: env.VITE_PROJECT_ID,
  storageBucket: env.VITE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_MESSAGING_SENDER_ID,
  appId: env.VITE_APP_ID,
  measurementId: env.VITE_MEASUREMENT_ID,
})

const auth = firebase.auth()
// const firestore = firebase.firestore()

function SignIn(){
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut(){
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

export default function Header(){
  const [user] = useAuthState(auth)
  return (
    <>
      <header id="header">
        <div className="logo">
          <li><Link to="/">Home</Link></li>
        </div>
        <nav>
          <ul id="links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li>{user ? <SignOut /> : <SignIn />}</li>
          </ul>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  )
}
