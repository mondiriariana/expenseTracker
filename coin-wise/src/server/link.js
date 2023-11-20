//deal with the connection to the plaidAPI

export const handlePlaidButton = async () => {
    try {
      console.log('Making the Plaid API request...');

      //initialize values 
      const linkTokenRequest = {
        product: ["transactions", "auth", "identity"],
        country_codes: ["US", "CA"],
        language: "en",
      };

      //Call to create a link_token
      const response = await fetch('http://127.0.0.1:8000/api/create_link_token', {
        method: 'POST',
        body: JSON.stringify(linkTokenRequest),
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
          onSuccess: async function (public_token, metadata) {
            console.log(' public token: ', public_token);

            try {

              const setAccessTokenResponse = await fetch('http://127.0.0.1:8000/api/set_access_token', {
                method: 'POST',
                body: new URLSearchParams({ public_token, }), // Use URLSearchParams for form-urlencoded data
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded', // Set the content type to form-urlencoded
                },
              });
              
              if (!setAccessTokenResponse.ok) {
                throw new Error(`HTTP error! Status: ${setAccessTokenResponse.status}`);
              }

              console.log('Access token set successfully');
              ///GET ITEM ID AND ACCESS TOKEN 
              const dataInfo = await setAccessTokenResponse.json();
              const itemId = dataInfo.item_id;
              const accessToken = dataInfo.access_token;
              console.log("get item_id ", itemId);
              console.log("get access_token", accessToken);

         


              getAccounts();
              getBalance();
              getIdentity();
            
            } catch (accessTokenError) {
              console.error('Error setting access token: ', accessTokenError);
            }
          },

          onExit: function (err, metadata) {
            if (err != null) {
              console.error('Plaid API error: ', err);
            }
            console.log('Exit metadata: ', metadata);
          },

          receivedRedirectUri: null,

        });
        plaidHandler.open();

      } else {
        console.error('Plaid library not imported');
      }
    } catch (error) {
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
