const searchSubString = require('../wordSearch');

const examplePuzzle = [
  ['b', 'l', 'g', 'o', 'l', 'd', 's'],
  ['x', 'k', 'q', 'w', 'i', 'j', 'p'],
  ['a', 'n', 'w', 'k', 'k', 'p', 'n'],
  ['h', 'e', 'e', 'e', 'k', 'i', 'l'],
  ['q', 'e', 'k', 'a', 'y', 'q', 'a'],
  ['h', 'u', 'h', 'a', 'e', 'a', 'u'],
  ['k', 'q', 'j', 'c', 'c', 'm', 'r'],
];

// Level 1
test('', () => {
  expect(searchSubString(examplePuzzle, 'like')).toBeTruthy();
});
test('', () => {
  expect(searchSubString(examplePuzzle, 'gold')).toBeTruthy();
});
test('', () => {
  expect(searchSubString(examplePuzzle, 'queen')).toBeTruthy();
});
test('', () => {
  expect(searchSubString(examplePuzzle, 'dog')).toBeFalsy();
});

// Level 2
test('', () => {
  expect(searchSubString(examplePuzzle, 'cake')).toBeTruthy();
});
test('', () => {
  expect(searchSubString(examplePuzzle, 'mama')).toBe(false);
});
