const express = require('express');
const router = express.Router();

// Importar rutas
const usersRoutes = require('./users.routes');
const exercisesRoutes = require('./exercise.routes');

// Configurar rutas
router.use('/users', usersRoutes);
router.use('/exercises', exercisesRoutes);

module.exports = router;