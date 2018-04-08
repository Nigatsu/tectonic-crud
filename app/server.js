'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import './db';
import config from './config';
import routes from './REST/routes';

const app = express();

app.use(bodyParser.json());

routes(app);

app.listen(config.port, () => console.log(`listening on http://localhost:${config.port}`));
