const mysql = require('mysql2');
require('dotenv').config({ path: '../../.env' });  /

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error('DATABASE_URL not set in .env');
  process.exit(1);  // Exit if no DATABASE_URL
}

// Parse the DATABASE_URL into components
const url = require('url');
const dbUrl = url.parse(DATABASE_URL);

console.log("Database URL:", DATABASE_URL);
console.log("DB Host:", dbUrl.hostname);
console.log("DB Port:", dbUrl.port);
console.log("DB User:", dbUrl.auth ? dbUrl.auth.split(':')[0] : 'Not set');
console.log("DB Password:", dbUrl.auth ? '****' : 'Not set');
console.log("DB Name:", dbUrl.pathname ? dbUrl.pathname.substring(1) : 'Not set');

// Create MySQL connection using parsed values
const db = mysql.createConnection({
  host: dbUrl.hostname,
  user: dbUrl.auth ? dbUrl.auth.split(':')[0] : '',  // Extract username
  password: dbUrl.auth ? dbUrl.auth.split(':')[1] : '',  // Extract password
  database: dbUrl.pathname ? dbUrl.pathname.substring(1) : '',  // Extract database name
  port: dbUrl.port || 3306  // Default to 3306 if no port is provided
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    process.exit(1);  // Exit if connection fails
  }
  console.log('Connected to the database');
});

module.exports = db;
