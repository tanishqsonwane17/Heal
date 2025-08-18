import express from 'express';
import userRoutes from './routes/user.routes.js';
import cookieParser from 'cookie-parser';
const app = express();

app.use(express.json()); // body parser middleware add karna mat bhoolna
app.use(cookieParser());
app.use('/user', userRoutes);

export default app;
