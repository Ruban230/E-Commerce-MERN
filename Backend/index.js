const MongoConnect = require('./db');
const express = require('express');
require('dotenv').config(); // Load .env variables


// Connect to MongoDB
MongoConnect();

const app = express();
const port = 5000;

// Middleware
app.use(express.json()); // For parsing JSON

// Routes
app.use('/api/product', require('./Routes/Product'));
app.use('/api/user', require('./Routes/User'));

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
