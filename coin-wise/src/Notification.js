import React, { useState, useEffect } from 'react';
import './Notification.css';
import { Link } from "react-router-dom";


const Notification = () => {
  const [showNotification, setShowNotification] = useState(true);

  const handleClose = () => {
    setShowNotification(false);
  };

  useEffect(() => {
    // Automatically hide the notification after a certain duration
    const timeout = setTimeout(() => {
      setShowNotification(false);
    }, 1000000); // Adjust the duration as needed

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {showNotification && (
        <Link to="/signup"> 
        <div className="notification-container">
          {/* <button className="close-button" onClick={handleClose}>
            X
          </button> */}
          <p>Click here to further configure your account</p>
        </div>
        </Link>
      )}
    </>
  );
};

export default Notification;
