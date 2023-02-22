import React, {useState} from 'react'
import { useRef } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import { Link } from "react-router-dom";
//import "./Navbar.css";
import { Navbar as NavBar } from 'flowbite-react';

function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
      <header>
        <NavBar
  fluid={true}
  rounded={true}
>
  <NavBar.Brand
   
    to="/navbars"
  >
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
  </NavBar.Brand>
  <NavBar.Toggle />
  <NavBar.Collapse>
    <NavBar.Link
      href="/navbars"
      active={true}
    >
      Home
    </NavBar.Link>
    <NavBar.Link
    
      to="/navbars"
    >
      About
    </NavBar.Link>
    <NavBar.Link href="/navbars">
      Services
    </NavBar.Link>
    <NavBar.Link href="/navbars">
      Pricing
    </NavBar.Link>
    <NavBar.Link href="/navbars">
      Contact
    </NavBar.Link>
  </NavBar.Collapse>
</NavBar>
        {/* <nav ref= {navRef}> 
          <div className='nav-links'>
            <div className='logo'>
              <h1><a href='/' className='home'>LOGO</a></h1>
            </div>
            <a href="/myjournal" className='myjournal'>My Journal</a>
            <a href="/todolist" className='todolist'>ToDo List</a>
            <a href="/financetracker" className='financetracker'>Finance Tracker</a>
            <a href="/signin" className='signin'>SignIn</a>
            <a href="/signup" className='signup'>SignUp</a>
          </div>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
                <FaBars/>
        </button> */}
      </header>
    
  );
};

export default Navbar