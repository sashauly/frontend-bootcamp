# Frontend bootcamp Day 08

Introduction to React Context API, local storage and redux.

## Table of Contents

- [Frontend bootcamp Day 08](#frontend-bootcamp-day-08)
  - [Table of Contents](#table-of-contents)
  - [Technologies](#technologies)
  - [Description](#description)
  - [Setup](#setup)
  - [Tasks](#tasks)
    - [Exercise 1. React Context](#exercise-1-react-context)
    - [Exercise 2. localStorage](#exercise-2-localstorage)
    - [Exercise 3. Redux](#exercise-3-redux)
  - [Project status](#project-status)
  - [Contacts](#contacts)

## Technologies

- [React](https://reactjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [React Context API](https://ru.reactjs.org/docs/hooks-reference.html#usecontext)
- [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Session Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)
- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)

## Description

In this chapter, we will consider how to avoid the so-called `Props Drilling` and find out how and where you can store the state of our application.

## Setup

- `npm install`
- `npm run dev`

## Tasks

### Exercise 1. React Context

You are already ready to search for Pokemon - we offer to improve it! You need to make a dark and light mode for your application. A change in the topic should take place using `React Context`. In your CONTEXT, the field `Islight: boolean` (according to the default `true`) should be stored.Depending on the values in this field, your components should change/add CSS classes.
![Макет](./misc/images/Exercise_1_theme.jpg)

### Exercise 2. localStorage

Now let's make it so that, for each page update, the application does not send a request to receive a default list of 20 Pokemon.You need to comply with this request once and put the data in `localStorage`. Until they are there, you do not need to send a request again.

### Exercise 3. Redux

Now you have the opportunity to get rid of `props drilling`.You need to create a common stroke using the Redux library for the whole application.At the first render of your page, the data from the `localStorage` (if they are there) are placed in your stroke, if there is no data, then you need to send a request, and put the result in`localStorage` and in your stroke.Now all operations of adding/removing the Pokemon should be performed using special Actions and manipulations with a table.

## Project status

Project is: **completed**

## Contacts

Created by [@sashauly](https://t.me/sashauly) - feel free to contact me!
