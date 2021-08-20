const Profile = require('../module/Profile');
const ConvertToCurrency = require('../utils/ConvertToCurrency');

module.exports = {
  async index(req, res) {
    const profile = await Profile.get();

    return res.render("profile", { profile, ConvertToCurrency });
  },
  async update(req, res) {
    // req.body = Profile.data
    // req.body para pegar os dados
    const data = req.body;
    // Definir quantas semanas e meses tem no ano
    const weeksPerYear = 52;
    const monthPerYear = 12;
    // Remover as semanas de férias do ano e pegar quantas semanas tem no mes
    const workWeeksPerMonth = (weeksPerYear - data["vacation-per-year"]) / monthPerYear;
    // total de horas trabalhadas na semana
    const workWeekTotalHours = data["hours-per-day"] * data["days-per-week"];
    // horas trabalhadas no mes
    const workMothTotalHours = workWeeksPerMonth * workWeekTotalHours;
    // qual sera o valor da minha hora
    const valueHour = data["monthly-budget"] / workMothTotalHours;

    // const profile = await Profile.get();

    await Profile.update({ ...data, "value-hour": valueHour });

    return res.redirect('/profile');
  },
}