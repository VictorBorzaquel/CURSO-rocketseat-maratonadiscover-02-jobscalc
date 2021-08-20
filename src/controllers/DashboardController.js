const Job = require('../module/Job');
const Profile = require('../module/Profile');
const JobUtils = require('../utils/JobUtils');
const ConvertToCurrency = require('../utils/ConvertToCurrency');

module.exports = {
  async index(req, res) {
    const jobs = await Job.get();
    const profile = await Profile.get();

    const statusCount = {
      total: jobs.length,
      progress: 0,
      done: 0,
    }
    
    let jobTotalHours = 0

    const updatedJobs = jobs.map((job) => {
      const remaining = JobUtils.remainingDays(job);

      const budget = JobUtils.calculateBudget(job, profile['value-hour']);

      const status = remaining <= 0 ? "done" : "progress";
      ++statusCount[status];

      if (status === "progress") jobTotalHours += Number(job["daily-hours"]);
      
      return { ...job, remaining, status, budget };
    });

    const freeHours = profile['hours-per-day'] - jobTotalHours;

    return res.render("index", { 
      jobs: updatedJobs,
      profile, 
      ConvertToCurrency, 
      statusCount, 
      freeHours,
    });
  }
}