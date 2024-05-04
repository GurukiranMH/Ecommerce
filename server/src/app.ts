import express, { Express } from 'express';
import * as dotenv from 'dotenv';
import log from './util/logger'

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.listen(port , () => {
    log.info(`Server is listening to http://localhost:${port}`);
});


