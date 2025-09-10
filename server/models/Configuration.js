const mongoose = require('mongoose');

// Drop any existing indexes that might be causing issues
mongoose.set('strictQuery', false);

const ConfigurationSchema = new mongoose.Schema({
  configurationId: {
    type: String,
    required: true,
    unique: true
  },
  configuration: {
    type: [[String]],
    required: true
  },
  remark: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Configuration', ConfigurationSchema);