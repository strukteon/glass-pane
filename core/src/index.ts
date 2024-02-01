import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import fileUpload from 'express-fileupload';

import searchRouter from './routes/search';
import organRouter from './routes/organ';
import personRouter from './routes/person';

dotenv.config();

const app: Express = express();

if (!fs.existsSync(process.env.DATA_DIR!)) fs.mkdirSync(process.env.DATA_DIR!);

app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload());

app.use('/api/search/', searchRouter);
app.use('/api/organ/', organRouter);
app.use('/api/person/', personRouter);

app.use('/api/*', (req: Request, res: Response) => {
  res.status(404);
  res.send({ 'success': false, 'msg': 'not found', });
});

app.listen(parseInt(process.env.PORT!), process.env.HOST!, () => console.log(`[*] API listening on http://${process.env.HOST}:${process.env.PORT} ... `));
