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
} = require('../calculator');

test('', () => {
  expect(one()).toBe(1);
});
test('', () => {
  expect(two()).toBe(2);
});
test('', () => {
  expect(three()).toBe(3);
});
test('', () => {
  expect(four()).toBe(4);
});
test('', () => {
  expect(five()).toBe(5);
});
test('', () => {
  expect(six()).toBe(6);
});
test('', () => {
  expect(seven()).toBe(7);
});
test('', () => {
  expect(eight()).toBe(8);
});
test('', () => {
  expect(nine()).toBe(9);
});

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
test('should first', () => {
  expect(four(plus(five(plus(six(plus(eight(plus(one()))))))))).toBe(24);
});
