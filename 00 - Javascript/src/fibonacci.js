// Напишите функицю, которая принимает индекс числа из ряда Фибоначчи и возвращает его значение.
// Предположим, что ряд Фибоначчи начинается с 0 индекса.

function fibo(index) {
  if (index === 0 || index === 1) {
    return 1;
  }
  return fibo(index - 1) + fibo(index - 2);
}

module.exports = fibo;

// const count = 10;
// const fibArray = [];
// for (let i = 0; i < count; i += 1) {
//   fibArray.push(fibo(i));
// }
// console.log(fibArray);
// console.log(fibo(5)); // Вернет 8
