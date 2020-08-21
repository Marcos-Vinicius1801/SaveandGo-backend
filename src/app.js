import express from 'express';
import cors from 'cors';
import routes from './routes';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

 app.use(cors());

 app.use(express.json());

 app.use(routes);

 app.listen(3333);
export default app;

