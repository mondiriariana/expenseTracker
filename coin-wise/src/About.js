// About.js
import React from 'react';
import './About.css'; 
import Navbar from './Navbar'; 
import CoinWiseImage from './coinwiseimage.png';

const About = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="about-content">
        <img className = "aboutImage" src={CoinWiseImage}></img>
        <h2>About Us</h2>
        <p>
          Welcome to CoinWise! We are a team of passionate individuals dedicated to helping young adults navigate the challenges of financial independence.
        </p>
        <p>
          Our mission is to provide a user-friendly platform that empowers young adults to make informed financial decisions, manage their budgets effectively, and build a secure financial future.
        </p>
        <p>
          Explore our website to discover tools, resources, and insights tailored to your financial journey. Whether you're just starting your financial independence or looking to enhance your money management skills, CoinWise is here to support you every step of the way.
        </p>
      </div>
    </div>
  );
};

export default About;
