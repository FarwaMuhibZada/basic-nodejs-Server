const express = require('express');

const router = express.Router();

// Sample dataset (users)
let users = [
  { id: 1, name: 'farwa' },
  { id: 2, name: 'fariha' },
];

// GET all users
router.get('/', (req, res) => {
  res.json(users);
});

// POST new user
router.post('/', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user
router.put('/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10); // Added radix parameter
  const updatedUser = req.body;
  users = users.map(
    (user) => (user.id === userId ? updatedUser : user),
  ); // Line break added
  res.json(updatedUser);
});

// DELETE user
router.delete('/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10); // Added radix parameter
  users = users.filter(
    (user) => user.id !== userId,
  ); // Line break added
  res.json({ message: 'User deleted' });
});

module.exports = router;
