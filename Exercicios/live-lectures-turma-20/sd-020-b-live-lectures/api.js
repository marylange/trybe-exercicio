const fetchCurrency = async (currency) => {
  const url = `https://api.exchangerate.host/latest?base=${currency}`;
  const result = await fetch(url);
  // console.log(result);
  const data = await result.json();
  handleRates(data);
  renderBase(data);
  console.log(data)
}

window.onload = () => {
  // fetchCurrency();
  setupHandlers();
  fetchCurrency();
}