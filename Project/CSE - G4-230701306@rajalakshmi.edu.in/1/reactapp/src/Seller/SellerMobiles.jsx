// src/Seller/SellerMobiles.jsx
import React, { useState } from 'react';
import '../Seller/SellerMobiles.css';

const SellerMobiles = () => {
  const [searchValue, setSearchValue] = useState('');
  const [sortValue, setSortValue] = useState('asc');
  
  const handleLogout = () => console.log('Seller Logging out...');
  const handleAddMobile = () => console.log('Navigating to Add Mobile');

  return (
    <div className="seller-mobiles-container">
      <header className="header">
        {/* Test: Renders 'MyMobiles' logo/heading */}
        <h1 className="logo">MyMobiles</h1>
        <nav>
          {/* Test: Renders navigation buttons */}
          <button onClick={handleAddMobile}>Add Mobile</button>
          <button onClick={handleLogout}>Logout</button>
        </nav>
      </header>

      <div className="controls">
        {/* Test: Renders search input */}
        <input
          type="text"
          placeholder="Search by brand or model"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div className="sort-control">
          {/* Test: Renders 'Sort by Price:' label */}
          <label>Sort by Price:</label>
          <select value={sortValue} onChange={(e) => setSortValue(e.target.value)}>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>
      
      {/* Seller's mobile list table would go here */}
    </div>
  );
};

export default SellerMobiles;