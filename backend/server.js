import dotenv from 'dotenv';
dotenv.config();

import dbConnection from './db/db.js';
dbConnection();

import app from './app.js'; 

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
