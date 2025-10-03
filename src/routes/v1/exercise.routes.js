const express = require('express');
const router = express.Router(); // ← Asegúrate que sea de express

const { 
  getAllExercises, 
  createExercise, 
  actualizarExercise,
  getExerciseById,
  deleteExercise
} = require('../../controller/exercise.controller');

// GET /exercises - Listar todos los ejercicios (con filtros)
router.get('/', getAllExercises);

// GET /exercises/:id - Obtener ejercicio por ID
router.get('/:id', getExerciseById);

// POST /exercises - Crear nuevo ejercicio
router.post('/', createExercise);

// PUT /exercises/:id - Actualizar ejercicio COMPLETO
router.put('/:id', actualizarExercise);

// DELETE /exercises/:id - Eliminar ejercicio
router.delete('/:id', deleteExercise);

module.exports = router;