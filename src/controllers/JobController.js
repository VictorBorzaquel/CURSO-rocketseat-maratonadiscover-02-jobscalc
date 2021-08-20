const Job = require('../module/Job');
const JobUtils = require('../utils/JobUtils');
const Profile = require('../module/Profile');
const ConvertToCurrency = require('../utils/ConvertToCurrency');

module.exports = {
  async create(req, res) {
    const jobs = await Job.get();

    return res.render("job", { jobs });
  },
  async save(req, res) {
    await Job.create({
      name: req.body.name,
      "daily-hours": req.body["daily-hours"],
      "total-hours": req.body["total-hours"],
      created_at: Date.now(),
    });

    return res.redirect("/");
  },
  async show(req, res) {
    const jobs = await Job.get();
    const profile = await Profile.get();

    const jobId = req.params.id;
    const job = jobs.find(job => Number(job.id) === Number(jobId));
    if (!job) return res.send(404);

    jobBudget = JobUtils.calculateBudget(job, profile['value-hour']);

    return res.render("job-edit", { job, jobBudget, ConvertToCurrency });
  },
  async update(req, res) {
    const jobId = req.params.id;

    const updatedJob = {
      name: req.body.name,
      "total-hours": req.body["total-hours"],
      "daily-hours": req.body["daily-hours"]
    };

    await Job.update(updatedJob, jobId);

    res.redirect('/job/' + jobId);
  },
  delete(req, res) {
    const jobId = req.params.id;

    Job.delete(jobId);

    return res.redirect('/');
  }
};