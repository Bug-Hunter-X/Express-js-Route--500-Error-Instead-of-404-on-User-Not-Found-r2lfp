const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user details ...
  if (!user) {
    return res.status(404).send('User not found'); //correct response
  }
  res.send(user); //original code
});