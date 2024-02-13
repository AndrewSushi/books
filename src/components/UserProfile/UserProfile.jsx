import { projectFirestore } from '../../firebase/config.js'

import { useEffect, useState } from "react"

export default function UserProfile(){
  
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)
    projectFirestore.collection('users').get().then((snapshot) => {
      if(snapshot.empty){
        setError('No users to load')
        setIsPending(false)
      }else{
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({ id: doc.id, ...doc.data() })
        })
        setData(results)
        setIsPending(false)
      }
    }).catch(error => {
      setError(error.message)
      setIsPending(false)
    })
  }, [])
  
  return (
    <>
      <h1>Profile!</h1>
      <div>
        {error && <p>{error}</p>}
        {isPending && <p>Loading...</p>}
        <ul>
          {data && data.map(user => (
            <li key={user.id}>
              <p>{user.username}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
