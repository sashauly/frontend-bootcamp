const paskalsTriangle = require('../pascalsTriangle');

test('should first', () => {
  expect(paskalsTriangle(3, 2)).toBe(3);
});

test('should first', () => {
  expect(paskalsTriangle(4, 5)).toBe(16);
});

test('should first', () => {
  expect(paskalsTriangle(1, 1)).toBe(1);
});
