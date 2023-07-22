// Create web server

// Import packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Import routes
const comments = require('./routes/api/comments');

// Create express app
const app = express();

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/comments', { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Use routes
app.use('/api/comments', comments);

// Listen on port 5000
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));