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

  try {
    const createTable = await pool.query(`
      CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        comment TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      );
    `);
    console.log("resultado de crear tabla", createTable);
  } catch (error) {
    console.log("tabla existe");
    
  }
};
