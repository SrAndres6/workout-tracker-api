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
  },
  {
        id: "1759285254164",
        name: "JUAN",
        email: "ANDRES@example.com",
        role: "user",
        createdAt: "2025-10-01T02:20:54.164Z"
    }
];

//

// GET /users/:id
router.get('/:id', (req, res) => {
  const { id } = req.params;   // 1
  const user = users.find(u => u.id === id);   // 2

  if (!user) {   // 3
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  res.status(200).json(user);   // 4
});

// POST /users
router.post('/', (req, res) => {
  const { name, email, role } = req.body;   // 1

  if (!name || !email) {   // 2
    return res.status(400).json({ error: 'Name y email son requeridos' });
  }

  const newUser = {   // 3
    id: `${Date.now()}`,  // identificador temporal
    name,
    email,
    role: role || 'user',  // valor por defecto si no envían rol
    createdAt: new Date().toISOString()
  };

  users.push(newUser);   // 4

  res.status(201).json(newUser);   // 5
});

// PUT /users/:id
router.put('/:id', (req, res) => {
  const { id } = req.params;              // 1
  const { name, email, role } = req.body; // 2

  const index = users.findIndex(u => u.id === id); // 3
  if (index === -1) {                     // 4
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  if (!name || !email) {                  // 5
    return res.status(400).json({ error: 'Name y email son requeridos' });
  }

  users[index] = {                        // 6
    ...users[index], // conserva los datos previos
    name,
    email,
    role
  };

  res.status(200).json(users[index]);     // 7
});

// DELETE /users/:id
router.delete('/:id', (req, res) => {
  const { id } = req.params;                            // 1
  const index = users.findIndex(u => u.id === id);      // 2

  if (index === -1) {                                   // 3
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  const deletedUser = users.splice(index, 1);           // 4
  res.status(200).json({ deleted: deletedUser[0].id }); // 5
});

// GET /users?ROLE
// GET /users?id=1&name=Carlos&role=user
router.get('/', (req, res) => {
  const { id, name, role } = req.query; // se iplementa parametros para que se busque por id, name o rle
  let result = users;                   // 2

  // Filtrar por ID (exacto)
  if (id) {                             // 3
    result = result.filter(u => u.id === id);
  }

  // Filtrar por nombre (parcial, insensible a mayúsculas)
  if (name) {                           // 4
    result = result.filter(u =>
      u.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  // Filtrar por rol (exacto, insensible a mayúsculas)
  if (role) {                           // 5
    result = result.filter(u =>
      u.role.toLowerCase() === role.toLowerCase()
    );
  }

  res.status(200).json(result);         // 6
});


module.exports = router;