// Datos simulados de WorkoutExercises
let workoutExercises = [
  {
    id: 1,
    workoutPlanId: 1,
    exerciseId: 1,
    exercise_name: "Sentadillas",
    sets: 4,
    reps: 8,
    weight: 50,
    rest_time: 60,
    order: 1,
    notes: "Mantener la espalda recta",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    workoutPlanId: 1,
    exerciseId: 2,
    exercise_name: "Press de banca",
    sets: 3,
    reps: 12,
    weight: 30,
    rest_time: 45,
    order: 2,
    notes: "Controlar la bajada",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 3,
    workoutPlanId: 2,
    exerciseId: 1,
    exercise_name: "Sentadillas",
    sets: 5,
    reps: 5,
    weight: 70,
    rest_time: 90,
    order: 1,
    notes: "Fuerza máxima",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

let nextId = 4;

// GET /workout-exercises/:id - Obtener WorkoutExercise por ID
const getWorkoutExerciseById = (req, res) => {
  try {
    const { id } = req.params;
    const workoutExercise = workoutExercises.find(w => w.id === parseInt(id));
    
    if (!workoutExercise) {
      return res.status(404).json({
        success: false,
        message: 'WorkoutExercise no encontrado'
      });
    }

    res.json({
      success: true,
      data: workoutExercise
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener WorkoutExercise'
    });
  }
};

// POST /workout-exercises - Crear nuevo WorkoutExercise
const createWorkoutExercise = (req, res) => {
  try {
    const { workoutPlanId, exerciseId, exercise_name, sets, reps, weight, rest_time, order, notes } = req.body;
    
    if (!workoutPlanId || !exerciseId || !exercise_name) {
      return res.status(400).json({
        success: false,
        message: 'workoutPlanId, exerciseId y exercise_name son obligatorios'
      });
    }

    const newWorkoutExercise = {
      id: nextId,
      workoutPlanId,
      exerciseId,
      exercise_name,
      sets: sets || 3,
      reps: reps || 10,
      weight: weight || 0,
      rest_time: rest_time || 60,
      order: order || 1,
      notes: notes || '',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    workoutExercises.push(newWorkoutExercise);
    nextId++;

    res.status(201).json({
      success: true,
      data: newWorkoutExercise,
      message: 'WorkoutExercise creado exitosamente'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al crear WorkoutExercise'
    });
  }
};

// Actualizar exports
module.exports = {
  getWorkoutExerciseById,
  createWorkoutExercise,
};