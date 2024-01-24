import { Link } from "react-router-dom"
import "./Header.css"

export default function Header(){
  return (
    <header>
      <div className="logo">
        <li><Link to="/">Home</Link></li>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search for books"/>
        <button type="button">Search</button>
      </div>
    </header>
  )
}
