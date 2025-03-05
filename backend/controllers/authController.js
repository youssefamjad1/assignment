const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

// User registration
exports.register = async (req, res) => {
    console.log('Received request body:', req.body); // Log the body to debug
  
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please provide all fields' });
    }
  
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
  
    userModel.findUserByEmail(email, (err, existingUser) => {
      if (err) return res.status(500).json({ message: 'Error checking user' });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Create new user
      userModel.createUser(name, email, hashedPassword, (err, result) => {
        if (err) {
          return res.status(500).json({ message: 'Error registering user' });
        }
        res.status(201).json({ message: 'User registered successfully' });
      });
    });
  };
  

// User login
exports.login = (req, res) => {
    const { email, password } = req.body;

    userModel.findUserByEmail(email, async (err, user) => {
        if (err) {
            console.log('Error authenticating user:', err); // Log any database errors
            return res.status(500).json({ message: 'Error authenticating user' });
        }

        if (!user || !user.name || !user.email) {
            console.log('Invalid user data for email:', email); // Log invalid user data
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        console.log('User found:', user); // Log the user object for debugging

        // Compare password with stored hash
        const match = await bcrypt.compare(password, user.password);
        console.log("Password match for user:", email, match); // Log match result

        if (!match) {
            console.log('Invalid password for user:', email); // Log when password doesn't match
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user.id, name: user.name }, process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log('Login successful for user:', email); // Log successful login

        res.status(200).json({ message: 'Login successful', token });
    });
};

  
