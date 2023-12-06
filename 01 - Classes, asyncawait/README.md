# Frontend bootcamp Day 01

Introduction to JavaScript classes, async/await.

## Table of Contents

- [Frontend bootcamp Day 01](#frontend-bootcamp-day-01)
  - [Table of Contents](#table-of-contents)
  - [Tasks](#tasks)
    - [Exercise 1. classes.js](#exercise-1-classesjs)
    - [Exercise 2. hard\_classes.js](#exercise-2-hard_classesjs)
    - [Exercise 3. fsSimple.js](#exercise-3-fssimplejs)
    - [Exercise 4. fsHard.js](#exercise-4-fshardjs)
  - [Project status](#project-status)
  - [Contacts](#contacts)

## Tasks

### Exercise 1. [classes.js](./src/chapter_1/classes.js)

Using:

- Inheritance of classes
- Methods and properties
  - Static methods and properties
  - Public and private fields

You need to describe the class Employee \
![image](https://user-images.githubusercontent.com/48245816/170902240-ab540276-e2b6-450f-ac32-d11ced7580ea.png)

### Exercise 2. [hard_classes.js](./src/chapter_1/hard_classes.js)

In continuation of the last task, you need to create `5 new classes`:

![Hard_classes_schema](https://user-images.githubusercontent.com/48245816/179379840-933b409d-d8e6-421e-b9ea-3e74a52eef60.png)

### Exercise 3. [fsSimple.js](./src/chapter_2/fsSimple.js)

Using:

- Asynchronous
- Event loop
- Callback-hell
- Promises
- Async await
- File system

You need to read the data from the file1.txt file, after reading the data obtained, you need to write to the file2.txt file you need to implement this in 3 different ways, for each method its own function:

- ```readAndWriteCallbackHell()``` - In this function, you should only use the transfer of colllbek to the Asynchronous function.

- ```readAndWritePromises()``` - In this function, you should use proteins and then.

- ```readAndWriteAsyncAwait()``` - In this function, you can use async await.

### Exercise 4. [fsHard.js](./src/chapter_2/fsHard.js)

When the user uploads the page - data from the server enters the client asynchronously and unevenly.
Let's simulate this behavior using the file system of your project.You have to write Progressbar, applicable not to a statically given time, but to the size of "uploaded" files.Based on the obtained file sizes, implement your Progressbar.

Your progressbar will be filled to the total size of all available files in [folder](./src/chapter_2/files/fsHard).

If you have a file with a size of 5kb with the total size of all files - 10 KB, then your download strip after processing such a file should be filled by 50% (100% * (5kb / 10kb)).
Make a loading strip (progressbar) in **terminal console**.Not in a browser!It should increase with each new downloaded file.

## Project status

Project is: completed

## Contacts

Created by [@sashauly](https://t.me/sashauly) - feel free to contact me!
