
import React from 'react';
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img 
          src='https://www.irctc.co.in/nget/assets/images/secondry-logo.png' 
          alt="IRCTC Logo" 
          className="logo-image"
        /> 
        IRCTC
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Trains</li>
        <li>PNR Status</li>
        <li>Contact</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

export default Navbar;