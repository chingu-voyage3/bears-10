// authentication modified from https://scotch.io/tutorials/easy-node-authentication-setup-and-local
const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const User = require('./server/models/user.ts')(mongoose, bcrypt);
const morgan = require('morgan');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const passport = require('passport');
const passportJWT = require('passport-jwt');
const cors = require('cors');
const app = express();

const ExtractJwt = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;

app.use(cors());
app.options('*', cors()); // enable pre-flight request for DELETE request


app.use(passport.initialize());
app.use(morgan('combined'));

const path = require('path');
const http = require('http');

const configDB = require('./config/database.ts');

mongoose.connect(configDB.url, { useMongoClient: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./config/passport.ts')(passport, User); // pass passport for configuration
require('./config/jwtAuth.ts')(passport, ExtractJwt, JWTStrategy); // configure jwt authentication
const api = require('./server/routes.ts')(passport, ExtractJwt, jwt, bcrypt, express, User);

app.use('/api', api);
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.port || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));