// src/app.ts

import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import cors from 'cors'; // Import the cors library

const app = express();
app.use(cors());


app.use(bodyParser.json());

// Routes
app.use('/api', routes);

export default app;
