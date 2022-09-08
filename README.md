# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/tip-calculator-4XNYbZ0Z)
- Live Site URL: [Add live site URL here](https://cr1deg0.github.io/Tip-calculator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

- How to style Radio inputs to look more like buttons. This is achieved by hidding the default selectors and using the labels instead.
  ``` css
    input[type="radio"] {
      opacity: 0;
      position: fixed;
      width: 0;
    }
    .section-tip label {
        display: inline-block;
        border-radius: 4px;
        padding: 0.2em 0;
        text-align: center;
        min-width: 100px;
    }
  ```
- How to disable the arrow selector in input type number
  ```css
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    /* Firefox */
    input[type=number] {
      -moz-appearance: textfield;
    }
    ```
- How to override the browser default placeholder style
  ```css
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: var(--neutral-300);
      opacity: 1; /* Firefox */
    }
    ::-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: var(--neutral-300);
    font-family: inherit;
    }
    ::-ms-input-placeholder { /* Microsoft Edge */
    color: var(--neutral-300);
    font-family: inherit;
    }
  ```
## Author

- Frontend Mentor - [@cr1deg0](https://www.frontendmentor.io/profile/cr1deg0