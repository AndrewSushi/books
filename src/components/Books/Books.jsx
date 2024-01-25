import { useEffect } from "react"
import axios from "axios"

export default function Books(){
  const apiKey = import.meta.env.VITE_API_KEY
  
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=balls&key=${apiKey}`
      )
      console.log(response)
    }
    fetchBooks()
  }, [])

  return (
    <div id="books">
      <h1>Books!</h1>
    </div>
  )
}
