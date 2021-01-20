const { randBetween } = require('../correlation');

test('should return only numbers between given extremes', () => {
  for (let i = 0; i < 10; i++) {
    expect(randBetween(i, 2 * i + 1)).toBeGreaterThanOrEqual(i);
    expect(randBetween(i, 2 * i + 1)).toBeLessThanOrEqual(2 * i + 1);
  }
});
