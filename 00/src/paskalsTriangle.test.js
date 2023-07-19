const paskalsTriangle = require('./paskalsTriangle');

test('should first', () => {
  expect(paskalsTriangle(2, 3)).toBe(3);
});

test('should first', () => {
  expect(paskalsTriangle(4, 5)).toBe(5);
});

test('should first', () => {
  expect(paskalsTriangle(1, 1)).toBe(1);
});
