import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Squash as Hamburger } from 'hamburger-react'
import logo from "../../Assets/logo.png"
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
          <NavLink to="/Home" ><img src={logo} alt="react logo" /></NavLink>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/FinancialTracker">FinancialTracker</NavLink>
            </li>
            <li>
              <NavLink to="/TodoCalendar">Calendar</NavLink>

            </li>
            <li>
              <NavLink to="/MyJournal">My Journal</NavLink>
            </li>
            <li>
              <NavLink to="/Todolist">Todo List</NavLink>
            </li>
            <li className='sign'>
              <NavLink to="/Register" >Logout</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar