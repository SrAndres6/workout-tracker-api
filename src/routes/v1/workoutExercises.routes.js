const express = require('express');
const router = express.Router();
const { 
  getAllWorkoutExercises, 
  createWorkoutExercise, 
  getWorkoutExerciseById, 
  updateWorkoutExercise,
  deleteWorkoutExercise 
} = require('../../controller/workoutExercises.controller');

// GET /workout-exercises - Listar todos los WorkoutExercises
router.get('/', getAllWorkoutExercises);

// GET /workout-exercises/:id - Obtener WorkoutExercise por ID
router.get('/:id', getWorkoutExerciseById);

// POST /workout-exercises - Crear nuevo WorkoutExercise
router.post('/', createWorkoutExercise);

// PUT /workout-exercises/:id - Actualizar WorkoutExercise completo
router.put('/:id', updateWorkoutExercise);

// DELETE /workout-exercises/:id - Eliminar WorkoutExercise
router.delete('/:id', deleteWorkoutExercise);

module.exports = router;