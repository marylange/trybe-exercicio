const renderRates = (currency,rates) => {
  const list = document.querySelector('#currency-list');
  const li = document.createElement('li');
  li.innerText = `${currency}: ${rates}`;
  list.appendChild(li);
}

const handleRates = ({rates}) => {
  const ratesEntries = Object.entries(rates);
  ratesEntries.forEach(([currency, rates]) => {
    renderRates(currency,rates);
  })
}

const handleSearchEvent = () => {
  clearRatesList();
  const currencyInput = document.querySelector('#currency-input');
  // renderBase(currencyInput.value);
  fetchCurrency(currencyInput.value);
}


const setupHandlers = () => {
  const searchButton = document.querySelector('#search-button');
  searchButton.addEventListener('click', handleSearchEvent);
}

const clearRatesList = () => {
  const list = document.querySelector('#currency-list');
  list.innerHTML = '';
}

const renderBase = ({base}) => {
  const subtitle = document.getElementById('base');
  subtitle.innerText = `Valores referentes a 1 ${base}`
}







