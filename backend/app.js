const express = require("express");
const cors = require("cors");
require('dotenv').config({ path: './config.env' });

const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Enable CORS for all routes

// Import routes
const recommendationRoutes = require('./routes/recommendations');
app.use('/api', recommendationRoutes);

// Error handling for 404 routes
app.use((_, res) => {
    res.status(404).json({
        message: "Route not found",
    });
});

module.exports = app;
