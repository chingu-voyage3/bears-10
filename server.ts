// authentication modified from https://scotch.io/tutorials/easy-node-authentication-setup-and-local
require('dotenv').config();
import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt-nodejs';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as jwt from 'jsonwebtoken';
import * as cors from 'cors';
import * as passport from 'passport';
import * as passportJWT from 'passport-jwt';
import * as http from 'http';
import * as path from 'path';

import apiRouter from './server/routes/index';

import User from './server/models/user';
// const User = require('./server/models/user')(mongoose, bcrypt);
/**
 * Instantiate express app
 */
const app = express();

const ExtractJwt = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;
/**
 * Database instance
 */
const configDB = require('./config/database');

mongoose.connect(configDB.url, { useMongoClient: true });

/**
 * Middleware Setup
 */
app.use(helmet());
app.use(cors());
app.options('*', cors()); // enable pre-flight request for DELETE request
app.use(compression());
app.use(passport.initialize());
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Api Routes
 */
app.use('/api', apiRouter);
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});
/**
 * Server
 */
const port = process.env.port || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));
