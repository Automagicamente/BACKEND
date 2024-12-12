import pool from '../config/db.js';

export const checkDatabaseConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Database connected successfully!');
    connection.release(); // Liberar la conexión después de verificarla
  } catch (error) {
    console.error('Database connection failed:', error.message);
    console.log('Retrying connection in 3 seg...');
    setTimeout(checkDatabaseConnection, 3000); // 3 minutos en milisegundos
  }
};
