const express = require('express');
const router = express.Router();

// Importar Versiones de rutas
const v1Routes = require('./v1');

//Ruta Base para informacion de la API
router.use('/v1', v1Routes, (req, res) => {
   res.json({
    message: 'Workout Tracker API',
    versions: ['v1'],
    endpoints: {
        v1: '/api/v1'
    }
   });
});
module.exports = router;