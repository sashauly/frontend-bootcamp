// Вам нужно написать функцию которая принимает в качестве аргумента массив чисел и удаляет все повторяющиеся значения.

function removeReps(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (newArray.indexOf(array[i]) === -1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

module.exports = removeReps;

// console.log(removeReps([1, 1, 2, 4, 5, 6, 6, 8, 9, 11])); // [1, 2, 4, 5, 6, 8, 9, 11]
