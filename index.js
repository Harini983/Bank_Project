import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/LoginRegister/Login';
import Appi from './App';
import Register from './Components/LoginRegister/Register';
import GetStartedPage from './Components/LoginRegister/GetStartedPage';

import Dashboard from './Components/LoginRegister/Dashboard';
import CustomerTable from './Components/LoginRegister/CustomerTable';
import TransferMoney from './Components/LoginRegister/Transfermoney';
import TransactionHistory from './Components/LoginRegister/TransactionHistory';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> {/* Make sure BrowserRouter is used here */}
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();

