// src/models/userModel.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, 
  },
  role: {
    type: String,
    required: true,
    enum: ['user', 'seller'], 
  },
  password: {
    type: String,
    required: true,
    minlength: 8, // Passes 'shorter than the minimum length' test
    maxlength: 255, // Passes 'longer than the maximum length' test
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;