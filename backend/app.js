import express from 'express';
import userRoutes from './routes/user.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors())
app.use('/user', userRoutes);

export default app;
