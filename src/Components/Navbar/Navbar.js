import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Squash as Hamburger } from 'hamburger-react'
import './Navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src='../../Assets/icons/logo.png'></img>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/Home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/MyJournal">My Journal</NavLink>
            </li>
            <li>
              <NavLink to="/Todolist">Todo List</NavLink>
            </li>
            <li className='sign'>
              <NavLink to="/Signin">SignIn</NavLink>
            </li>
            <li className='sign'>
              <NavLink to="/Signup">Register</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar