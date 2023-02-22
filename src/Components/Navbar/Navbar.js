import React, {useState} from 'react'
import { useRef } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
      <header>
        <nav ref= {navRef}> 
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
        </button>
      </header>
    
  );
};

export default Navbar