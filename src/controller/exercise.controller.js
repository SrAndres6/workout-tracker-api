// Datos simulados de ejercicios
let exercises = [
  {
    id: 1,
    name: "Sentadillas",
    description: "Ejercicio fundamental para piernas y glúteos",
    category: "Piernas",
    muscleGroup: "Cuádriceps, Glúteos",
    difficulty: "Principiante",
    equipment: "Pesas libres",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    name: "Press de banca",
    description: "Ejercicio para desarrollo del pecho",
    category: "Pecho",
    muscleGroup: "Pectorales, Tríceps",
    difficulty: "Intermedio",
    equipment: "Barra, Banco",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 3,
    name: "Plan fuerza",
    description: "Entrenamiento para fuerza muscular",
    category: "Full Body",
    muscleGroup: "Múltiple",
    difficulty: "Intermedio",
    equipment: "Pesas libres",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

let nextId = 4;

// GET /exercises/:id - Obtener ejercicio por ID
const getExerciseById = (req, res) => {
  try {
    const { id } = req.params;
    const exercise = exercises.find(ex => ex.id === parseInt(id));
    
    if (!exercise) {
      return res.status(404).json({
        success: false,
        message: 'Ejercicio no encontrado'
      });
    }

    res.json({
      success: true,
      data: exercise
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener ejercicio'
    });
  }
};

// Actualizar module.exports
module.exports = {
  getExerciseById,

};