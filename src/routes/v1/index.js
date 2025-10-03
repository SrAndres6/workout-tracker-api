const express = require('express');
const router = express.Router();

// Importar rutas
const usersRoutes = require('./users.routes');
const exercisesRoutes = require('./exercise.routes');
const workoutPlansRoutes = require('./workoutPlans.routes');
const workoutSchedulesRoutes = require('./workoutSchedules.routes');

// Configurar rutas
router.use('/users', usersRoutes);
router.use('/exercises', exercisesRoutes);
router.use('/workout-plans', workoutPlansRoutes);
router.use('/workout-schedules', workoutSchedulesRoutes);

module.exports = router;