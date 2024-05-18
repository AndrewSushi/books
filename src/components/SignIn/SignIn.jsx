import { useState } from "react"

export default function SignIn(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    console.log("BALLS")
    
  }

  return (
    <form onSubmit={handleSubmit} className={'signinForm'}>
      <h1>Sign In</h1>
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
      <button className="btn">Sign In</button>
    </form>
  )
}
