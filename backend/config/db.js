const mysql = require('mysql2');
require('dotenv').config({ path: '../.env' });



// Create MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST|| 'mysql.railway.internal',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306 
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database');
});

module.exports = db;
