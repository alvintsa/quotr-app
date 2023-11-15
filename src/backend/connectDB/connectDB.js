// db.js
require('dotenv').config(); // Load environment variables from .env file

const { Pool } = require('pg');

const pool = new Pool({
user: process.env.DB_USER,
host: process.env.DB_HOST,
database: process.env.DB_DATABASE,
password: process.env.DB_PASSWORD,
port: process.env.DB_PORT,
});

async function connectDB() {
    try {
      console.log(typeof process.env.DB_PASSWORD); // Ensure it logs 'string'

      const client = await pool.connect();
      console.log('Connected to the database');

      const createTableQuery = `
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL
      )
    `;
    
    // Execute the create table query
    pool.query(createTableQuery, (error) => {
      if (error) {
        console.error('Error creating table:', error);
        return;
      }
    
      console.log('Table created successfully');
    
      // Release the pool when done with the query
      pool.end();
    });
  
      // Your database logic here...
  
      // Ensure the connection is released
      client.release();
    } catch (err) {
      console.error('Error connecting to the database:', err);
    }
  }

module.exports = { connectDB }; 