import React from 'react'
import './profile.css';
const Profile = () => {
    return (
      <div className="profile">
        <h2>Profile Details</h2>
        <div className="profile-details">
          <div className="profile-photo">
            <img src="data:image/jpeg;base64,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" alt="User Photo" />
          </div>
          <p><strong>Name:</strong>Swathi</p>
          <p><strong>Email:</strong>swathi@gmail.com</p>
          <p><strong>Date of Birth:</strong> January 1, 1990</p>
          <p><strong>Contact:</strong> 1800 123 4567</p>
          <p><strong>Transaction ID:</strong> TXN1234567890</p>
        </div>
      </div>
    );
  };
export default Profile;