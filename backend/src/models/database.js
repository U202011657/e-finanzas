const mysql = require('mysql2');

// Configuración de la conexión
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // Cambia esto por tu usuario de MySQL
    password: 'password',  // Cambia esto por tu contraseña de MySQL
    database: 'nombre_base_de_datos'  // Cambia esto por el nombre de tu base
});

// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos');
});

module.exports = connection;
