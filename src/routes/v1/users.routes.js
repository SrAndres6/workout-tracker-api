// src/routes/v1/users.routes.js
const express = require('express');
const router = express.Router();
const usersController = require("../../controller/users.controller");

// Obtener usuarios con filtro opcional
router.get("/", usersController.getUsers);

// Crear usuario nuevo
router.post("/", usersController.createUser);

// Actualizar usuario por id
router.put("/:id", usersController.updateUser);

// Eliminar usuario por id
router.delete("/:id", usersController.deleteUser);

module.exports = router;
