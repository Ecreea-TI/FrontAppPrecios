const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.static(__dirname));

// Configuración de la conexión a la base de datos
const dbConfig = {
  host: 'bh7114.banahosting.com',
  user: 'fcqngeyc_adminApp',
  password: 'emkappprecios12',
  database: 'fcqngeyc_dataPricingApp',
  port: 3306
};

// Endpoint para obtener datos
app.get('/precios', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.query('SELECT FCHA_REGISTRO, RUC, RAZON_SOCIAL, DEPARTAMENTO, PROVINCIA, DISTRITO, DIRECCION, PRODUCTO, UNIDAD, PRECIO FROM fuel_prices');
    await connection.end();
    res.json({ data: rows });
  } catch (error) {
    console.error('Error al obtener datos:', error);
    res.status(500).json({ error: 'Error al obtener datos' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});