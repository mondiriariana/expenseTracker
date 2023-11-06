
const plaidProducts = ['auth','transactions','identity'];
const crountryCodes = ['US'];
const redirectUri = 'http://localhost:3000';


(async function($) {
  var handler = Plaid.create({
    // Create a new link_token to initialize Link
    token: (await $.post('http://127.0.0.1:8000/api/create_link_token')).link_token,
    //receivedRedirectUri: window.location.href,
    receivedRedirectUri: null,
    onSuccess: function(public_token, metadata) {
      console.log('Link token created ')

      // Send the public_token to your app server.
      $.post('http://127.0.0.1:8000/api/exchange_public_token', {
        public_token: public_token, 
        }, function(response){
          console.log('Response from server: ', response);
      });
    },
    onExit: function(err, metadata) {
      // The user exited the Link flow.
      if (err != null) { 
        console.log('Plaid API error: ', err);
      }
      console.log('Exit metadata: ', metadata);
    }
      // metadata contains information about the institution
      // that the user selected and the most recent API request IDs.
      // Storing this information can be helpful for support.
  });

  $('#link-button').on('click', function(e) {
    handler.open();
  });

})(jQuery);


/*
(async ($) => {
  const fetchLinkToken = async () => {
      const response = await fetch('/create_link_token');
      const { linkToken } = await response.json();
      return linkToken;
  };

  const handlePlaidLink = async () => {
      const token = await fetchLinkToken();
      const handler = plaid.create({
          token: token,
          onSuccess: async (publicToken, metadata) => {
              console.log(publicToken);
              console.log(metadata);

              // Assuming you want to trigger the token exchange process when Plaid link is successful.
              await fetch('/token-exchange', {
                  method: 'POST',
                  body: JSON.stringify({ publicToken }),
                  headers: {
                      'Content-Type': 'application/json',
                  },
              });
          },
          onExit: async (error, metadata) => {
              console.log(error);
              console.log(metadata);
          },
          onEvent: async (metadata) => {
              console.log(metadata);
          },
      });
      handler.open();
  };

  $('#plaid-button').on('click', handlePlaidLink);
})(jQuery);


/*
require('dotenv').config();
document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById('quickstartButton');
  
    startButton.addEventListener('click', () => {
      // Execute the shell script to start the backend
      fetch('../backendStart.sh')
        .then(response => response.text())
        .then(scriptOutput => {
          console.log(scriptOutput);
  
          // Wait for a moment (e.g., 5 seconds) to allow the backend to start
          setTimeout(() => {
            // Execute the shell script to start the frontend
            fetch('../frontendStart.sh')
              .then(response => response.text())
              .then(scriptOutput => {
                console.log(scriptOutput);
  
                // Wait for a moment to allow the frontend to start (adjust this delay)
                setTimeout(() => {
                  // Redirect to the frontend URL
                  window.location.href = 'http://localhost:3000';
                }, 5000); // Adjust this delay as needed
              })
              .catch(error => {
                console.error(error);
              });
          }, 5000); // Adjust this delay as needed
        })
        .catch(error => {
          console.error(error);
        });
    });
  });
  
  */
 




  /*
const webpack = require('webpack');

  module.exports = {
    // ...
    plugins: [
      new webpack.DefinePlugin({
        'process.env.CLIENT_ID': JSON.stringify(process.env.CLIENT_ID),
        'process.env.SECRET': JSON.stringify(process.env.SECRET),
      }),
    ],
  };
  const CLIENT_ID = process.env.CLIENT_ID;
  const SECRET = process.env.SECRET;
  const SERVER_URL = 'http://localhost:8000';

 window.addEventListener('DOMContentLoaded', () => {
    // Make an AJAX request to fetch the balance data
    fetch("http://localhost:8000/api/balance")
        .then(response => response.json())
        .then(data => {

            //store it as var
            const apiBalance = data;
            // Update the 'balance-data' pre element with the balance data
            const balanceDataElement = document.getElementById('account-info');
            balanceDataElement.textContent = JSON.stringify(data); // Display JSON data as formatted text

            // display balance
            showbalance(apiBalance);
        })
        .catch(error => console.error('Error:', error));
});

async function showbalance(obj) {
    const availableBalance = obj.accounts[0].balances.available;
    const balanceValueElement = document.getElementById('balance-value');
    balanceValueElement.textContent =  availableBalance;
  }

  window.addEventListener('DOMContentLoaded', () => {
    // Make an AJAX request to fetch the balance data
    fetch("http://localhost:8000/api/transactions")
        .then(response => response.json())
        .then(data => {

            displayTransactions(data);
        })
        .catch(error => console.error('Error:', error));
});

function displayTransactions(transactionsData) {
    const transactionListElement = document.getElementById('transactions-value');
    transactionsData.latest_transactions.forEach(transaction => {
        const listItem = document.createElement('li');
        listItem.textContent = `Date: ${transaction.date}, Amount: ${transaction.amount}`;
        transactionListElement.appendChild(listItem);
    });
}
*/