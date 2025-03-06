const mysql = require('mysql2');
require('dotenv').config({ path: '../.env' });

console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD ? "****" : "Not set");
console.log("DB_NAME:", process.env.DB_NAME);


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
