import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './route/route.js';
import Model from './model/model.js';

const port = 3000;
dotenv.config();

const app = express();



app.use(express.json());

// rotas
app.use('/api', routes);

// conexão com banco
const mongoString = "mongodb://localhost:27017/myDatabase";

mongoose.connect(mongoString);

const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database Connected');
});

// servidor
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});