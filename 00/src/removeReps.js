// Вам нужно написать функцию которая принимает в кач-ве аргумента массива чисел и
// удаляет все повторяющиеся значения

function removeReps(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (newArray.indexOf(array[i]) === -1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const numbers = [1, 2, 1, 3, 4, 3, 5, 6, 5, 5, 5];
module.exports = removeReps;
// [1,2,4,5,6,8,9,11]
