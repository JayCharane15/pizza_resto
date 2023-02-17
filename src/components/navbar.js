import React, { useState } from 'react'
import Logo from '../assests/logo.jpg'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [openLink, setopenLink] = useState(false);

  const toggleNavbar = () => {
    setopenLink(!openLink);

  }
  return (
    <div className='navbar'>
      <div className='leftSide' id={openLink ? "open" : "close"}>
        <img src={Logo}></img>
        <div className='hiddenLinks'>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

      </div>

      <div className='rightSide'>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavbar}>
          <MenuIcon />

        </button>

      </div>


    </div>
  )
}

export default Navbar