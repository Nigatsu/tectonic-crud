'use strict';

import mongoose from 'mongoose';
import config from './config';

mongoose.Promise = global.Promise;
mongoose.connect(config.database.uri, { useMongoClient: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', console.info.bind(console, 'MongoDB connection success'));

import './models/user.schema';

