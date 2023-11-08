// TransactionList.js
import React from 'react';

const TransactionList = ({ transactionsData }) => {
  return (
    <div className="transaction-list">
      <h2>Transaction List</h2>
      <ul className="ulNone">
        {transactionsData.map((transaction) => (
          <li key={transaction.id}>
            <span>{transaction.id}.{transaction.description} ${transaction.amount}</span>
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;