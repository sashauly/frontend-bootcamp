const removeReps = require('./removeReps');

test('should first', () => {
  const data = [1, 1, 2, 4, 5, 6, 6, 8, 9, 11];
  const result = [1, 2, 4, 5, 6, 8, 9, 11];
  expect(removeReps(data)).toStrictEqual(result);
});
test('', () => {
  const data = [1, 1, 1, 1];
  const result = [1];
  expect(removeReps(data)).toStrictEqual(result);
});
test('', () => {
  const data = [1, 2, 3, 4, 5, 6];
  const result = [1, 2, 3, 4, 5, 6];
  expect(removeReps(data)).toStrictEqual(result);
});
