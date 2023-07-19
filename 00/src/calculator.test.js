const {
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  mult,
  divide,
} = require('./calculator');

test('', () => {
  expect(seven(plus(eight()))).toBe(15);
});
test('', () => {
  expect(two(minus(five()))).toBe(-3);
});
test('', () => {
  expect(one(mult(four()))).toBe(4);
});
test('', () => {
  expect(nine(divide(six()))).toBe(1.5);
});

test('should first', () => {
  expect(one(mult(three(plus(four()))))).toBe(7);
});
