// app.js
const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Initialize an empty array to store user data
let users = [];

// CREATE
app.post('/users', (req, res) => {
  const { name, age } = req.body;
  const id = users.length + 1; // Generate a new ID
  const user = { id, name, age };
  users.push(user); // Add the new user to the array
  res.status(201).send(`User  created successfully with id ${id}`);
});

// READ ALL
app.get('/users', (req, res) => {
  res.json(users); // Return the array of users
});

// READ BY ID
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  if (!user) {
    res.status(404).send(`User  with id ${id} not found`);
  } else {
    res.json(user);
  }
});

// UPDATE
app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  if (!user) {
    res.status(404).send(`User  with id ${id} not found`);
  } else {
    const { name, age } = req.body;
    user.name = name;
    user.age = age;
    res.send(`User  with id ${id} updated successfully`);
  }
});

// DELETE
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex((user) => user.id === id);
  if (index === -1) {
    res.status(404).send(`User  with id ${id} not found`);
  } else {
    users.splice(index, 1); // Remove the user from the array
    res.send(`User  with id ${id} deleted successfully`);
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});