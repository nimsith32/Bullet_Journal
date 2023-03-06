import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Squash as Hamburger } from 'hamburger-react'
import logo from "../../Assets/logo.png"
import './Navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  useEffect(() => { 
    let handler = () =>{
      setShowNavbar(false);
    };

    document.addEventListener("mousedown", handler);
  });

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="react logo"></img>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/Home" >Home</NavLink>
            </li>
            <li>
              <NavLink to="/MyJournal">My Journal</NavLink>
            </li>
            <li>
              <NavLink to="/Todolist">Todo List</NavLink>
            </li>
            <li>
              <NavLink to="/FinancialGoals">Financial Goals</NavLink>
            </li>
            <li className='sign'>
              <NavLink to="/Register" >Get Started</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar