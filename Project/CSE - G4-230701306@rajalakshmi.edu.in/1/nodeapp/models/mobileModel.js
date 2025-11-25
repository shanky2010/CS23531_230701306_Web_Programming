// src/models/mobileModel.js

const mongoose = require('mongoose');

const mobileSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true, // MUST be present
  },
  model: {
    type: String,
    required: true, // MUST be present
  },
  description: {
    type: String,
    required: true, // MUST be present
  },
  mobilePrice: {
    type: Number,
    required: true, // MUST be present and type is Number
    min: 0, 
  },
  availableQuantity: {
    type: Number,
    required: true, // MUST be present and type is Number
    min: 0, 
  },
  userId: {
    type: String, // Temporarily change to String
    required: true, 
  },
// ...
});

const Mobile = mongoose.model('Mobile', mobileSchema);

module.exports = Mobile;