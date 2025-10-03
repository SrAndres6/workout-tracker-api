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

// PUT /exercises/:id - Actualizar ejercicio completo
const updateExercise = (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, category, muscleGroup, difficulty, equipment } = req.body;
    
    const exerciseIndex = exercises.findIndex(ex => ex.id === parseInt(id));
    
    if (exerciseIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Ejercicio no encontrado'
      });
    }

    if (!name || !category) {
      return res.status(400).json({
        success: false,
        message: 'Nombre y categoría son obligatorios'
      });
    }

    exercises[exerciseIndex] = {
      ...exercises[exerciseIndex],
      name,
      description: description || '',
      category,
      muscleGroup: muscleGroup || '',
      difficulty: difficulty || 'Principiante',
      equipment: equipment || '',
      updatedAt: new Date()
    };

    res.json({
      success: true,
      data: exercises[exerciseIndex],
      message: 'Ejercicio actualizado exitosamente'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al actualizar ejercicio'
    });
  }
};


// POST /exercises - Crear nuevo ejercicio
const createExercise = (req, res) => {
  try {
    const { name, description, category, muscleGroup, difficulty, equipment } = req.body;
    
    if (!name || !category) {
      return res.status(400).json({
        success: false,
        message: 'Nombre y categoría son obligatorios'
      });
    }

    const newExercise = {
      id: nextId,
      name,
      description: description || '',
      category,
      muscleGroup: muscleGroup || '',
      difficulty: difficulty || 'Principiante',
      equipment: equipment || '',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    exercises.push(newExercise);
    nextId++;

    res.status(201).json({
      success: true,
      data: newExercise,
      message: 'Ejercicio creado exitosamente'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al crear ejercicio'
    });
  }
};

// PUT /exercises/:id - Actualizar ejercicio completo
const putExercise = (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, category, muscleGroup, difficulty, equipment } = req.body;

        const exerciseIndex = exercises.findIndex(ex => ex.id === parseInt(id));

        if (exerciseIndex === -1) {
            return res.status(404).json({
                success: false,
                message: 'Ejercicio no encontrado'
            });
        }

        // PUT: requiere todos los campos obligatorios
        if (!name || !category) {
            return res.status(400).json({
                success: false,
                message: 'Nombre y categoría son obligatorios'
            });
        }

        exercises[exerciseIndex] = {
            ...exercises[exerciseIndex],
            name,
            description: description || '',
            category,
            muscleGroup: muscleGroup || '',
            difficulty: difficulty || 'Principiante',
            equipment: equipment || '',
            updatedAt: new Date()
        };

        res.json({
            success: true,
            data: exercises[exerciseIndex],
            message: 'Ejercicio actualizado exitosamente'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al actualizar ejercicio'
        });
    }
};

// DELETE /exercises/:id - Eliminar ejercicio
const deleteExercise = (req, res) => {
  try {
    const { id } = req.params;
    const exerciseIndex = exercises.findIndex(ex => ex.id === parseInt(id));
    
    if (exerciseIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Ejercicio no encontrado'
      });
    }

    const deletedExercise = exercises.splice(exerciseIndex, 1)[0];

    res.json({
      success: true,
      data: deletedExercise,
      message: 'Ejercicio eliminado exitosamente'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al eliminar ejercicio'
    });
  }
};

// Actualizar module.exports
module.exports = {
  getExerciseById,
createExercise,
putExercise,
deleteExercise,


};