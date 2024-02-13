import { Link, Outlet } from "react-router-dom"
import { projectAuth } from "../../firebase/config.js"

import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectiveData } from "react-firebase-hooks/firestore"

// const firestore = firebase.firestore()

function SignIn(){
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    projectAuth.signInWithPopup(provider)
  }

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut(){
  return projectAuth.currentUser && (
    <button onClick={() => projectAuth.signOut()}>Sign Out</button>
  )
}

async function Logout(){
  try {
    await projectAuth.signOut()

    sessionStorage.removeItem('firebaseToken')
    sessionStorage.removeItem('username')
  }catch(error){
    console.error('Error logging out', error)
  }
}

export default function Header(){
  const [user] = useAuthState(projectAuth)
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
            {user && <li><Link to="/profile">Profile</Link></li>}
            <li>{user ? <SignOut /> : <SignIn />}</li>
            <li><Link to="/sign_in">SIGN IN</Link></li>
            <li><Link to="/sign_up">SIGN UP</Link></li>
            {sessionStorage.username && <button onClick={Logout}>Log out</button>}
          </ul>
        </nav>
        {sessionStorage.username && <p>Welcome back {sessionStorage.username}</p>}
      </header>
      <div>
        <Outlet />
      </div>
    </>
  )
}
