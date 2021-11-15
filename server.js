// .env
import dotenv from 'dotenv';
dotenv.config();
// dependencies externs
import express, { json, urlencoded } from 'express';
import cors from 'cors';

// dependencies interns
import connectDb from './db/connectDb';
import apiRouter from './routes/apiRouter';

// @ app
const app = express();

// @ middlewares
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(cors());

// @ routes
app.use(`/api/${apiRouter.GenerateId.route}`, apiRouter.GenerateId.dir);
app.use(`/api/${apiRouter.Parking.route}`, apiRouter.Parking.dir);
app.get('/', (req, res)=>{ res.json({ msg: "Api rodando!" }) })

// @db
connectDb(); 

// @listen server
const PORT = process.env.PORT;
app.listen(PORT, console.log(`Server in on port ${PORT}`));