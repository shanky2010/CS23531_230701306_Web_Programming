// src/Components/Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Components/Login.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(); // Trigger validation on submit
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Test: Renders 'Login' heading */}
        <h2>Login</h2> 
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            {/* Test: Displays 'Email is required' */}
            {errors.email && <p className="error">{errors.email}</p>} 
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
            {/* Test: Displays 'Password is required' */}
            {errors.password && <p className="error">{errors.password}</p>} 
          </div>
          {/* Test: Renders 'Login' button */}
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;