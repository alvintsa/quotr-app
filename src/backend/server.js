const { asyncHandler } = require("./errors/asyncHandler");
const { errorHandler } = require("./errors/errorHandler");
const { registerUser } = require("./users/userCtrl.js");


const express = require('express');
const app = express();
const router = express.Router;

app.use(express.json());

// Sample data stored in memory (you might use a database in a real application)
let data = [
  { id: 1, name: 'Example 1' },
  { id: 2, name: 'Example 2' }
];

// Endpoint to get all data
router.use((req, res, next) => {
    console.log("Request received:", req.method, req.url);
    next();
  });
  
  router.get('/api/data', (req, res) => {
      console.log("reached");
      res.json(data);
  });
  
  router.get('/api/register', asyncHandler(registerUser));
  
  router.get('/api/login', (req, res) => {
      console.log("reached");
      res.json(data);
  });
  
  router.get('/api/profile', (req, res) => {
      console.log("reached");
      res.json(data);
  });
  
  router.get('/api/leaderboard', (req, res) => {
      console.log("reached");
      res.json(data);
  });
  
  router.get('/api/submit', (req, res) => {
      console.log("reached");
      res.json(data);
  });
  
  router.get('/api/vote', (req, res) => {
      console.log("reached");
      res.json(data);
  });
  
  router.get('/api/collections', (req, res) => { // admin messes with db collections
      console.log("reached");
      res.json(data);
  });
  
  // Endpoint to add data
  router.post('/api/data', (req, res) => {
      const newItem = req.body; // Assumes the request sends an object in the body
      data.push(newItem);
      res.json({ message: 'Data added', newItem });
  });
  
  const port = 8080;
  router.listen(port, () => { // Changed from app.listen to router.listen
      console.log(`Server running on port ${port}`);
  });
  
  export default router;