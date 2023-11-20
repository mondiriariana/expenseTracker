import React, { useState, useEffect } from 'react';
import './Notification.css';
import { handlePlaidButton  } from './server/link';
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
        <div className="notification-container">
          <p>
            {' '}
            <button id="plaid-button" onClick={handlePlaidButton}>
              Click here to further configure your account
            </button>
          </p>
        </div>
      )}
    </>
  );
};

export default Notification;
