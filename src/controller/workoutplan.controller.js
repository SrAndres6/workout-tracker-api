// Datos simulados de WorkoutPlans
let workoutPlans = [
  {
    id: 1,
    name: "Plan fuerza",
    description: "Entrenamiento para fuerza muscular",
    userId: 1,
    exercises: [
      {
        exercise_id: 1,
        exercise_name: "Sentadillas",
        sets: 4,
        reps: 8,
        weight: 50
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    name: "Rutina volumen",
    description: "Entrenamiento para ganar masa muscular",
    userId: 1,
    exercises: [
      {
        exercise_id: 2,
        exercise_name: "Press de banca",
        sets: 3,
        reps: 12,
        weight: 30
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

let nextId = 3;

// GET /workout-plans - Listar todos los WorkoutPlans
const getAllWorkoutPlans = (req, res) => {
  try {
    res.json({
      success: true,
      data: workoutPlans,
      count: workoutPlans.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener WorkoutPlans'
    });
  }
};

// POST /workout-plans - Crear nuevo WorkoutPlan
const createWorkoutPlan = (req, res) => {
  try {
    const { name, description, userId, exercises } = req.body;
    
    if (!name || !userId) {
      return res.status(400).json({
        success: false,
        message: 'Nombre y userId son obligatorios'
      });
    }

    const newWorkoutPlan = {
      id: nextId,
      name,
      description: description || '',
      userId,
      exercises: exercises || [],
      createdAt: new Date(),
      updatedAt: new Date()
    };

    workoutPlans.push(newWorkoutPlan);
    nextId++;

    res.status(201).json({
      success: true,
      data: newWorkoutPlan,
      message: 'WorkoutPlan creado exitosamente'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al crear WorkoutPlan'
    });
  }
};

module.exports = {
  getAllWorkoutPlans,
  createWorkoutPlan

};