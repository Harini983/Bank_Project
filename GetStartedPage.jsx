// src/components/GetStartedPage.js
import React from 'react';
import './GetStartedPage.css';
import { useNavigate } from 'react-router-dom';

const GetStartedPage = () => {
  const navigate=useNavigate()
  return (
    <div className="background-container">
      <div className="background-overlay"></div>
      <div className="content-container">
        <div className="welcome-container">
          <h1>Welcome to FORTUNA-BANK</h1>
          <p>Manage your finances effortlessly. Get started with personal, corporate, and current banking services.</p>
          <button className="get-started-btn" onClick={()=>navigate('/login')}>Get Started</button> {/* Moved button inside the container */}
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;
