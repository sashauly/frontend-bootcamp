# Lesson 5

## Table of Contents

- [Lesson 5](#lesson-5)
  - [Table of Contents](#table-of-contents)
  - [Exercise 1](#exercise-1)
  - [Exercise 2](#exercise-2)

## Exercise 1

Imagine that the customer came to you with a request to develop an application for internal use of the restaurant employees.At the first stage, you need to create a database for the future application. [Customer attached TK](./src/chapter_2/Exercise_1.md). Recommendations for completing the assignment are presented in the TK.

## Exercise 2

Now you need to create a service by connecting your database from the last assignment and a small server on Express that you will write.
The following endpoints: \ should be processed
`-` GET /menu - the client can see the menu and everything that includes it.\
`-` POST /order - create an order.\
`-` PUT /order/id - change the order.\
`-` DELETE /order/id - Close the order (for closing, we advise you not to delete the record from the table, but simply change one of the fields from True on FALSE).\
`-` GET /order - get all current orders from the restaurant.\
`-` POST /waiter - the ability to add a new employee.

[Install Postman](https://www.postman.com)

[Postman installation script on Linux x64](./misc/install_postman.sh)
