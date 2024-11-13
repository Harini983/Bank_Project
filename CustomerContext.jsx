// src/Components/CustomerContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]); // Initialize customers as an empty array
  const [message, setMessage] = useState("");

  // Fetch customers and set state
  const fetchCustomers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/customers");
      setCustomers(response.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  useEffect(() => {
    fetchCustomers(); // Fetch customers when provider mounts
  }, []);

  const handleTransfer = async (fromAccount, toAccount, amount) => {
    // Implement your transfer logic here
    // After transfer, you might want to fetch customers again or update state
  };

  return (
    <CustomerContext.Provider value={{ customers, handleTransfer, message }}>
      {children}
    </CustomerContext.Provider>
  );
};
