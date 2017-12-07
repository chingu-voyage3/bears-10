// authentication modified from https://scotch.io/tutorials/easy-node-authentication-setup-and-local
const express = require('express');
const passport = require('passport');

const path = require('path');
const http = require('http');

var configDB = require('./config/database.ts');

const app = express();

require('./server/routes.ts')(app, passport)

require('dotenv').config();

// app.get('/some', (req, res) => { res.json('some')})
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.port || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));