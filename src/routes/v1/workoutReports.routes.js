const express = require('express');
const router = express.Router();
const { 
  getAllWorkoutReports, 
  createWorkoutReport, 
  getWorkoutReportById, 
  updateWorkoutReport,
  deleteWorkoutReport 
} = require('../../controller/workoutReports.controller');

// GET /workout-reports - Listar todos los WorkoutReports
router.get('/', getAllWorkoutReports);

// GET /workout-reports/:id - Obtener WorkoutReport por ID
router.get('/:id', getWorkoutReportById);

// POST /workout-reports - Crear nuevo WorkoutReport
router.post('/', createWorkoutReport);

// PUT /workout-reports/:id - Actualizar WorkoutReport completo
router.put('/:id', updateWorkoutReport);

// DELETE /workout-reports/:id - Eliminar WorkoutReport
router.delete('/:id', deleteWorkoutReport);

module.exports = router;