// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Use the body-parser module to parse the body of POST requests
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create an array to store comments
const comments = [];

// Create a new comment
app.post('/comments', (req, res) => {
  // Get the comment from the request body
  const comment = req.body.comment;

  // Add the comment to the array
  comments.push(comment);

  // Send a response
  res.send('Comment added');
});

// Get all comments
app.get('/comments', (req, res) => {
  // Send the comments array as a response
  res.send(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});