import React, { useState } from 'react';
import axios from 'axios';

const TransferMoney = ({ customers, fetchCustomers, addTransaction }) => {
  const [transferDetails, setTransferDetails] = useState({
    fromAccount: '',
    toAccount: '',
    amount: '',
  });
  const [message, setMessage] = useState('');

  const handleTransfer = async () => {
    const { fromAccount, toAccount, amount } = transferDetails;

    const fromCustomer = customers.find(
      (customer) => customer.name.toLowerCase() === fromAccount.toLowerCase()
    );
    const toCustomer = customers.find(
      (customer) => customer.name.toLowerCase() === toAccount.toLowerCase()
    );

    if (!fromCustomer || !toCustomer) {
      setMessage('One or both account names are incorrect. Please check and try again.');
      return;
    }

    if (fromCustomer.balance >= parseFloat(amount)) {
      fromCustomer.balance -= parseFloat(amount);
      toCustomer.balance += parseFloat(amount);
      
      // Update the accounts in the JSON server
      await axios.put(`http://localhost:3000/customers/${fromCustomer.id}`, fromCustomer);
      await axios.put(`http://localhost:3000/customers/${toCustomer.id}`, toCustomer);
      
      setMessage(`Successfully transferred $${amount} from ${fromCustomer.name} to ${toCustomer.name}.`);
      
      // Add transaction to history
      addTransaction(fromCustomer.name, toCustomer.name, amount);
      
      fetchCustomers(); // Refresh the customer list
    } else {
      setMessage('Insufficient funds for the transfer.');
    }

    setTransferDetails({ fromAccount: '', toAccount: '', amount: '' }); // Clear transfer fields
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>Transfer Money</h3>
      <input
        type="text"
        name="fromAccount"
        placeholder="From Account Name"
        value={transferDetails.fromAccount}
        onChange={(e) => setTransferDetails({ ...transferDetails, fromAccount: e.target.value })}
        style={{ marginRight: '10px' }}
      />
      <input
        type="text"
        name="toAccount"
        placeholder="To Account Name"
        value={transferDetails.toAccount}
        onChange={(e) => setTransferDetails({ ...transferDetails, toAccount: e.target.value })}
        style={{ marginRight: '10px' }}
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={transferDetails.amount}
        onChange={(e) => setTransferDetails({ ...transferDetails, amount: e.target.value })}
        style={{ marginRight: '10px' }}
      />
      <button onClick={handleTransfer}>Transfer</button>
      {message && <p style={{ marginTop: '20px', fontWeight: 'bold' }}>{message}</p>}
    </div>
  );
};

export default TransferMoney;
