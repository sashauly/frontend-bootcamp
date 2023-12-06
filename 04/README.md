# Frontend bootcamp Day 04

## Table of Contents

- [Frontend bootcamp Day 04](#frontend-bootcamp-day-04)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Tasks](#tasks)
    - [Exercise 1](#exercise-1)
    - [Exercise 2](#exercise-2)
    - [Small note](#small-note)
  - [Project status](#project-status)
  - [Contacts](#contacts)

## Description

In this chapter, we will consider creating a server using the `Express` framework. We will connect the database to the server, consider the architectural approach of `REST API` and learn to work with `Postman` (I used [HTTPie](https://httpie.io/) as a client).

## Technologies

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [yarn](https://yarnpkg.com/en/)
- [Sequelize](https://sequelize.org/)
- [Sequelize - CLI](https://sequelize.org/master/manual/cli.html)
- [PostgreSQL](https://www.postgresql.org/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [REST API](https://en.wikipedia.org/wiki/Representational_state_transfer)

## Setup

- `corepack enable`
- `yarn install`
- Setup your postgres config in [src/chapter_2/config/config.json](./src/config/config.json)
- `yarn run dbr`
- `yarn start`

## Tasks

### Exercise 1

Imagine that the customer came to you with a request to develop an application for internal use of the restaurant employees.At the first stage, you need to create a database for the future application.
![RestaurantDB](https://user-images.githubusercontent.com/48245816/171473967-cb0bfafd-d596-4695-88db-abff2951c824.jpg)
When completing the task, install the packages `sequelize`, `sequelize-cli`. Initialize the Sequelize team `yarn sequelize-cli init`, After that, you should create 4 folders: `/config`, `/seeds`, `/migrations`, `/models`.Use the team to create the base `yarn sequelize-cli db:create` . Be sure to add to the package.json the command: `"dbr": "yarn sequelize db:drop && yarn sequelize db:create && yarn sequelize db:migrate && yarn sequelize db:seed:all"`

### Exercise 2

Now you need to create a service by connecting your database from the last assignment and a small server on Express that you will write.
The following endpoints should be processed:

- `GET /menu` - the client can see the menu and everything that includes it.
- `POST /order` - create an order.
- `PUT /order/id` - change the order.
- `DELETE /order/id` - Close the order (for closing, we advise you not to delete the record from the table, but simply change one of the fields from True on FALSE).
- `GET /order` - get all current orders from the restaurant.
- `POST /waiter` - the ability to add a new employee.

### Small note

I wrote consistent instructions for completing the task, you can see it [here](./src/readme.md)

## Project status

Project is: **completed**

## Contacts

Created by [@sashauly](https://t.me/sashauly) - feel free to contact me!
