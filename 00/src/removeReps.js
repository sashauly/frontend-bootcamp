// Вам нужно написать функцию которая принимает в кач-ве аргумента массива чисел и
// удаляет все повторяющиеся значения

function removeRepsOne(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (newArray.indexOf(array[i]) === -1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// function removeRepsTwo(array) {
//   const newArray = [];
//   for (num of array) {
//     if (newArray.indexOf(num) === -1) {
//       newArray.push(num);
//     }
//   }
//   return newArray;
// }

const numbers = [1, 2, 1, 3, 4, 3, 5, 6, 5, 5, 5];
const resultOne = removeRepsOne(numbers);
console.log(resultOne); // [1,2,4,5,6,8,9,11]
// const result_two = removeRepsTwo(numbers);
// console.log(resultTwo);
