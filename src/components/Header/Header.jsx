import { Link, Outlet } from "react-router-dom"

export default function Header(){
  return (
    <>
      <header id="header">
        <div className="logo">
          <li><Link to="/">Home</Link></li>
        </div>
        <nav>
          <ul id="links">
            <li><Link to="/">Home</Link></li>
            <li><Link to={"books"}>Books</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/signin">Sign In</Link></li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search for books"/>
          <button type="button">Search</button>
        </div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  )
}
