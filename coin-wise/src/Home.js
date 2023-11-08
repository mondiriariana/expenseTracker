// Home.js
import React from 'react';
import './Home.css';
import Navbar from './Navbar'; 
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="hero-container">
        <div className="hero-content">
          <h1>Welcome to CoinWise</h1>
          <p className="home-p ">Our website will assist young adults in conquering these challenges and offer a tool for young adults who are experiencing new financial independence. Our website will be engaging and easy to maneuver, making it so these young adults have less stress surrounding their finances. </p>
          <Link to="/signup"><button className="cta-button">Get Started</button></Link>
          <Link to="/about"><button className="cta-button">Learn More</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
