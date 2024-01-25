import { useState, useEffect } from "react"
import axios from "axios"

export default function Books(){
  const apiKey = import.meta.env.VITE_API_KEY
 
  const [books, setBooks] = useState([])
  useEffect(() => {
    const fetchBooks = async () => {
      await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=balls&key=${apiKey}`
      )
        .then(response => {
          setBooks(response.data.items)
          console.log(response.data.items)
        })
        .catch(error => {
          console.log(error)
        })
    }
    fetchBooks()
  }, [apiKey])

  return (
    <div id="books">
      <h1>Books!</h1>
      <ul>
        {books && books.map(book => (
          <li key={book.id}>
            <p>
              {book.volumeInfo.title}
            </p>
            {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
              <img src={book.volumeInfo.imageLinks.thumbnail}/>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
