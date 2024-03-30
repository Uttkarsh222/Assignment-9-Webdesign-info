const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const path = require('path'); // Add this line to import the path module
require('dotenv').config();
const app = express();

app.use(cors({
  origin: 'http://localhost:3001' // This specifies which domains are allowed to access the server.
}));

// Middleware to parse JSON
app.use(express.json());

const mongoURI = process.env.DATABASE_URL || 'mongodb://localhost:27017/Assignment';
const port = process.env.PORT || 3000;

// Connect to MongoDB without the deprecated options
mongoose.connect(mongoURI);

const db = mongoose.connection;
db.on('error', (error) => console.error('Connection error:', error));
db.once('open', () => console.log('Connected to the database'));

// User routes
app.use('/user', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

// A simple route to check if the server is running
app.get('/', (req, res) => {
  res.send('Hello World! The server is up and running.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
