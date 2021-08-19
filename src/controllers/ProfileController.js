const Profile = require('../module/Profile');
const ConvertToCurrency = require('../utils/ConvertToCurrency');

module.exports = {
  index(req, res) {
    return res.render("profile", { profile: Profile.get(), ConvertToCurrency });
  },
  update(req, res) {
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

    Profile.update({ ...data, "value-hour": valueHour });

    return res.redirect('/profile');
  },
}