const Job = require('../module/Job');
const JobUtils = require('../utils/JobUtils');
const Profile = require('../module/Profile');
const ConvertToCurrency = require('../utils/ConvertToCurrency');

module.exports = {
  create(req, res) {
    const jobs = Job.get();

    return res.render("job", { jobs });
  },
  save(req, res) {
    // req.body = { name: 'App', 'daily-hours': '5', 'total-hours': '40' }
    const jobs = Job.get();

    jobId = jobs[jobs.length - 1]?.id + 1 || 1;
    Job.add({
      id: jobId,
      name: req.body.name,
      "daily-hours": req.body["daily-hours"],
      "total-hours": req.body["total-hours"],
      created_at: Date.now(),
    });
    return res.redirect("/");
  },
  show(req, res) {
    const jobs = Job.get();
    const profile = Profile.get();

    const jobId = req.params.id;
    const job = jobs.find(job => Number(job.id) === Number(jobId));
    if (!job) return res.send(404);

    job.budget = JobUtils.calculateBudget(job, profile['value-hour']);

    return res.render("job-edit", { job, ConvertToCurrency });
  },
  update(req, res) {
    const jobs = Job.get();

    const jobId = req.params.id;
    const job = jobs.find(job => Number(job.id) === Number(jobId));
    if (!job) return res.send(404);

    const newData = jobs.map(job => {
        if (Number(job.id) === Number(jobId)) {
          job = {
            ...job,
            name: req.body.name,
            "total-hours": req.body["total-hours"],
            "daily-hours": req.body["daily-hours"]
          };
        }
        return job;
      })

    Job.set(newData);

    res.redirect('/job/' + jobId);
  },
  delete(req, res) {
    const jobId = req.params.id;
    
    Job.delete(jobId);

    return res.redirect('/');
  }
};