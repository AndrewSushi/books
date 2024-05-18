import { useState } from "react"

import { projectAuth } from "../../firebase/config"
import { useNavigate, redirect } from "react-router-dom"

export default function SignUp(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  const navigate = useNavigate()
  function handleSubmit(e){
    e.preventDefault() 

    const signup = async (email, password, displayName) => {
      setError(null)
      setIsPending(true)

      try {
        // signup user
        const res = await projectAuth.createUserWithEmailAndPassword(email, password)
        const user = projectAuth.currentUser

        if(!res){
          throw new Error("Could not complete sign up")
        }

        // add display name to user
        await res.user.updateProfile({ displayName })
        
        sessionStorage.setItem('firebaseToken', user.getIdToken())
        sessionStorage.setItem('username', user.displayName)

        setIsPending(false)
        setError(null)
        navigate("/")
      }catch (err){
        console.log(err.message)
        setError(err.message)
        setIsPending(false)
      }
      return { error, isPending, signup }
    }
    signup(email, password, displayName)
  }

  return (
    <form onSubmit={handleSubmit} className={'signupForm'}>
      <h1>Sign Up</h1>
      <label>
        <span>Email:</span>
        <input 
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input 
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>Display Name:</span>
        <input 
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      {!isPending && <button className="btn">Sign Up</button>}
      {isPending && <button disabled>Loading</button>}
      {error && <p>{error}</p>}
    </form>
  )
}

