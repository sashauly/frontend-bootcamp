// Вам нужно написать функция для решения Судоку.
// Функция принимает один аргумент - строку, в ней на месте пропущенных цифр стоят -.
// Функция должна вернуть строку, в которой все значения будут заполнены.

// Давайте сыграем в настоящую головоломку Судоку,
// обращая внимание на то, как мы приближаемся к решению поставленной задачи.
// - Какие стратегии мы принимаем и почему?
// - Как мы выбираем, с чего начать?
// - Как мы узнаем, когда действительно следует поставить число в клетку?
// - Что мы делаем, когда мы окончательно не знаем, как заполнить остальные клетки?
// Размышляя о нашей человеческой стратегии, важно понимать, что иногда стратегии,
// которые работают для людей, будет трудно реализовать на компьютере.
// Однако верно и обратное: стратегии компьютера могут быть не всегда удобны для людей,
// потому что нам придется писать слишком много текста,
// использовать слишком много листов бумаги или помнить много информации,
// которую в состоянии запомнить компьютер, но не человек.

// Обязательно напишите метод `prettyBoard`, который берет доску,
// записанную в строчку и возвращает отформатированный вариант,
// более привычный для нашего визуального восприятия. Например:

// ```
// 1 - 5 8 - 2 - - -
// - 9 - - 7 6 4 - 5
// 2 - - 4 - - 8 1 9
// - 1 9 - - 7 3 - 6
// 7 6 2 - 8 3 - 9 -
// - - - - 6 1 - 5 -
// - - 7 6 - - - 3 -
// 4 3 - - 2 - 5 - 1
// 6 - - 3 - 8 9 - -
// ```;

function prettyBoard(board) {
  const boardString = board.flat().join('');
  const size = 9;
  const arr = [];
  for (let i = 0; i < boardString.length; i += size) {
    const row = boardString.slice(i, i + size).split('');
    const formatRow = row.map((cell, index) => {
      if ((index + 1) % 3 === 0 && index !== size - 1) {
        return `${cell} |`;
      }
      return cell;
    });
    arr.push(formatRow.join(' '));
    if ((i + size) % (size * 3) === 0 && i !== boardString.length - size) {
      arr.push('------+-------+------');
    }
  }
  console.log(arr.join('\n'));
}

function sudoku(string) {
  const size = 9;
  const boxSize = 3;
  const board = [];
  for (let i = 0; i < string.length; i += size) {
    board.push(string.slice(i, i + size).split(''));
  }
  const findEmpty = (board) => {
    for (let r = 0; r < size; r += 1) {
      for (let c = 0; c < size; c += 1) {
        if (board[r][c] === '-') {
          return [r, c];
        }
      }
    }
    return null;
  };

  const validate = (num, pos, board) => {
    const [r, c] = pos;

    // Check rows
    for (let i = 0; i < size; i += 1) {
      if (board[i][c] === num && i !== r) {
        return false;
      }
    }

    // Check cols
    for (let i = 0; i < size; i += 1) {
      if (board[r][i] === num && i !== c) {
        return false;
      }
    }

    // Check box
    const boxRow = Math.floor(r / boxSize) * boxSize;
    const boxCol = Math.floor(c / boxSize) * boxSize;

    for (let i = boxRow; i < boxRow + boxSize; i += 1) {
      for (let j = boxCol; j < boxCol + boxSize; j += 1) {
        if (board[i][j] === num && i !== r && j !== c) {
          return false;
        }
      }
    }
    return true;
  };

  const solve = () => {
    const currPos = findEmpty(board);
    if (currPos === null) {
      return true;
    }
    for (let i = 1; i < size + 1; i += 1) {
      const currNum = i.toString();
      const isValid = validate(currNum, currPos, board);

      if (isValid) {
        const [x, y] = currPos;
        board[x][y] = currNum;

        if (solve()) {
          return true;
        }

        board[x][y] = '-';
      }
    }
    return false;
  };
  solve();
  return board.flat().join('');
}

module.exports = sudoku;
