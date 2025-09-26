const exports = require("express");
const router = express.Router();

const v1Routes = require('./v1');

//ruta base pasa informacion de la api
router.get('/', (req, res) => {
  res.json({
    message: 'Workout Tracker API',
    version: ["v1"],
    endpoints: {
      users: '/api/v1'
    }
  });
});


module.exports = router;