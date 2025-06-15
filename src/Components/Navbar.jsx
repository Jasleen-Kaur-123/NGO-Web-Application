import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">We Donate</div>
      <button className="navbar-hamburger" onClick={handleHamburgerClick} aria-label="Toggle navigation">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <ul className="navbar-list">
          <li><Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/donate" onClick={() => setMenuOpen(false)}>Donate</Link></li>
          <li><Link to="/event" onClick={() => setMenuOpen(false)}>Event</Link></li>
          <li><Link to="/partnership" onClick={() => setMenuOpen(false)}>Partnership</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
  
        <ul className="navbar-auth">
          <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
          <li><Link to="/register" onClick={() => setMenuOpen(false)}>Signup</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
