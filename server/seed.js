const mongoose = require('mongoose');
const Configuration = require('./models/Configuration');

// MongoDB Connection
const MONGODB_URI = 'mongodb+srv://development:X3TcC8tKnI5JINuR@betalive.9sakb.gcp.mongodb.net/database';

// Sample configuration data
const sampleConfigurations = [
  {
    configurationId: 'config1',
    configuration: [
      ['sym1', 'sym2', 'sym3'],
      ['sym4', 'sym6', 'sym8'],
      ['sym5', 'sym1', 'sym0']
    ],
    remark: 'Initial configuration'
  },
  {
    configurationId: 'config2',
    configuration: [
      ['symA', 'symB', 'symC'],
      ['symD', 'symE', 'symF'],
      ['symG', 'symH', 'symI']
    ],
    remark: 'Alternative configuration'
  }
];

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(async () => {
    console.log('MongoDB connected successfully');
    
    try {
      // Clear existing configurations
      await Configuration.deleteMany({});
      console.log('Cleared existing configurations');
      
      // Insert sample configurations one by one to handle errors better
      let insertedCount = 0;
      for (const config of sampleConfigurations) {
        try {
          await Configuration.create(config);
          insertedCount++;
        } catch (err) {
          console.error(`Error inserting configuration ${config.configurationId}:`, err.message);
        }
      }
      
      console.log(`${insertedCount} configurations inserted successfully`);
      
      console.log('Sample data:');
      console.log(JSON.stringify(sampleConfigurations, null, 2));
    } catch (error) {
      console.error('Error seeding database:', error);
    } finally {
      // Close the connection
      mongoose.connection.close();
      console.log('MongoDB connection closed');
    }
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });