const fibo = require('../fibonachi');

test('should first', () => {
  expect(fibo(0)).toBe(0);
});
test('should first', () => {
  expect(fibo(1)).toBe(1);
});
test('should first', () => {
  expect(fibo(10)).toBe(55);
});
