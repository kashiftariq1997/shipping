import { config } from 'dotenv'
import cors from "cors";
import express from 'express';
import shippingRoutes from './routes/shipping';
import dbConnection from './configuration/database';

config({ path: '../.env'})
const app = express();
const port = 3001;

dbConnection();

// middleware
app.use(cors());
// middlewares end here

app.use(express.json());
app.use('/shipping', shippingRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
