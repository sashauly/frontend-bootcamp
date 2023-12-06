# Frontend boot camp Day07

Introduction to React memoization, public API.

## Contents

- [Frontend boot camp Day07](#frontend-boot-camp-day07)
  - [Contents](#contents)
  - [Screenshot](#screenshot)
  - [Description](#description)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Tasks](#tasks)
    - [Exercise 1](#exercise-1)
    - [Exercise 2](#exercise-2)
    - [Exercise 3](#exercise-3)
  - [Project status](#project-status)
  - [Contacts](#contacts)

## Screenshot

![Alt text](./misc/images/image.png)

## Description

In this chapter, we will consider the concept of `memoization`, as well as get acquainted with the `Public API`. A good example of the Public API is [the service](https://pokepi.co) with which you can get data on any Pokemon.

## Technologies

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [React](https://reactjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [Pokemon API](https://pokeapi.co/api/v2/)
- [Vite](https://vitejs.dev/)

## Setup

- `npm i`
- `npm run dev`

## Tasks

### Exercise 1

You need to write a fullstack SPA application, but instead of your own backend you need to use [Public API](https://pokeapi.co/api/v2/).

The application will be a simple list of Pokemon with the ability to add and remove them from the list.At the very top of the page, a search line will be located where you can enter the Pokemon name, after which a request to the `Public API` will be sent.

If there is such a Pokemon, it is added to the beginning of the list, otherwise the message `Pokemon is not found`.
The list is the transfer of all Pokemon (if you send the `GET` request to the address <https://pokeapi.co/api/v2/pokemon>, then, as an answer, you will receive a list of the first 20 Pokemon, which indicates the name and link by which you can get more detailed information).

When displaying each Pokemon, you need to send a `GET` request for more detailed information about it. In the component of Pokemon, you need to display a name, number and the names of all available forms, as well as a photo of Pokemon (`pokemonApiResponse.sprites.font_default`).

Next to each element of the list, a cross is displayed to remove Pokemon from the list.

![Exercise_1_schema](https://user-images.githubusercontent.com/48245816/171485125-5a28d25a-5caf-4cc5-84c5-f90b4000b9f0.png)

### Exercise 2

Now you need to optimize your application. Get rid of extra renders with hooks `useCallback` / `useMemo` and `React.memo()`.

### Exercise 3

You already know how you can stylize React components. In this task, we invite you a little fantasize and try to realize a dream design!

## Project status

Project is: **completed**

## Contacts

Created by [@sashauly](https://t.me/sashauly) - feel free to contact me!
