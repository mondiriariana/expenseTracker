// Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faHome, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import CoinWiseImage from './coinwiseimage.png';

import './Navbar.css';

const Navbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setNavbarOpen(false);
      }
    };

    document.addEventListener('mousedown', closeNavbar);

    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousedown', closeNavbar);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`navbar ${isNavbarOpen ? 'open' : ''}`} ref={navbarRef}>
      <div className="hamburger" onClick={toggleNavbar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className={isNavbarOpen ? 'open' : ''}>
        <div className="spacing">
              {/* <Link to="/" ><li><img className = "navbarImage" src={CoinWiseImage}></img> CoinWise</li></Link> */}
              <Link to="/" ><li><FontAwesomeIcon icon={faHome} /> Home</li></Link>
              <Link to="/about"><li><FontAwesomeIcon icon={faInfoCircle} /> About</li></Link>
              <Link to="/contactus"><li><FontAwesomeIcon icon={faEnvelope} /> Contact</li></Link>
              <Link to="/login"><li><FontAwesomeIcon icon={faEnvelope} /> Login</li></Link>
              <Link to="/signup"><li><FontAwesomeIcon icon={faEnvelope} /> SignUp</li></Link>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
