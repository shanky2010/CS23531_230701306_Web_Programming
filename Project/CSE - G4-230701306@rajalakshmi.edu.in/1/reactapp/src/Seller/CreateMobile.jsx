// src/Seller/CreateMobile.jsx
import React, { useState, useEffect } from 'react';
import '../Seller/CreateMobile.css';

const CreateMobile = () => {
  const [formData, setFormData] = useState({
    brand: '', model: '', price: '', description: '', availableQuantity: '',
  });
  const [errors, setErrors] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    // Logic to simulate checking localStorage for edit mode
    const editId = localStorage.getItem('editId');
    if (editId) {
      setIsEditMode(true);
    }
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.brand) newErrors.brand = 'Brand is required';
    if (!formData.model) newErrors.model = 'Model is required';
    if (!formData.price) newErrors.price = 'Price is required';
    if (!formData.availableQuantity) newErrors.availableQuantity = 'Quantity is required';
    if (!formData.description) newErrors.description = 'Description is required';
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
  
  const submitButtonText = isEditMode ? 'Update Mobile' : 'Add Mobile';

  return (
<div className="create-mobile-container">
{/* Test: Renders 'Add New Mobile' heading (or 'Edit Mobile' in edit mode) */}
<h2>{isEditMode ? 'Edit Mobile' : 'Add New Mobile'}</h2>
<form onSubmit={handleSubmit}>
<div className="form-group">
{/* Test: Renders Brand label */}
<label htmlFor="brand">Brand:</label>
<input type="text" id="brand" name="brand" value={formData.brand} onChange={handleChange} />
{errors.brand && <p className="error">{errors.brand}</p>}
</div>
<div className="form-group">
{/* Test: Renders Model label */}
<label htmlFor="model">Model:</label>
<input type="text" id="model" name="model" value={formData.model} onChange={handleChange} />
{errors.model && <p className="error">{errors.model}</p>}
</div>
<div className="form-group">
{/* Test: Renders Price label */}
<label htmlFor="price">Price:</label>
<input type="number" id="price" name="price" value={formData.price} onChange={handleChange} />
{errors.price && <p className="error">{errors.price}</p>}
</div>
<div className="form-group">
{/* Test: Renders Description label */}
<label htmlFor="description">Description:</label>
<textarea id="description" name="description" value={formData.description} onChange={handleChange} />
{errors.description && <p className="error">{errors.description}</p>}
</div>
<div className="form-group">
{/* Test: Renders Available Quantity label */}
<label htmlFor="availableQuantity">Available Quantity:</label>
<input type="number" id="availableQuantity" name="availableQuantity" value={formData.availableQuantity} onChange={handleChange} />
{errors.availableQuantity && <p className="error">{errors.availableQuantity}</p>}
</div>
{/* Test: Renders 'Add Mobile' button (or 'Update Mobile') */}
<button type="submit">{submitButtonText}</button>
</form>
</div>
);
};

export default CreateMobile;