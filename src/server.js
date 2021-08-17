const express = require('express');
const server = express();
const routes = require('./routes');

// Template Engine
server.set('view engine', 'ejs');

server.use(express.static("public"));
server.use(routes);

server.listen(3000, () => console.log("Server Start"));

// express.get('/', (req, res) => {
//   return res.sendFile(__dirname + '/views/index.html');
//   // return res.send(200);
// })