require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  test('fecthItem', async () => {
    const result = await fetchItem('MLB2025368730');
    console.log(result);
    expect(result).not.toBe(null);
  });
});
