import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { router as groupRouter } from './data/groups/router.js';
import { router as memberRouter } from './data/members/router.js';
import { router as songRouter } from './data/songs/router.js';

import { createStorage } from './utils/filestorage.js';

const app = express();
createStorage();

app.use(cors());

app.use('/api', groupRouter);
app.use('/api', memberRouter);
app.use('/api', songRouter);

app.listen(process.env.PORT, () =>
  console.log('express läuft auf port', process.env.PORT)
);
