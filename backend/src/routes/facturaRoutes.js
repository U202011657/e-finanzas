const express = require('express');
const router = express.Router();
const facturaController = require('../controllers/facturaController');

// Ruta para obtener todas las facturas
router.get('/facturas', facturaController.getAllFacturas);

module.exports = router;
