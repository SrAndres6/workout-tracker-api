const { getWorkoutPlanById } = require("./workoutplan.controller");

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

// GET /workout-schedules/:id - Obtener WorkoutSchedule por ID
const getWorkoutScheduleById = (req, res) => {
  try {
    const { id } = req.params;
    const workoutSchedule = workoutSchedules.find(w => w.id === parseInt(id));
    
    if (!workoutSchedule) {
      return res.status(404).json({
        success: false,
        message: 'WorkoutSchedule no encontrado'
      });
    }

    res.json({
      success: true,
      data: workoutSchedule
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener WorkoutSchedule'
    });
  }
};


// POST /workout-schedules - Crear nuevo WorkoutSchedule
const createWorkoutSchedule = (req, res) => {
  try {
    const { workoutPlanId, userId, scheduledDate, scheduledTime, status, duration, notes } = req.body;
    
    if (!workoutPlanId || !userId || !scheduledDate) {
      return res.status(400).json({
        success: false,
        message: 'workoutPlanId, userId y scheduledDate son obligatorios'
      });
    }

    const newWorkoutSchedule = {
      id: nextId,
      workoutPlanId,
      userId,
      scheduledDate,
      scheduledTime: scheduledTime || "09:00",
      status: status || "pendiente",
      duration: duration || 60,
      notes: notes || '',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    workoutSchedules.push(newWorkoutSchedule);
    nextId++;

    res.status(201).json({
      success: true,
      data: newWorkoutSchedule,
      message: 'WorkoutSchedule creado exitosamente'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al crear WorkoutSchedule'
    });
  }
};


// Actualizar exports
module.exports = {
  getWorkoutPlanById,
  createWorkoutSchedule,
  
};