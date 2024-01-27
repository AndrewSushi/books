import { useState, useEffect } from "react"
import axios from "axios"

import SearchBar from "./SearchBar/SearchBar"

export default function Books(){
  const apiKey = import.meta.env.VITE_BOOKS_API_KEY
 
  const [books, setBooks] = useState([])
  const [searchQuery, setSearchQuery] = useState('best sellers')

  useEffect(() => {
    const fetchBooks = async () => {
      await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&orderBy=relevance&key=${apiKey}`
      )
        .then(response => {
          setBooks(response.data.items || [])
          console.log(response.data.items)
        })
        .catch(error => {
          console.log(error)
        })
    }
    fetchBooks()
  }, [searchQuery, apiKey])

  function handleSearch(query){
    setSearchQuery(query)
  }

  return (
    <div id="books">
      <h1>Books!</h1>
      <SearchBar onSearch={handleSearch}/>
      <ul>
        {books && books.map(book => (
          <li key={book.id}>
            <p>
              {book.volumeInfo.title}
            </p>
            {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
              <img src={book.volumeInfo.imageLinks.thumbnail || book.volumeInfo.imageLinks.smallThumbnail}/>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
