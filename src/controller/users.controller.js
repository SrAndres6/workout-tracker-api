// src/controllers/users.controller.js

// Simulación de datos en memoria con datos de usuarios
let users = [
  {
    id: "101",
    name: "Andres Garcia",
    email: "andres@example.com",
    role: "user",
    createdAt: new Date().toISOString(),
  },
  {
    id: "102",
    name: "Maria Lopez",
    email: "maria@example.com",
    role: "admin",
    createdAt: new Date().toISOString(),
  },
];

// Obtener usuarios (con filtro opcional por id o name)
exports.getUsers = (req, res) => {
  console.log('=== GET USERS ===');
  console.log('Query params:', req.query);
  console.log('URL:', req.url);

  const { id, name } = req.query;
  let result = users;

  console.log('id parameter:', id);
  console.log('name parameter:', name);

  if (id) {
    console.log('Filtering by id:', id); // ← Usar el string directamente
    result = result.filter(u => u.id === id); // ← Comparar strings
  }

  if (name) {
    const nameLower = name.toLowerCase();
    console.log('Filtering by name:', nameLower);
    result = result.filter(u => u.name.toLowerCase().includes(nameLower));
  }

  console.log('Result:', result);
  res.json(result);
};

// Crear usuario
exports.createUser = (req, res) => {
  const newUser = req.body;
  newUser.id = users.length ? users[users.length - 1].id + 1 : 1;
  users.push(newUser);
  res.status(201).json({ message: "Usuario creado", user: newUser });
};

// Actualizar usuario por id
exports.updateUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === userId);

  if (index === -1) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  const updatedUser = { ...users[index], ...req.body, id: userId };
  users[index] = updatedUser;

  res.json({ message: "Usuario actualizado", user: updatedUser });
};

// Borrar usuario por id
exports.deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === userId);

  if (index === -1) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  users.splice(index, 1);
  res.json({ message: `Usuario con id ${userId} eliminado `});
};