// Напишите функцию counter, которая при каждом вызове будет возвращать числа на 3 больше,
// чем в прошлый. Нельзя использовать переменные, объявленные через var!

function makeCounter() {
  let count = -3;

  return () => {
    count += 3;
    return count;
  };
}

const counter = makeCounter();

module.exports = counter;
