import React from 'react'
const OverseasContact = () => {
    return (
      <div className="overseas-contact">
        <h2>Overseas Contact Details</h2>
        <div className="overseas-details">
          <h3>International Hotline</h3>
          <p>+1 234 567 8901</p>
          <h3>Email Support</h3>
          <p>support@bank.com</p>
          <h3>Live Chat</h3>
          <div className="chatbot">
            <iframe
              title="Chatbot"
              src="https://deepai.org/chat"  // Replace with your actual chatbot URL
              width="100%"
              height="500"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    );
  };
export default OverseasContact;