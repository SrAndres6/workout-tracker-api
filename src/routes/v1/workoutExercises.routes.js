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

// Actualizar exports
module.exports = {
  getWorkoutExerciseById,
  
};