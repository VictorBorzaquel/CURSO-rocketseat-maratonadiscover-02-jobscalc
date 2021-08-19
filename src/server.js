const express = require('express');
const server = express();
const routes = require('./routes');
const path = require('path');

// Template Engine
server.set('view engine', 'ejs');

// Change location views path
server.set('views', path.join(__dirname, 'views'))

// Enable Static Files
server.use(express.static("public"));

// Enable rec.body
server.use(express.urlencoded({ extended: true }));

// Routes
server.use(routes);

// Server Init
server.listen(3000, () => console.log("Server Start"));

// express.get('/', (req, res) => {
//   return res.sendFile(__dirname + '/views/index.html');
//   // return res.send(200);
// })