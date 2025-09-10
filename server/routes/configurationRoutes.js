const express = require('express');
const router = express.Router();
const Configuration = require('../models/Configuration');

/**
 * @route   GET /api/configurations/:id
 * @desc    Fetch a 2D array based on configurationId
 * @access  Public
 */
router.get('/configurations/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const configuration = await Configuration.findOne({ configurationId: id });
    
    if (!configuration) {
      return res.status(404).json({ message: 'Configuration not found' });
    }
    
    // Return just the 2D array
    res.json(configuration.configuration);
  } catch (error) {
    console.error('Error fetching configuration:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

/**
 * @route   PUT /api/configurations/:id
 * @desc    Update a configuration's remark
 * @access  Public
 */
router.put('/configurations/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { remark } = req.body;
    
    if (!remark) {
      return res.status(400).json({ message: 'Remark is required' });
    }
    
    const configuration = await Configuration.findOne({ configurationId: id });
    
    if (!configuration) {
      return res.status(404).json({ message: 'Configuration not found' });
    }
    
    // Update the remark and updatedAt fields
    configuration.remark = remark;
    configuration.updatedAt = Date.now();
    
    await configuration.save();
    
    res.json({ message: 'success' });
  } catch (error) {
    console.error('Error updating configuration:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;