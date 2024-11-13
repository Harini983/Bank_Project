// TransactionHistory.jsx
import React from 'react';

const TransactionHistory = ({ transactions = [] }) => {
  // Make sure the transactions array exists and has data
  if (transactions.length === 0) {
    return <p>No transactions available.</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h3>Transaction History</h3>
      <table border="1" cellPadding="10" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>From</th>
            <th>To</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.from}</td>
              <td>{transaction.to}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
