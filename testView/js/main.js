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
  
 /*
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