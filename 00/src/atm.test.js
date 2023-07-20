const atm = require('./atm');

test('normal test', () => {
  expect(atm(8350)).toStrictEqual({
    5000: 1,
    2000: 1,
    1000: 1,
    200: 1,
    100: 1,
    50: 1,
  });
});

test('sum <= 0', () => {
  expect(atm(0)).toBe('Incorrect value');
});

test('atm cannot give out this amount', () => {
  expect(atm(2570)).toBe('Incorrect value');
});

test('too much money', () => {
  expect(atm(100050)).toBe('Limit exceeded');
});
