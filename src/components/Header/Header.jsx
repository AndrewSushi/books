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
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/sign_in">Sign In</Link></li>
            <li><Link to="/sign_up">Sign Up</Link></li>
          </ul>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  )
}
