// server.js
import 'dotenv/config';
import express from 'express';
import userRoutes from './routes/userRoutes.js';
import { checkDatabaseConnection } from './utils/dbUtils.js';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/user",userRoutes)

app.get("", (req, res)=>{
    res.send('hola');
})

checkDatabaseConnection();

export default app;
