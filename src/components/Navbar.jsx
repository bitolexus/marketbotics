import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";
import { useState } from 'react';

export const Navbar = () => {
  const [menuOpen, setmMenuOpen]=useState(false)
  return <nav>
    <Link className='title' to="/">Home</Link>
    <div className='menu' onClick={()=>{
      setmMenuOpen(!menuOpen);
    }}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <ul className={menuOpen?"open":""}>
        <li>
            <NavLink to="/about">About</NavLink>
        </li>
        <li>
            <NavLink to="/services">Services</NavLink>
        </li>
        <li>
            <NavLink to="/contact">Contact</NavLink>
        </li>
    </ul>
  </nav>
}
