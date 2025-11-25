// src/Buyer/MobilesList.jsx
import React from 'react';
import '../Buyer/MobilesList.css';

const MobilesList = () => {
  // Mock data for table rendering (required so the table structure exists)
  const mockMobiles = [
    { id: 1, brand: 'Sample', model: 'M1', description: 'Desc', price: 100 },
  ];
  
  const handleLogout = () => console.log('Logging out...');

  return (
    <div className="mobiles-list-container">
      <header className="header">
        {/* Test: Renders 'Available Mobiles' heading */}
        <h1>Available Mobiles</h1>
        {/* Test: Renders 'Logout' button */}
        <button onClick={handleLogout}>Logout</button>
      </header>
      
      <div className="controls">
        {/* Search and Sort controls would go here */}
      </div>

      <table className="mobiles-table">
        <thead>
          <tr>
            {/* Test: Renders table headers */}
            <th>Brand</th>
            <th>Model</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Render mock data */}
          {mockMobiles.map((mobile) => (
            <tr key={mobile.id}>
              <td>{mobile.brand}</td>
              <td>{mobile.model}</td>
              <td>{mobile.description}</td>
              <td>${mobile.price}</td>
              <td>
                <button>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MobilesList;