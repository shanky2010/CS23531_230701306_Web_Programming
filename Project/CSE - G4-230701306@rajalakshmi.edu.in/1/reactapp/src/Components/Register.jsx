// src/Components/Register.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Components/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', mobileNumber: '', password: '', confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.mobileNumber) newErrors.mobileNumber = 'Mobile Number is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';
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
<div className="register-container">
<div className="register-box">
{/* Test: Renders 'Create Your Account' heading */}
<h2>Create Your Account</h2>
<form onSubmit={handleSubmit}>
<div className="form-group">
<label htmlFor="firstName">First Name:</label>
<input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
{errors.firstName && <p className="error">{errors.firstName}</p>}
</div>
<div className="form-group">
<label htmlFor="lastName">Last Name:</label>
<input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
{errors.lastName && <p className="error">{errors.lastName}</p>}
</div>
<div className="form-group">
<label htmlFor="email">Email:</label>
<input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
{errors.email && <p className="error">{errors.email}</p>}
</div>
<div className="form-group">
<label htmlFor="mobileNumber">Mobile Number:</label>
<input type="text" id="mobileNumber" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
{errors.mobileNumber && <p className="error">{errors.mobileNumber}</p>}
</div>
<div className="form-group">
<label htmlFor="password">Password:</label>
<input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
{errors.password && <p className="error">{errors.password}</p>}
</div>
<div className="form-group">
<label htmlFor="confirmPassword">Confirm Password:</label>
<input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
{errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
</div>
{/* Test: Renders 'Register' button */}
<button type="submit">Register</button>
</form>
<p>
Already have an account? <Link to="/login">Login</Link>
</p>
</div>
</div>
);
};

export default Register;