//  В этой задаче нужно будет написать алгоритм поиска, который скажет,
// можно ли найти входное слово в головоломке поиска слов, которая тоже подается функции на вход.
// Данная задача имеет два уровня сложности :
// - Первый уровень включает в себя исключительно поиск по вертикали и по горизонтали
// - Второй уровень дополнительно включает в себя поиск по диагонали
// - Слова могут быть записаны слева направо и наоборот.

function searchSubString(puzzle, word) {
  const numRows = puzzle.length;
  const numCols = puzzle[0].length;

  const upperCaseWord = word.toUpperCase();

  // Horizontal
  for (let row = 0; row < numRows; row += 1) {
    const rowString = puzzle[row].join('').toUpperCase();
    const reversedRow = rowString.split('').reverse().join('');
    if (
      // eslint-disable-next-line operator-linebreak
      rowString.includes(upperCaseWord) ||
      reversedRow.includes(upperCaseWord)
    ) {
      return true;
    }
  }
  // Vertical
  for (let col = 0; col < numCols; col += 1) {
    let colString = '';
    for (let row = 0; row < numRows; row += 1) {
      colString += puzzle[row][col].toUpperCase();
    }
    const reversedCol = colString.split('').reverse().join('');
    if (
      colString.includes(upperCaseWord) ||
      reversedCol.includes(upperCaseWord)
    ) {
      return true;
    }
  }
  // Diagonal
  for (let row = 0; row < numRows; row += 1) {
    for (let col = 0; col < numCols; col += 1) {
      let diagonalString = '';
      let i = row;
      let j = col;
      while (i < numRows && j < numCols) {
        diagonalString += puzzle[i][j].toUpperCase();
        i += 1;
        j += 1;
      }
      const reversedDiag = diagonalString.split('').reverse().join('');
      if (
        diagonalString.includes(upperCaseWord) ||
        reversedDiag.includes(upperCaseWord)
      ) {
        return true;
      }
    }
  }
  return false;
}

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
console.log(searchSubString(examplePuzzle, 'like')); // true
console.log(searchSubString(examplePuzzle, 'gold')); // true
console.log(searchSubString(examplePuzzle, 'queen')); // true
console.log(searchSubString(examplePuzzle, 'dog')); // false

// Level 2
console.log(searchSubString(examplePuzzle, 'cake')); // true
console.log(searchSubString(examplePuzzle, 'mama')); // false
