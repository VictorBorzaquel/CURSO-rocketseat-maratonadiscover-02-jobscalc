data = [
  {
    id: 1,
    name: "Pizzaria Guloso",
    "daily-hours": "5",
    "total-hours": "1",
    created_at: 1629229533263,
    budget: 4000,
  },
  {
    id: 2,
    name: "OneTwo Project",
    "daily-hours": "2",
    "total-hours": "24",
    created_at: 1629229544733,
    budget: 4000,
  },
];

module.exports = {
  get: () => data,
  add(job) { data.push(job) },
  set(newData) { data = newData },
  delete(id) { data = data.filter(job => Number(job.id) !== Number(id));
}
}