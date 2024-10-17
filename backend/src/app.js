const express = require('express');
const app = express();

// Importar rutas
const facturaRoutes = require('./routes/facturaRoutes');

// Middleware
app.use(express.json());  // Parsear JSON

// Rutas
app.use('/api', facturaRoutes);

// Servidor escuchando
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
