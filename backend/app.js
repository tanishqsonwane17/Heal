import express from 'express';
import userRoutes from './routes/user.routes.js';

const app = express();

app.use(express.json()); // body parser middleware add karna mat bhoolna

app.use('/user', userRoutes);

export default app;
