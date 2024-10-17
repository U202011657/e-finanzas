const connection = require('../models/database');

// Obtener todas las facturas
exports.getAllFacturas = (req, res) => {
    const query = 'SELECT * FROM Facturas';
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener facturas' });
        }
        res.status(200).json(results);
    });
};
