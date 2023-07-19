const removeSymbol = require('./removeSymbol');

test('should first', () => {
  const string = 'Большое и интересное сообщение';
  const symbol = 'о';
  const result = 'Бльше и интересне сбщение';
  expect(removeSymbol(string, symbol)).toBe(result);
});

test('should first', () => {
  const string = 'Hello world!';
  const symbol = 'я';
  const result = 'Hello world!';
  expect(removeSymbol(string, symbol)).toBe(result);
});

test('should first', () => {
  const string = 'А роза азора';
  const symbol = 'А';
  const result = ' роза азора';
  expect(removeSymbol(string, symbol)).toBe(result);
});
