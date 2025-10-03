const express = require('express');
const router = express.Router();
const { getAllExercises, createExercise } = require('../../controller/exercises.controller');

// GET /exercises - Listar todos los ejercicios
router.get('/', getAllExercises);

// POST /exercises - Crear nuevo ejercicio
router.post('/', createExercise);

module.exports = router;