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
	const userId = parseInt(req.params.id);
	const updatedUser = req.body;
	users = users.map(user => (user.id === userId ? updatedUser : user));
	res.json(updatedUser);
});

// DELETE user
router.delete('/:id', (req, res) => {
	const userId = parseInt(req.params.id);
	users = users.filter(user => user.id !== userId);
	res.json({ message: 'User deleted' });
});

module.exports = router;
