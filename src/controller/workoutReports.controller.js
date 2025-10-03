// Datos simulados de WorkoutReports
let workoutReports = [
  {
    id: 1,
    workoutScheduleId: 1,
    userId: 1,
    workoutPlanId: 1,
    completedDate: "2025-01-20",
    totalDuration: 58,
    totalExercises: 4,
    totalSets: 16,
    averageWeight: 45.5,
    performanceRating: 8.5,
    notes: "Buen entrenamiento, buena energía",
    exercisesCompleted: [
      {
        exercise_id: 1,
        exercise_name: "Sentadillas",
        sets_completed: 4,
        reps_completed: [8, 8, 7, 6],
        weight_used: [50, 50, 55, 55],
        notes: "Últimas series más difíciles"
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    workoutScheduleId: 2,
    userId: 1,
    workoutPlanId: 2,
    completedDate: "2025-01-21",
    totalDuration: 42,
    totalExercises: 3,
    totalSets: 12,
    averageWeight: 32.0,
    performanceRating: 9.0,
    notes: "Excelente sesión, buena técnica",
    exercisesCompleted: [
      {
        exercise_id: 2,
        exercise_name: "Press de banca",
        sets_completed: 3,
        reps_completed: [12, 12, 10],
        weight_used: [30, 30, 35],
        notes: "Progresión adecuada"
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

let nextId = 3;

// GET /workout-reports/:id - Obtener WorkoutReport por ID
const getWorkoutReportById = (req, res) => {
  try {
    const { id } = req.params;
    const workoutReport = workoutReports.find(w => w.id === parseInt(id));
    
    if (!workoutReport) {
      return res.status(404).json({
        success: false,
        message: 'WorkoutReport no encontrado'
      });
    }

    res.json({
      success: true,
      data: workoutReport
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener WorkoutReport'
    });
  }
};

// Actualizar exports
module.exports = {
  getWorkoutReportById,
  
};