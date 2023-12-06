# Day 06 - Frontend boot camp

Introduction to React, JSX, Virtual DOM, React hooks.

## Contents

- [Day 06 - Frontend boot camp](#day-06---frontend-boot-camp)
  - [Contents](#contents)
  - [Screenshots](#screenshots)
  - [Description](#description)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Tasks](#tasks)
    - [Exercise 1](#exercise-1)
    - [Exercise 2](#exercise-2)
  - [Project status](#project-status)
  - [Contacts](#contacts)

## Screenshots

![Alt text](./misc/images/image.png)

## Description

In this chapter we will get acquainted with `React`. We will learn a little details about its origin and use scenarios, configure the basic set of tools on our local computer and in the process we will learn a little about how React works.

## Technologies

- [React](https://reactjs.org/)
- [Virtual DOM](https://en.wikipedia.org/wiki/Virtual_dom)
- [JSX](https://reactjs.org/docs/introducing-jsx.html)
- [React hooks](https://reactjs.org/docs/hooks-intro.html)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Vite](https://vitejs.dev/)

## Setup

- `npm i`
- `npm run dev`

## Tasks

### Exercise 1

You need to write a small `SPA` application without using Backend. After installing CRA(I'm using `Vite`) and initializing the project, with it, clean all ‘extra’.

The task is as follows - on the main page there are 2 buttons:

- `Stopwatch` - When clicking on the given button, the component of the same name is displayed with a stopwatch.It detects and shows the amount of time in HH: mm: SS that displays this component.! If the component is not displayed, then `setInterval` (if you decide to do it), must be cleaned from the browser stack.
- `StudentInfo` - When clicking on the button, the same component will also display, which contains information about you - name, age, photo.This component is displayed by default when loading the page.

### Exercise 2

Now let's improve our application a little. You need to write a new component `SomeList`. Add to the `Stopwatch` 2 buttons that will be displayed under the component:

- `Add` - when clicking on this button, the current result of time will be added to the list of values of the component `SomeList`.
- `Reset` - when you click, all values in `SomeList` will be cleaned.

The list of values in `SomeList` initially empty, until the user adds any result there.When closing the component of the stopwatch, the list is reset.

## Project status

Project is: completed

## Contacts

Created by [@sashauly](https://t.me/sashauly) - feel free to contact me!
