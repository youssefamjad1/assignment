const db = require('../config/db');

// Function to create a new user
const createUser = (name, email, hashedPassword, callback) => {
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(query, [name, email, hashedPassword], (err, result) => {
      if (err) {
        console.log('Error creating user:', err);
        return callback(err, null);
      }
      console.log('User created successfully:', result);
      callback(null, result);
    });
  };
  

// Function to find a user by email
const findUserByEmail = (email, callback) => {
  // Make the email lowercase for case-insensitive matching
  const query = 'SELECT * FROM users WHERE LOWER(email) = LOWER(?)';
  db.query(query, [email], (err, results) => {
    if (err) {
      console.log('Error finding user by email:', err.message); // Log query error
      return callback(err, null);
    }

    if (results.length > 0) {
      console.log('User found:', results[0]); // Log the user object found
      callback(null, results[0]); // Send user data to callback
    } else {
      console.log('User not found for email:', email); // Log when no user is found
      callback(null, null); // No user found
    }
  });
};

module.exports = {
  createUser,
  findUserByEmail,
};
