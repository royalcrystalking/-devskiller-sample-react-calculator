# Inline Calculator

## Introduction

This application uses React.js JavaScript framework. It contains a front-end calculator app for inline calculation. Your job is to finish an implementation of the React Components and a few functions responsible for calculator logic implementation.

## Task details

We have `React.Component` classes stored in the `components/**` folder. These classes are responsible for the rendering logic.  Also we have `Calculation` class stored in the `logic/**` folder. This class is responsible for the calculation logic. The main function of the application is the calculation of the expression entered in the corresponding `<input>` field followed by rendering the result in the HTML element below.

### 1. Implement `Layout` React Component

It should render front-end part of the app according to expression received from `<input>` field.

If expression is wrong return _**'Wrong input!'**_ statement.

If expression is correct a full expression should be displayed with arguments and result separated by space. For example, for input **`1.28+2.89`** following expression should be rendered: **`1.28 + 2.89 = 4.17`**

### 2. Implement `Paragraph` React Component

It should re-render content of the corresponding Paragraph according to its `content` property.

### 3. Implement `Calculation` class

It should evaluate math expression that matches with `pattern` regular expression. If given expression is wrong return `false`.

## Hints

You shouldn't modify code outside the mentioned classes, just complete the specified `@TODO` statements to make the tests run as expected.

To execute all the tests, use following commands:

```
npm install
npm test
```
