import React from 'react';
import Nav from '../stylesheets/Nav.css';
import logo from '../images/logo.png';

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
         <div className="logo">
         <img src={logo} alt="this is logo" />
            
         </div>
      </div>
    </>
  )
}

export default Navbar;
