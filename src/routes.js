const express = require("express");
const routes = express.Router();

const ProfileController = require('./controllers/ProfileController');
const JobController = require('./controllers/JobController');
const DashboardController = require("./controllers/DashboardController");
// const Profile = require('./module/Profile');
// const convertToCurrency = require('./utils/convertToCurrency');

// Job get
routes.get("/", DashboardController.index);
routes.get("/job", JobController.create);
routes.get("/job/:id", JobController.show);
// Job post
routes.post("/job", JobController.save);
routes.post("/job/:id", JobController.update);
routes.post("/job/delete/:id", JobController.delete);
// Profile get
routes.get("/profile", ProfileController.index);
// Profile post
routes.post("/profile", ProfileController.update);

module.exports = routes;

// const basePath = __dirname + '/views';
// routes.get('/', (req, res) => res.sendFile(basePath + '/index.html'));
// routes.get('/job', (req, res) => res.sendFile(basePath + '/job.html'));
// routes.get('/job/edit', (req, res) => res.sendFile(basePath + '/job-edit.html'));
// routes.get('/profile', (req, res) => res.sendFile(basePath + '/profile.html'));

// return res.send(200);

// routes.get('/index.html', (req, res) => {
//   return res.redirect('/');
// })
