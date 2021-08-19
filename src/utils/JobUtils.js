module.exports = {
  remainingDays(job) {
    const convertMsInDays = (milliseconds) =>
      Math.floor(milliseconds / (1000 * 60 * 60 * 24));

    const daysRemaining = Number(
      (job["total-hours"] / job["daily-hours"]).toFixed()
    );
    const dateCreated = new Date(job["created_at"]);

    const dayCreated = dateCreated.getDate();
    const daysToDoJob = dayCreated + daysRemaining;

    const dueDateInMs = dateCreated.setDate(daysToDoJob);
    const remainingDaysInMs = dueDateInMs - Date.now();
    const remainingDays = convertMsInDays(remainingDaysInMs);

    return remainingDays;
  },
  calculateBudget: (job, valueHour) => valueHour * job["total-hours"],
}