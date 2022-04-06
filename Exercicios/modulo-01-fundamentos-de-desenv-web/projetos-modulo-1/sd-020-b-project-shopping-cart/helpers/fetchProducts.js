const fetchProducts = async (computador) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${computador}`;
  const resultAPI = await fetch(url);
  return resultAPI.json();
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
