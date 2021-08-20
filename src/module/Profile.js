const Database = require('../db/config');

module.exports = {
  async get() {
    const db = await Database();
    const data = await db.get(`SELECT * FROM profile`);
    await db.close();

    return {
      name: data.name,
      avatar: data.avatar,
      "monthly-budget": data.monthly_budget,
      "hours-per-day": data.hours_per_day,
      "days-per-week": data.days_per_week,
      "vacation-per-year": data.vacation_per_year,
      "value-hour": data.value_hour
    }
  },
  async update(newData) { 
    const profile = await this.get();

    const updateData = {...profile, ...newData };

    const db = await Database();

    await db.run(`
      UPDATE profile SET
        name = "${updateData.name}",
        avatar = "${updateData.avatar}",
        "monthly_budget" = ${updateData["monthly-budget"]},
        "hours_per_day" = ${updateData["hours-per-day"]},
        "days_per_week" = ${updateData["days-per-week"]},
        "vacation_per_year" = ${updateData["vacation-per-year"]},
        "value_hour" = ${updateData["value-hour"]}
    `);

    await db.close();
  }
}