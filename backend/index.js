require('dotenv').config({ path: '../.env' });
const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const authRoutes = require('./routes/authRoutes');

const app = express();
// Middleware to parse incoming requests with JSON payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);

const port = process.env.PORT || 5000;
console.log("Node.js version:", process.version);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
