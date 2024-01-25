import { useState } from "react"

export default function SearchBar({ onSearch }){
  const [searchQuery, setSearchQuery] = useState('')

  function handleInputChange(e){
    setSearchQuery(e.target.value)
  }

  function handleSearch(){
    onSearch(searchQuery)
  }

  return (
    <>
      <input 
        type="text" 
        placeholder="Search"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </>
  )
}
