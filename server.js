const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const path = require('path'); // Para manejar rutas de archivos

const app = express();

app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https' && process.env.NODE_ENV === 'production') {
        return res.redirect(`https://${req.headers.host}${req.url}`);
    }
    next();
});

app.use(cors({
    origin: [
        'https://enered.pe',
        'https://www.enered.pe'
    ],
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true
}));

// Sirve archivos estáticos desde la raiz del dominio
app.use(express.static('/home/fcqngeyc/enered.pe/'));

// Configuración de la conexion a la base de datos
const dbConfig = {
  host: 'localhost', // Cambiado a 'bh7114.banahosting.com' o 'localhost'
  user: 'fcqngeyc_adminApp',
  password: '4lckg[geukw6',
  database: 'fcqngeyc_dataPricingApp',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

// Endpoint para obtener datos
app.get('/app-precios/precios', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.query('SELECT FCHA_REGISTRO, RUC, RAZON_SOCIAL, DEPARTAMENTO, PROVINCIA, DISTRITO, DIRECCION, PRODUCTO, UNIDAD, PRECIO FROM fuel_prices');
    connection.end();
    res.json({ data: rows });
  } catch (error) {
    console.error('Error al obtener datos:', error);
    res.status(500).json({ error: 'Error al obtener datos' });
  }
});

// Sirve index.html desde la raiz del dominio
app.get('/app-precios', (req, res) => {
  res.sendFile(path.join('/home/fcqngeyc/enered.pe/public_html', 'index.html'));
});

// Usa el puerto asignado por cPanel o 3000 como fallback
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});