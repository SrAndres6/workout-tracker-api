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

// PUT /workout-exercises/:id - Actualizar WorkoutExercise completo
const updateWorkoutExercise = (req, res) => {
  try {
    const { id } = req.params;
    const { workoutPlanId, exerciseId, exercise_name, sets, reps, weight, rest_time, order, notes } = req.body;
    
    const workoutExerciseIndex = workoutExercises.findIndex(w => w.id === parseInt(id));
    
    if (workoutExerciseIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'WorkoutExercise no encontrado'
      });
    }

    if (!workoutPlanId || !exerciseId || !exercise_name) {
      return res.status(400).json({
        success: false,
        message: 'workoutPlanId, exerciseId y exercise_name son obligatorios'
      });
    }

    workoutExercises[workoutExerciseIndex] = {
      ...workoutExercises[workoutExerciseIndex],
      workoutPlanId,
      exerciseId,
      exercise_name,
      sets: sets || 3,
      reps: reps || 10,
      weight: weight || 0,
      rest_time: rest_time || 60,
      order: order || 1,
      notes: notes || '',
      updatedAt: new Date()
    };

    res.json({
      success: true,
      data: workoutExercises[workoutExerciseIndex],
      message: 'WorkoutExercise actualizado exitosamente'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al actualizar WorkoutExercise'
    });
  }
};

// DELETE /workout-exercises/:id - Eliminar WorkoutExercise
const deleteWorkoutExercise = (req, res) => {
  try {
    const { id } = req.params;
    const workoutExerciseIndex = workoutExercises.findIndex(w => w.id === parseInt(id));
    
    if (workoutExerciseIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'WorkoutExercise no encontrado'
      });
    }

    const deletedWorkoutExercise = workoutExercises.splice(workoutExerciseIndex, 1)[0];

    res.json({
      success: true,
      data: deletedWorkoutExercise,
      message: 'WorkoutExercise eliminado exitosamente'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al eliminar WorkoutExercise'
    });
  }
};

// GET /workout-exercises - Listar todos los WorkoutExercises con filtros
const getAllWorkoutExercises = (req, res) => {
  try {
    const { workoutPlanId, exerciseId, exerciseName, minSets, maxWeight } = req.query;
    
    let filteredWorkoutExercises = [...workoutExercises];

    // Filtro por workoutPlanId
    if (workoutPlanId) {
      filteredWorkoutExercises = filteredWorkoutExercises.filter(w => 
        w.workoutPlanId === parseInt(workoutPlanId)
      );
    }

    // Filtro por exerciseId
    if (exerciseId) {
      filteredWorkoutExercises = filteredWorkoutExercises.filter(w => 
        w.exerciseId === parseInt(exerciseId)
      );
    }

    // Búsqueda por nombre de ejercicio
    if (exerciseName) {
      filteredWorkoutExercises = filteredWorkoutExercises.filter(w => 
        w.exercise_name.toLowerCase().includes(exerciseName.toLowerCase())
      );
    }

    // Filtro por sets mínimos
    if (minSets) {
      filteredWorkoutExercises = filteredWorkoutExercises.filter(w => 
        w.sets >= parseInt(minSets)
      );
    }

    // Filtro por peso máximo
    if (maxWeight) {
      filteredWorkoutExercises = filteredWorkoutExercises.filter(w => 
        w.weight <= parseInt(maxWeight)
      );
    }

    // Ordenar por orden
    filteredWorkoutExercises.sort((a, b) => a.order - b.order);

    res.json({
      success: true,
      data: filteredWorkoutExercises,
      count: filteredWorkoutExercises.length,
      filters: { workoutPlanId, exerciseId, exerciseName, minSets, maxWeight }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener WorkoutExercises'
    });
  }
};

// Actualizar exports
module.exports = {
  getWorkoutExerciseById,
  createWorkoutExercise,
  updateWorkoutExercise,
  deleteWorkoutExercise,
  getAllWorkoutExercises
};