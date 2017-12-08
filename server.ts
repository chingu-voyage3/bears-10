// authentication modified from https://scotch.io/tutorials/easy-node-authentication-setup-and-local
var express = require('express');
require('dotenv').config();
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();

app.use(passport.initialize())
app.use(passport.session())

const path = require('path');
const http = require('http');

var configDB = require('./config/database.ts');

mongoose.connect(configDB.url, { useMongoClient: true })

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

require('./config/passport.ts')(passport); // pass passport for configuration   


app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const api = require('./server/routes.ts')(passport)

app.use('/api', api)

const port = process.env.port || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));