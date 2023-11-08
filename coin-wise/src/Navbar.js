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
            {/* <li>
            will use our logo here but faMoney is a place holder
            <FontAwesomeIcon icon={faMoneyBill} />CoinWise
            </li> */}
            <li>
            <Link to="/" ><img className = "navbarImage" src={CoinWiseImage}></img> CoinWise</Link>
            </li>
            <li>
            <Link to="/" ><FontAwesomeIcon icon={faHome} /> Home</Link>
            </li>
            <li>
            <Link to="/about"><FontAwesomeIcon icon={faInfoCircle} /> About</Link>
            </li>
            <li>
              <Link to="/contactus"><FontAwesomeIcon icon={faEnvelope} /> Contact</Link>
            </li>
            <li>
              <Link to="/login"><FontAwesomeIcon icon={faEnvelope} /> Login</Link>
            </li>
            <li>
            <Link to="/signup"><FontAwesomeIcon icon={faEnvelope} /> SignUp</Link>
            </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
