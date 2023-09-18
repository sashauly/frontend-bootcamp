const fibo = require('../fibonacci');

test('should first', () => {
  expect(fibo(0)).toBe(1);
});
test('should first', () => {
  expect(fibo(1)).toBe(1);
});
test('should first', () => {
  expect(fibo(10)).toBe(89);
});
