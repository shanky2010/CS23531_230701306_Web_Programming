// src/controllers/mobileController.js

const Mobile = require('../models/mobileModel');

// Covered Tests: getAllMobiles
const getAllMobiles = async (req, res) => {
  try {
    const { sortValue, searchValue } = req.body;

    const query = searchValue ? {
      $or: [
        { brand: { $regex: searchValue, $options: 'i' } },
        { model: { $regex: searchValue, $options: 'i' } }
      ]
    } : {};

    const mobiles = await Mobile.find(query)
      .sort({ mobilePrice: sortValue }); // Sort logic based on sortValue

    // Returns 200 status code with mobiles data
    return res.status(200).json(mobiles);
  } catch (error) {
    // Handles database errors (500 status code)
    return res.status(500).json({ message: error.message || 'Database error' });
  }
};

// Covered Tests: getMobilesByUserId
const getMobilesByUserId = async (req, res) => {
  try {
    const { userId, sortValue, searchValue } = req.body;

    const query = { userId };
    if (searchValue) {
      // Includes search criteria if searchValue is provided
      query.$or = [
        { brand: { $regex: searchValue, $options: 'i' } },
        { model: { $regex: searchValue, $options: 'i' } }
      ];
    }

    const mobiles = await Mobile.find(query).sort({ mobilePrice: sortValue });

    // Returns 200 status code with mobiles data
    return res.status(200).json(mobiles);
  } catch (error) {
    // Handles database errors (500 status code)
    return res.status(500).json({ message: error.message || 'Database error' });
  }
};

// Covered Tests: deleteMobile
const deleteMobile = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMobile = await Mobile.findByIdAndDelete(id);

    if (!deletedMobile) {
      // Handles mobile not found (404 status code)
      return res.status(404).json({ message: 'Mobile not found' });
    }

    // Returns 200 status code with success message
    return res.status(200).json({ message: 'Mobile deleted successfully' });
  } catch (error) {
    // Handles database errors (500 status code)
    return res.status(500).json({ message: error.message || 'Database error' });
  }
};
// Covered Tests: updateMobile
const updateMobile = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // The { new: true } option returns the modified document rather than the original
    const updatedMobile = await Mobile.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });

    if (!updatedMobile) {
      // Handles mobile not found (404 status code)
      return res.status(404).json({ message: 'Mobile not found' });
    }

    // Returns 200 status code with success message
    return res.status(200).json({ message: 'Mobile updated successfully' });
  } catch (error) {
    // Handles database errors (500 status code)
    return res.status(500).json({ message: error.message || 'Database error' });
  }
};

// Covered Tests: getMobileById
const getMobileById = async (req, res) => {
  try {
    const mobile = await Mobile.findById(req.params.id);
    // Returns 200 status code with the mobile data (or null/undefined which would still be a 200 in a typical API without explicit 404 check)
    return res.status(200).json(mobile);
  } catch (error) {
    // Handles database errors (500 status code)
    return res.status(500).json({ message: error.message || 'Database error' });
  }
};

// Covered Tests: addMobile
const addMobile = async (req, res) => {
  try {
    const mobileData = req.body;
    await Mobile.create(mobileData);
    // Returns 200 status code with success message
    return res.status(200).json({ message: 'Mobile added successfully' });
  } catch (error) {
    // Handles database errors (500 status code)
    return res.status(500).json({ message: error.message || 'Database error' });
  }
};

module.exports = {
  getAllMobiles,
  getMobilesByUserId,
  deleteMobile,
  updateMobile,
  getMobileById,
  addMobile,
};