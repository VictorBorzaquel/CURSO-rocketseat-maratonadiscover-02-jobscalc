module.exports = (number) => {
  const currentCurrency = "pt-br";
  switch (currentCurrency) {
    case "pt-br":
      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(number);
    case "en":
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(number);
  }
}