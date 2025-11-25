// src/Components/ErrorPage.jsx
import React from 'react';
import '../Components/ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className="error-page-container">
      {/* Test: Renders 'Something Went Wrong' heading */}
      <h1>Something Went Wrong</h1>
      {/* Test: Renders error content */}
      <p>We're sorry, but an error occurred. Please try again later.</p>
    </div>
  );
};

export default ErrorPage;