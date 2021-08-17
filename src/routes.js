const express = require('express');
const routes = express.Router();

const profile = {
  name: 'Victor Borzaquel',
  avatar: 'https://avatars.githubusercontent.com/u/73085387?v=4',
  "monthly-budget": 3000,
  "hours-per-day": 10,
  "days-per-week": 6,
  "vacation-per-year": 2,
}

const views = __dirname + '/views/';
routes.get('/', (req, res) => res.render(views + 'index', { profile }));
routes.get('/job', (req, res) => res.render(views + 'job'));
routes.get('/job/edit', (req, res) => res.render(views + 'job-edit'));
routes.get('/profile', (req, res) => res.render(views + 'profile', { profile }));




// const basePath = __dirname + '/views';
// routes.get('/', (req, res) => res.sendFile(basePath + '/index.html'));
// routes.get('/job', (req, res) => res.sendFile(basePath + '/job.html'));
// routes.get('/job/edit', (req, res) => res.sendFile(basePath + '/job-edit.html'));
// routes.get('/profile', (req, res) => res.sendFile(basePath + '/profile.html'));



// return res.send(200);

// routes.get('/index.html', (req, res) => {
//   return res.redirect('/');
// })


module.exports = routes;