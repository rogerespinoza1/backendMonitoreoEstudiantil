const express = require('express');
const router = express.Router();
const alumnoController = require('../controllers/alumnoController');
//api/alumnos
router.post('/', alumnoController.crearAlumno);
router.get('/', alumnoController.obtenerAlumno);
router.put('/:id', alumnoController.actualizarAlumno);
router.get('/:id', alumnoController.obtenerAlumnoPorId);
router.delete('/:id', alumnoController.eliminarAlumno);
module.exports = router;