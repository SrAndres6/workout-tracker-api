const express = require('express');
const router = express.Router();

// Estado en memoria (simulación)
let users = [
  {
    id: "101",
    name: "andres garcia",
    email: "andres@example.com",
    role: "user",
    createdAt: "2025-09-12T12:00:00Z"
  }
];


// GET /api/v1/users
router.get('/', (req, res) => {
    res.status(200).json(users);
});

// GET /users/:id
router.get('/:id', (req, res) => {
  const { id } = req.params;   // 1
  const user = users.find(u => u.id === id);   // 2

  if (!user) {   // 3
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  res.status(200).json(user);   // 4
});

module.exports = router;