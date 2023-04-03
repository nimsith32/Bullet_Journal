import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Squash as Hamburger } from 'hamburger-react'
import logo from "../../Assets/logo.png"
import './Navbar.css'
import { Dropdown } from 'flowbite-react';


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

 
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
              <NavLink to="/TodoCalendar">Calendar</NavLink>
            </li>
            <li>
            <Dropdown className=' p-3 text-white bg-white relative'
              label={<span className='text-white'>Financial Tracker</span>}
              inline={true}
            >
              <div className='flex flex-col justify-left gap-3 relative'>
              <Link to="/MonthlyBudget" className='text-black'>
                Monthly Budget
              </Link>
              <Link to="/Challenge"  className='text-black'>
              Challenge
              </Link>
              </div>
              
            </Dropdown>
              
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