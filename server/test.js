const axios = require('axios');

// Base URL for API
const API_URL = 'http://localhost:5000/api';

// Test configuration IDs
const configIds = ['config1', 'config2'];

// Test GET endpoint
async function testGetEndpoint() {
  console.log('\n--- Testing GET /api/configurations/:{id} ---');
  
  for (const id of configIds) {
    try {
      console.log(`\nTesting GET for configuration ID: ${id}`);
      const response = await axios.get(`${API_URL}/configurations/${id}`);
      
      console.log('Status:', response.status);
      console.log('Response data:');
      console.log(JSON.stringify(response.data, null, 2));
      
      // Verify response is a 2D array
      if (Array.isArray(response.data) && response.data.every(row => Array.isArray(row))) {
        console.log('✅ Success: Response is a valid 2D array');
      } else {
        console.log('❌ Error: Response is not a valid 2D array');
      }
    } catch (error) {
      console.error(`❌ Error testing GET for ID ${id}:`, error.message);
      if (error.response) {
        console.error('Response status:', error.response.status);
        console.error('Response data:', error.response.data);
      }
    }
  }
}

// Test PUT endpoint
async function testPutEndpoint() {
  console.log('\n--- Testing PUT /api/configurations/{id} ---');
  
  for (const id of configIds) {
    try {
      console.log(`\nTesting PUT for configuration ID: ${id}`);
      
      const payload = {
        remark: `I am done with task for ${id} at ${new Date().toISOString()}`
      };
      
      console.log('Request payload:', payload);
      
      const response = await axios.put(`${API_URL}/configurations/${id}`, payload);
      
      console.log('Status:', response.status);
      console.log('Response data:');
      console.log(JSON.stringify(response.data, null, 2));
      
      // Verify response has success message
      if (response.data.message === 'success') {
        console.log('✅ Success: Response contains success message');
      } else {
        console.log('❌ Error: Response does not contain expected success message');
      }
    } catch (error) {
      console.error(`❌ Error testing PUT for ID ${id}:`, error.message);
      if (error.response) {
        console.error('Response status:', error.response.status);
        console.error('Response data:', error.response.data);
      }
    }
  }
}

// Run tests
async function runTests() {
  console.log('Starting API tests...');
  
  try {
    // Test GET endpoint
    await testGetEndpoint();
    
    // Test PUT endpoint
    await testPutEndpoint();
    
    console.log('\n--- All tests completed ---');
  } catch (error) {
    console.error('Error running tests:', error.message);
  }
}

// Run the tests
runTests();