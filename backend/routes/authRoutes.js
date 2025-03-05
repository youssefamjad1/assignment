const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// POST request to register a user
router.post('/register', register);

// POST request to login a user
router.post('/login', login);

module.exports = router;
