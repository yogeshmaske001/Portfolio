import React, { useState } from 'react'; // Import useState
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <h3 className='appname'><i className="pro fa-solid fa-user-tie"></i>Yogesh Maske</h3>

      {/* Hamburger menu icon for mobile */}
      <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation links - dynamically apply 'nav-active' class */}
      <ul className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
        <li>
          <Link
            className={isActive('/') ? "active" : "hyperlinks"}
            to="/"
            onClick={() => setIsOpen(false)} // Close menu on link click
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={isActive('/about') ? "active" : "hyperlinks"}
            to="/about"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={isActive('/skills') ? "active" : "hyperlinks"}
            to="/skills"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className={isActive('/myworks') ? "active" : "hyperlinks"}
            to="/myworks"
            onClick={() => setIsOpen(false)}
          >
            My Works
          </Link>
        </li>
        <li>
          <Link
            className={isActive('/contactme') ? "active" : "hyperlinks"}
            to="/contactme"
            onClick={() => setIsOpen(false)}
          >
            Contact Me
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;