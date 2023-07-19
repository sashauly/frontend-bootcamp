# Lesson 1

## Table of Contents

- [Lesson 1](#lesson-1)
  - [Table of Contents](#table-of-contents)
  - [Exercise 1. counter()](#exercise-1-counter)
  - [Exercise 2. calculator()](#exercise-2-calculator)
  - [Exercise 3. paskalsTriangle()](#exercise-3-paskalstriangle)
  - [Exercise 4. fibonachi()](#exercise-4-fibonachi)
  - [Exercise 5. removeReps()](#exercise-5-removereps)
  - [Exercise 6. removeSymbol()](#exercise-6-removesymbol)
  - [Exercise 7. atm()](#exercise-7-atm)
  - [Exercise 8. wordSearch()](#exercise-8-wordsearch)
  - [Exercise 9. sudoku()](#exercise-9-sudoku)

## Exercise 1. counter()

Using:

- Data types
- Variable declaration and scope
- Functions
- Closures

Write a counter function that, each time it is called, will return a number 3 more than the last one. You cannot use variables declared with var!

```javascript
function counter() {}

counter(); // The function will return 0
counter(); // The function will return 3
counter(); // The function will return 6
counter(); // The function will return 9

```

[Stubs for functions](./src/counter.js).

## Exercise 2. calculator()

Using:

- Bubbling
- Currying

You need to describe a number of functions that can take an optional callback argument. If there is such an argument, then pass the number n to this callback, otherwise just return the number n.

For example, the one function can take the sum function as an argument, then the return will be sum(1). If nothing is passed to the function, then it will simply return 1.
You also need to write 4 functions of basic arithmetic operators that take the first number as an argument, and return a function that takes the second number as an argument and returns their sum/difference/frequent/product.

| Input                          | Output |
| ------------------------------ | :----: |
| four()                         |   4    |
| five(mult(three()))            |   15   |
| one(mult(three(plus(four())))) |   7    |

[Stubs for functions](./src/calculator.js).

## Exercise 3. paskalsTriangle()

Using:

- Recursion

Write a function that will take the coordinates of the number in the Pascal triangle and will return the value by the coordinates.
Before completing the task, it is necessary to study the triangle of Pascal in more detail.
Initial coordinates:  [0; 0].
Perhaps recursion will help here.

| Introduction          | Conclusion |
| --------------------- | :--------: |
| paskalsTriangle(2, 3) |     3      |
| paskalsTriangle(4,5)  |     5      |
| paskalsTriangle(1,1)  |     1      |

You can find the blanks for functions by [link](./src/paskalsTriangle.js).

## Exercise 4. fibonachi()

Write a function that accepts the number from a series of Fibonacci and returns its value \
Suppose that a series of Fibonacci starts with 0 index \
Suppose that a number of Fibonacci is represented as 0,1,1,2,3,5,8,13 ......

| Introduction | Conclusion |
| ------------ | :--------: |
| fibo(5)      |     8      |
| fibo(1)      |     1      |
| fibo(8)      |     34     |
| fibo(21)     |   17711    |

You can find the blanks for functions by [link](./src/fibonachi.js).

## Exercise 5. removeReps()

Using:

- Comparison operators
- Conditional operators
- Logic operators
- Cycles

You need to write a function that accepts an array of numbers as an argument and deleys all repeated values.
Write a function with a mortgage of 2 different cycles.

```javascript
function removeReps(array) {}

removeReps([1, 1, 2, 4, 5, 6, 6, 8, 9, 11]); // Conclusion [1,2,4,5,6,8,9,11]
```

| Introduction                                |     Conclusion     |
| ------------------------------------------- | :----------------: |
| removeReps([1, 1, 2, 4, 5, 6, 6, 8, 9, 11]) | [1,2,4,5,6,8,9,11] |
| removeReps([1,1,1,1])                       |        [1]         |
| removeReps([1,2,3,4,5,6])                   |   [1,2,3,4,5,6]    |

You can find the blanks for functions by [link](./src/removeReps.js).

## Exercise 6. removeSymbol()

Using:

- methods of arrays, lines and objects

Write a function that takes two lines at the entrance - a message (a regular line with text) and a symbol that must be removed from this message.
Be sure to use the methods and cycles that you have studied.

| Introduction                                        |        Conclusion         |
| --------------------------------------------------- | :-----------------------: |
| removeSymbol("Большое и интересное сообщение", "о") | Бльше и интересне сбщение |
| removeSymbol("Hello world!", "z")                   |       Hello world!        |
| removeSymbol("А роза азора", "А")                   |        роза азора         |

You can find the blanks for functions by [link](./src/removeSymbol.js)

## Exercise 7. atm()

Write a function that describes the basic behavior of an ATM that accepts the number to the input and returns the object in format {nominal_kurura: quantity_Muur}.\
Working conditions of the function:

`-` If an ATM cannot give out this amount, then an error 'Incorrect Value' is displayed

`-` bills should be in the optimal way (instead of 5 bills with a face value of 1000, one 5000 is issued)

`-` At a time, the ATM can issue no more than 20 bills, if the bills are not enough for issuing, then the 'Limit Exseeded' error is displayed

```javascript
function atm(sum) {
  const banknots = [5000, 2000, 1000, 500, 200, 100, 50];
}
// Example of the function of the function:
atm(8350); // {5000 : 1, 2000 : 1, 1000 : 1, 200 : 1, 100 : 1, 50 : 1 }
atm(2570); // Incorrect value
atm(100050); // limit exceeded
```

| Introduction |                        Conclusion                         |
| ------------ | :-------------------------------------------------------: |
| atm(8350)    | {5000 : 1, 2000 : 1, 1000 : 1, 200 : 1, 100 : 1, 50 : 1 } |
| atm(2570)    |                      Incorrect value                      |
| atm(100050)  |                      limit exceeded                       |

You can find the blanks for functions by [link](./src/atm.js)

## Exercise 8. wordSearch()

In this task, it will be necessary to write an algorithm for the search, which will say whether it is possible to find the input word in the puzzle of the search for words, which is also fed to the input.
This task has two levels of complexity:

`-` the first level includes exclusively a vertical search and horizontally/

`-` the second level additionally includes a diagonal search/

`-` words can be recorded from left to right and vice versa

An example of a puzzle and the output result can be found by [link](./src/wordSearch.js)

## Exercise 9. sudoku()

You need to write a function to solve Sudoku.The function accepts one argument - a line in which there are at the site of the missed numbers -.
The function should return the line in which all values will be filled.

We will play Sudoku in a real puzzle, paying attention to how we are approaching the solution of the task.

`-what strategies do we accept and why?

`-` How do we choose, where to start?

`-` How do we find out when you really should put the number in the cage?

`-` What do we do when we do not finally know how to fill the rest of the cells?

Be sure to implement the `Prettyboard` method, which takes a board written in a line and returns a formatted version more familiar to our visual perception.For example:

```logs
1 - 5 8 - 2 - - -
- 9 - - 7 6 4 - 5
2 - - 4 - - 8 1 9
- 1 9 - - 7 3 - 6
7 6 2 - 8 3 - 9 -
- - - - 6 1 - 5 -
- - 7 6 - - - 3 -
4 3 - - 2 - 5 - 1
6 - - 3 - 8 9 - -
```

| Introduction                                                                                |                                                                 Conclusion                                                                  |
| ------------------------------------------------------------------------------------------- | :-----------------------------------------------------------------------------------------------------------------------------------------: |
| sudoku("53--7----6--195----98----6-8---6---34--8-3--17---2---6-6----28----419--5----8--79") | ![Screenshot 2022-04-18 at 20 36 18](https://user-images.githubusercontent.com/46561905/163840787-2a2248b5-2cb4-43e3-9837-cc9a4564db9b.png) |

[In the task file](./src/Sudoku.js) test data for your function is presented, they have 3rd levels:

`-` five puzzles can be resolved using basic logic

`-` five require a little more advanced logic

`-` five require your resolver ability to guess and cut it off if you come to a dead end
