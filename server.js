import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import { checkDatabaseConnection } from './utils/dbUtils.js';

const app = express();

// Configuración de CORS
const allowedOrigin = 'https://miprimerappreact.netlify.app'; // Cambia esto a la URL de tu app web
app.use(cors({
  origin: (origin, callback) => {
    // Bloquea orígenes vacíos (Postman, Thunder Client) y permite solo el permitido
    if (!origin) {
      return callback(new Error('No origin allowed'), false);
    }
    if (origin === allowedOrigin) {
      return callback(null, true);
    }
    // para permitir thunder client
    /* if (!origin || origin === allowedOrigin) {
        return callback(null, true);
      }
    callback(new Error('Origin not allowed'), false); */
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  credentials: true, // Si necesitas enviar cookies o encabezados de autenticación
}));

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use("/user", userRoutes);

app.get("", (req, res) => {
  res.send('hola');
});

// Verificar conexión a la base de datos
checkDatabaseConnection();

export default app;
