require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  test('fecthProducts', async () => {
    const result = await fetchProducts('computador');
    expect(result).not.toBe(null);
  });
});
