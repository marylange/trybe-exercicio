const getSavedCartItems = () => {
  const list = JSON.parse(localStorage.getItem('cartItems'));
  if (list === null) {
    return [];
  }
  
  return list;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
