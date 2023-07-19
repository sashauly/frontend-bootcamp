// Напишите функицю, которая принимает индекс числа
// из ряда Фибоначчи и возвращает его значение
// Предположим, что ряд Фибоначчи начинается с 0 индекса

function fibo(index) {
  if (index <= 1) {
    return index;
  }
  return fibo(index - 1) + fibo(index - 2);
}

// const count = 10;
// const fibArray = [];
// for (let i = 0; i < count; i += 1) {
//   fibArray.push(fibo(i));
// }
module.exports = fibo;
