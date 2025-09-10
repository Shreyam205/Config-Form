# Configuration App (MERN Stack)

A full-stack application for managing configurations built with MongoDB, Express.js, React, and Node.js.

## Features

### Backend
- GET endpoint to fetch a 2D array based on configurationId
- PUT endpoint to update a configuration's remark

### Frontend
- Config Viewer page to display configuration data
- Remark Updater page to modify configuration remarks

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Frontend
- React.js
- React Router
- Axios
- Bootstrap

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB connection (provided)

## Project Structure

```
/
├── client/             # React frontend
└── server/             # Express backend
```

## Installation

1. Clone the repository

2. Install all dependencies (root, client, and server)
   ```
   npm run install-all
   ```

3. Seed the database with sample data
   ```
   cd server && node seed.js
   ```

4. Start both client and server concurrently
   ```
   npm start
   ```
   
   This will start:
   - Backend server on http://localhost:5000
   - Frontend client on http://localhost:3001

## API Endpoints

### GET /api/configurations/{id}

Fetches a 2D array based on configurationId.

**Example Response:**
```json
[
  ["sym1", "sym2", "sym3"],
  ["sym4", "sym6", "sym8"],
  ["sym5", "sym1", "sym0"]
]
```

### PUT /api/configurations/{id}

Updates a configuration's remark.

**Request Body:**
```json
{
  "remark": "I am done with task"
}
```

**Example Response:**
```json
{
  "message": "success"
}
```

## Sample Data

The seed script creates two sample configurations with the following IDs:
- `config1`
- `config2`

You can use these IDs to test the API endpoints.

## MongoDB Connection

The application uses the following MongoDB connection string:
```
mongodb+srv://development:X3TcC8tKnI5JINuR@betalive.9sakb.gcp.mongodb.net/database
```