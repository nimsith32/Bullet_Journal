import React, {useState} from 'react'
import { useRef } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
       <header>
          <h3>Logo</h3>
          <nav className='nav-items' ref= {navRef}>
              <a href="/Home">Home</a>
              <a href="/MyJournal">My Journal</a>
              <a href="/#">ToDo List</a>
              <a href="/#">Finance Tracker</a>
              <a href="/#">Blog</a>
              <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                  <FaTimes/>
              </button>
          </nav>
          <button className='nav-btn' onClick={showNavbar}>
                  <FaBars/>
          </button>
       </header>
    
  );
}

export default Navbar