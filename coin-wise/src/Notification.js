import React, { useState, useEffect } from 'react';
import './Notification.css';


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



  const handlePlaidButton = async () => {
    try {
      console.log('Making the Plaid API request...');
      //Call to create a link_token
      const response = await fetch('http://127.0.0.1:8000/api/create_link_token', {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const linkToken = await response.json();

      console.log('Link token created ', linkToken);

      if (window.Plaid) {

      console.log('Plaid library found. Initializing...');

         //Use the link_token to open Link for your user
        // eslint-disable-next-line no-undef
     const plaidHandler = await window.Plaid.create({
      token: linkToken.link_token,

  
      //onSuccess callback, provide a temporary public_token.
      onSuccess: async function(public_token, metadata) {
        console.log('Plaid on succces trigered ')
        console.log(' public token: ', public_token);

        try{

        const setAccessTokenResponse = await fetch('http://127.0.0.1:8000/api/set_access_token', {
          method: 'POST',
          body: new URLSearchParams({ public_token }), // Use URLSearchParams for form-urlencoded data
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded', // Set the content type to form-urlencoded
          },
        });
        if (!setAccessTokenResponse.ok) {
          throw new Error(`HTTP error! Status: ${setAccessTokenResponse.status}`);
        }

        console.log('Access token set successfully');

        getAccounts();
        getBalance();
        getIdentity();
      } catch (accessTokenError) {
        console.error('Error setting access token: ', accessTokenError);
      }
    },
       


        //await exchangeToken(public_token);
   
      onExit: function(err, metadata) {
      if (err != null) { 
        console.log('Plaid API error: ', err);
      }
      console.log('Exit metadata: ', metadata);
    },

    receivedRedirectUri: null,
    
  });
  plaidHandler.open();

} else {
  console.error('Plaid library not imported');
  console.log('Plaid library not imported');
}
}catch(error){
  console.log('ERROR OCCURED ', error);
  console.error('Error: ', error);
}
  };
    


  const getAccounts = async () => {
    try {  
      fetch('http://localhost:8000/api/balance')
       .then(response => response.json())
       .then(data => {
         console.log('accounts ', data)
        
       });
    } catch (error) {
      console.error('Error: ', error);
      return null;
    }
  };


  const getBalance = async () => {
    try {  
      fetch('http://localhost:8000/api/balance')
       .then(response => response.json())
       .then(data => {
         console.log('fetch balance ', data)
        
       });
    } catch (error) {
      console.error('Error: ', error);
      return null;
    }
  };


  const getIdentity = async () => {
    try {  
      fetch('http://localhost:8000/api/identity')
       .then(response => response.json())
       .then(data => {
         console.log('fetch idenity ', data)
        
       });
    } catch (error) {
      console.error('Error: ', error);
      return null;
    }
  };



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
