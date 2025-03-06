const mysql = require('mysql2');
require('dotenv').config({ path: '../.env' });

console.log("DATABASE_URL:", process.env.DATABASE_URL ? "Loaded" : "Not set");

// Create MySQL connection using DATABASE_URL
const db = mysql.createConnection(process.env.DATABASE_URL);

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("✅ Connected to the database");
});

module.exports = db;
