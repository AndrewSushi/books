import { useState } from "react"

export default function SearchBar({ onSearch }){
  const [searchQuery, setSearchQuery] = useState('')

  function handleInputChange(e){
    setSearchQuery(e.target.value)
  }

  function handleSearch(e){
    e.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <form onSubmit={handleSearch}>
      <input 
        type="text" 
        placeholder="Search"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  )
}
