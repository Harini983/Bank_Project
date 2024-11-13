import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import GetStartedPage from "./Components/LoginRegister/GetStartedPage";
import Login from "./Components/LoginRegister/Login";
import Register from "./Components/LoginRegister/Register";
import Dashboard from "./Components/LoginRegister/Dashboard";
import Contact from "./Components/LoginRegister/Contact";
import Profile from "./Components/LoginRegister/Profile";
import CustomerTable from "./Components/LoginRegister/CustomerTable";
import TransferMoney from "./Components/LoginRegister/Transfermoney"; // Ensure this matches the filename
import TransactionHistory from "./Components/LoginRegister/TransactionHistory"; // Add this import

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]); // Add a state for transactions

  // Fetch customers from json-server
  const fetchCustomers = async () => {
    const response = await axios.get('http://localhost:3000/customers');
    setCustomers(response.data);
  };

  useEffect(() => {
    fetchCustomers(); // Fetch customers when the component mounts
  }, []);

  const addTransaction = (from, to, amount) => {
    const newTransaction = {
      id: transactions.length + 1, // Ensure unique ID
      from,
      to,
      amount,
      date: new Date().toLocaleString(), // Current date and time
    };
    setTransactions([...transactions, newTransaction]); // Update transactions
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStartedPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customerTable" element={<CustomerTable customers={customers} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/transfer-money" 
          element={<TransferMoney customers={customers} fetchCustomers={fetchCustomers} addTransaction={addTransaction} />} 
        />
        <Route 
          path="/transaction-history" 
          element={<TransactionHistory transactions={transactions} />} // Pass transactions to TransactionHistory
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
