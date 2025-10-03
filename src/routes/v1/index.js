const express = require('express');
const router = express.Router();

// Importar rutas
const usersRoutes = require('./users.routes');
const exercisesRoutes = require('./exercise.routes');
const workoutPlansRoutes = require('./workoutPlans.routes');
const workoutSchedulesRoutes = require('./workoutSchedules.routes');
const workoutReportsRoutes = require('./workoutReports.routes');
const workoutExercisesRoutes = require('./workoutExercises.routes'); 


// Configurar rutas
router.use('/users', usersRoutes);
router.use('/exercises', exercisesRoutes);
router.use('/workout-plans', workoutPlansRoutes);
router.use('/workout-schedules', workoutSchedulesRoutes);
router.use('/workout-reports', workoutReportsRoutes);
router.use('/workout-exercises', workoutExercisesRoutes); 

module.exports = router;