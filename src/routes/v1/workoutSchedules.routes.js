const express = require('express');
const router = express.Router();
const { 
  getAllWorkoutSchedules, 
  createWorkoutSchedule, 
  getWorkoutScheduleById, 
  updateWorkoutSchedule,
  deleteWorkoutSchedule 
} = require('../../controller/workoutSchedules.controller');

// GET /workout-schedules - Listar todos los WorkoutSchedules (con filtros)
router.get('/', getAllWorkoutSchedules);

// GET /workout-schedules/:id - Obtener WorkoutSchedule por ID
router.get('/:id', getWorkoutScheduleById);

// POST /workout-schedules - Crear nuevo WorkoutSchedule
router.post('/', createWorkoutSchedule);

// PUT /workout-schedules/:id - Actualizar WorkoutSchedule completo
router.put('/:id', updateWorkoutSchedule);

// DELETE /workout-schedules/:id - Eliminar WorkoutSchedule
router.delete('/:id', deleteWorkoutSchedule);

module.exports = router;