let data = {
  name: "Victor Borzaquel",
  avatar: "https://github.com/VictorBorzaquel.png",
  "monthly-budget": 3000,
  "hours-per-day": 10,
  "days-per-week": 6,
  "vacation-per-year": 2,
  "value-hour": 50,
};

module.exports = {
  get: () => data,
  update(newData) { data = { ...data, ...newData } },
  set(newData) { data = newData },
}