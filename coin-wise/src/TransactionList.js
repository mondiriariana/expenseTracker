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
        {/* Fake data. Why does UL not appear? is it css issue? */}
        <p>1. Groceries : $50</p>
        <p>2. Car Payment : $200</p>
        <p>3. Rent : $600</p>
    </div>
  );
};

export default TransactionList;