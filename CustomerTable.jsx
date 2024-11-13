
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for routing
import './customerTable.css';
import TransferMoney from './Transfermoney'; // Import TransferMoney component

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState({
    name: '',
    email: '',
    balance: '',
  });

  // Fetch customers from json-server
  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    const response = await axios.get('http://localhost:3000/customers');
    setCustomers(response.data);
  };

  // Add a new customer
  const addCustomer = async () => {
    const { name, email, balance } = newCustomer;
    if (name && email && balance) {
      const response = await axios.post('http://localhost:3000/customers', {
        name,
        email,
        balance: parseFloat(balance),
      });
      setCustomers([...customers, response.data]);
      setNewCustomer({ name: '', email: '', balance: '' }); // Clear form after adding
    } else {
      alert('Please fill out all fields');
    }
  };

  // Delete a customer
  const deleteCustomer = async (id) => {
    await axios.delete(`http://localhost:3000/customers/${id}`);
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

  // Update form state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Customer Management</h2>
      
      <Link to="/transfer-money" style={{ marginBottom: '20px', display: 'inline-block' }}>
        <button>Go to Transfer Money</button>
      </Link>

      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Customer Balance</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={customer.id}>
              <td>{index + 1}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.balance}</td>
              <td>
                <button onClick={() => deleteCustomer(customer.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: '20px' }}>
        <h3>Add New Customer</h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newCustomer.name}
          onChange={handleInputChange}
          style={{ marginRight: '10px' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newCustomer.email}
          onChange={handleInputChange}
          style={{ marginRight: '10px' }}
        />
        <input
          type="number"
          name="balance"
          placeholder="Balance"
          value={newCustomer.balance}
          onChange={handleInputChange}
          style={{ marginRight: '10px' }}
        />
        <button onClick={addCustomer}>Add Customer</button>
      </div>
    </div>
  );
};

export default CustomerTable;
