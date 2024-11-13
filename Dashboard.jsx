import React from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="App">
    
      <header>
        <nav className="navbar">
          <div className="navbar-logo">
            <h2>FORTUNA-BANK</h2>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#accounts" onClick={()=>navigate('/customerTable')}>All Accounts</a></li>
            <li><a href="#contact" onClick={()=>navigate('/contact')}>Contact</a></li>
            <li><a href="#profile" onClick={()=>navigate('/profile')}>Profile</a></li>
           
<li className="dropdown">
  <a href="#internet-banking" className="dropbtn">Internet Banking</a>
  <div className="dropdown-content">
   
    <a href="#transfer-money" onClick={()=>navigate('/transfer-money')}>Transfer Money</a>
    <a href="#transaction-history" onClick={()=>navigate('/transaction-history')}>Transaction History</a>
  </div>
</li>

            <li>
              <div className="login-container">
                <button className="login-button" onClick={() => navigate('/')}>Logout</button>
              </div>
            </li>
          </ul>
        </nav>
      </header>

      
      <div className="dashboard">
        <div className="main-content">
          <h1>Welcome to ABC Bank</h1>
          <p>ABC Bank is committed to providing world-class banking services. Our vision is to offer the most secure and innovative financial solutions to help you achieve your goals.</p>

          
          <section id="home" className="section">
            <div className="section-content">
            <img src="" alt="Services" className="section-image" />
              <div className="text-content">
                <h2>Home Section</h2>
                <p> .

</p>
              </div>
            </div>
          </section>

         

          <section id="services" className="section">
            <div className="section-content">
              <img src="https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-computer-bank-card-blue-background-global-purchase-image_19034.jpg" className="section-image" />
              <div className="text-content">
                <p>Welcome to FortunaBank, where innovative banking solutions streamline operations and enhance customer experience for a successful financial future. Our commitment to security and transparency ensures that your financial transactions are safe and efficient. Join us in redefining banking with personalized services and cutting-edge technology designed to meet your unique financial needs.

.

.

</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      
      <div className="features-section">
        <h2>Our Features</h2>
        <div className="features-container">
          <div className="feature">
            <h3>Secure Online Banking</h3>
            <p>Experience secure and fast online banking services.</p>
          </div>
          <div className="feature">
            <h3>24/7 Customer Support</h3>
            <p>Our customer support team is here to assist you anytime.</p>
          </div>
          <div className="feature">
            <h3>Mobile Banking</h3>
            <p>Access your account from anywhere with our mobile app.</p>
          </div>
        </div>
      </div>

     
      <footer>
        <div className="footer-section">
          <div className="footer-column">
            <h3>About Us</h3>
            <ul>
              <li><a href="#history">History</a></li>
              <li><a href="#mission">Mission</a></li>
              <li><a href="#team">Our Team</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Shareholder's Corner</h3>
            <ul>
              <li><a href="#reports">Annual Reports</a></li>
              <li><a href="#investors">Investor Information</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Customer Corner</h3>
            <ul>
              <li><a href="#faqs">FAQs</a></li>
              <li><a href="#support">Customer Support</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li><a href="#tools">Tools & Calculators</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 ABC Bank. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;
