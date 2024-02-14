import { config } from 'dotenv'
import express from 'express';
import shippingRoutes from './routes/shipping';

config({ path: '../.env'})
const app = express();
const port = 3001;

app.use(express.json());
app.use('/shipping', shippingRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
