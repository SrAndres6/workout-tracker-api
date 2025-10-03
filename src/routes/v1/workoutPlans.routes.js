const express = require('express');
const router = express.Router();
const { 
  getAllWorkoutPlans, 
  createWorkoutPlan, 
  getWorkoutPlanById, 
  updateWorkoutPlan,
  deleteWorkoutPlan 
} = require('../../controller/workoutplan.controller');

// GET /workout-plans - Listar todos los WorkoutPlans (con filtros)
router.get('/', getAllWorkoutPlans);

// GET /workout-plans/:id - Obtener WorkoutPlan por ID
router.get('/:id', getWorkoutPlanById);

// POST /workout-plans - Crear nuevo WorkoutPlan
router.post('/', createWorkoutPlan);

// PUT /workout-plans/:id - Actualizar WorkoutPlan completo
router.put('/:id', updateWorkoutPlan);

// DELETE /workout-plans/:id - Eliminar WorkoutPlan
router.delete('/:id', deleteWorkoutPlan);

module.exports = router;