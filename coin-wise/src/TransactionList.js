// TransactionList.js
import React from 'react';

const TransactionList = ({ transactionsData }) => {
  return (
    <div className="transaction-list">
      <h2>Transaction List</h2>
      <ul>
        {transactionsData.map((transaction) => (
          <li key={transaction.id}>
            <span>${transaction.description}</span>
            <span>${transaction.amount}</span>
          </li>
          
        ))}
      </ul>
      <p>
        i dont know why this isnt working
      </p>
    </div>
  );
};

export default TransactionList;