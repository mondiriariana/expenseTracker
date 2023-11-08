// ContactUs.js
import React from 'react';
import './ContactUs.css'; 
import Navbar from './Navbar'; 

const ContactUs = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p className="home-p">
          Have questions or feedback? Reach out to us using the form below, and we'll get back to you as soon as possible.
        </p>
        <form className="contact-form">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
