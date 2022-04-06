const fetchItem = async (ItemID) => {
  const urlItem = `https://api.mercadolibre.com/items/${ItemID}`;
  const resultAPIItem = await fetch(urlItem);
  const dataItem = await resultAPIItem.json();
  return dataItem;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
