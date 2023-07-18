# Lesson 2

## Table of Contents

- [Lesson 2](#lesson-2)
  - [Table of Contents](#table-of-contents)
  - [Exercise 1](#exercise-1)
  - [Exercise 2](#exercise-2)
  - [Exercise 3](#exercise-3)
  - [Exercise 4](#exercise-4)

## Exercise 1

Using:

- Inheritance of classes
- Methods and properties
  - Static methods and properties
  - Public and private fields

You need to describe the class Employee \
![image](https://user-images.githubusercontent.com/48245816/170902240-ab540276-e2b6-450f-ac32-d11ced7580ea.png)

[Processing blanks](./src/chapter_1/classes.js).

## Exercise 2

In continuation of the last task, you need to create [5 new classes](./src/chapter_1/Hard_classes.md)

[Processing blanks](./src/chapter_1/hard_classes.js).

## Exercise 3

Using:

- Asynchrony и JS
- Event loop
- Callback-hell
- Promises
- Async await
- File system

You need to read the data from the file1.txt file, after reading the data obtained, you need to write to the file2.txt file you need to implement this in 3 different ways, for each method its own function:
`-` readAndWriteCallbackHell() - In this function, you should only use the transfer of colllbek to the Assinchronous function. \
`-` readAndWritePromises() - In this function, you should use proteins and then. \
`-` readAndWriteAsyncAwait() - In this function, you can use async await.

Processing blanks You can find by [link](./src/chapter_2/fsSimple.js).

## Exercise 4

When the user uploads the page - data from the server enters the client asynchronously and unevenly.
Let's simulate this behavior using the file system of your project.You have to write Progressbar, applicable not to a statically given time, but to the size of "uploaded" files.Based on the obtained file sizes, implement your Progressbar.

Your progressbar will be filled to the total size of all available files in [folder](./src/chapter_2/files/fsHard).

If you have a file with a size of 5kb with the total size of all files - 10 KB, then your download strip after processing such a file should be filled by 50% (100% * (5kb / 10kb)).
Make a loading strip (progressbar) in ** terminal console **.Not in a browser!It should increase with each new downloaded file.
For comfort

Processing Blanks you can find by [link](./src/chapter_2/fsHard.js).
