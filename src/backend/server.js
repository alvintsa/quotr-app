const { asyncHandler } = require("./errors/asyncHandler");
const { errorHandler } = require("./errors/errorHandler");


const express = require('express');
const app = express();
app.use(express.json());

// Sample data stored in memory (you might use a database in a real application)
let data = [
  { id: 1, name: 'Example 1' },
  { id: 2, name: 'Example 2' }
];

// Endpoint to get all data
app.get('/api/data', (req, res) => {
    console.log("reached");
    res.json(data);
  
});

app.get('/api/register', (req, res) => {
    console.log("reached");
    res.json(data);
  
});

app.get('/api/login', (req, res) => {
    console.log("reached");
    res.json(data);
  
});

app.get('/api/profile', (req, res) => {
    console.log("reached");
    res.json(data);
  
});

app.get('/api/leaderboard', (req, res) => {
    console.log("reached");
    res.json(data);
  
});

app.get('/api/submit', (req, res) => {
    console.log("reached");
    res.json(data);
  
});

app.get('/api/vote', (req, res) => {
    console.log("reached");
    res.json(data);
  
});

app.get('/api/collections', (req, res) => { // admin mess with db collections
    console.log("reached");
    res.json(data);
  
});


// Endpoint to add data
app.post('/api/data', (req, res) => {

    const newItem = req.body; // Assumes the request sends an object in the body
    data.push(newItem);
    res.json({ message: 'Data added', newItem });
});

const port = 9000;
app.listen(port, () => {
    
    console.log(`Server running on port ${port}`);
});
