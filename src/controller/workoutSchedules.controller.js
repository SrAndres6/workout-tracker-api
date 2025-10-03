// Datos simulados de WorkoutSchedules
let workoutSchedules = [
  {
    id: 1,
    workoutPlanId: 1,
    userId: 1,
    scheduledDate: "2025-01-20",
    scheduledTime: "08:00",
    status: "pendiente", // pendiente, completado, cancelado
    duration: 60, // minutos
    notes: "Entrenamiento de fuerza en la mañana",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    workoutPlanId: 2,
    userId: 1,
    scheduledDate: "2025-01-21",
    scheduledTime: "18:00",
    status: "completado",
    duration: 45,
    notes: "Rutina de volumen completada",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

let nextId = 3;

// GET /workout-schedules - Listar todos los WorkoutSchedules
const getAllWorkoutSchedules = (req, res) => {
  try {
    res.json({
      success: true,
      data: workoutSchedules,
      count: workoutSchedules.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener WorkoutSchedules'
    });
  }
};