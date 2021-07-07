---
title: Lesson 11
lesson: Functions
template: article.jade
lessonId: 11
order: 3
---

A function is a small bit of code that can be run at will.

```javascript
function alertName() {
  alert("Dan Hahn");
}

alertName();
```

In this example we created a function named `alertName` and when it is called it uses the JavaScript method `alert` to display the string "Dan Hahn";

The function need to be called by name `alertName()`. This will "run" the function.

## variables in functions

The function outline above will alert the same message every time. What if we want to use the same function to alert any name then we need to pass a variable in to the function.

```javascript
function alertName(name) {
  alert(name);
}

var fullName = "Dan Hahn";

alertName(fullName);
```

Here we pass a variable in to the function and assign it to `name`; Once in the function we can use the `name` variable as any other variable. This make the function reuseable and allows any value to be passed in.

**Note:** There is no type checking in JavaScript so you could expect a string but pass a number.

## Conditional statements

One of the things that make JavaScript so powerful is the ability to make decisions. We can use an `if` statement to evaluates if a statement is `true`. If the statement is `true` than a block of code is run.

```javascript
if (true) {
  console.log("statement is true"); // statement is true
}
```

What happens if the statement is `false`? In this case nothing but we can add an `else` block that will run when the `if` statement is false.

```javascript
if (false) {
  console.log("statement is true"); // will not run
} else {
  console.log("statement is false"); // statement is false
}
```

In this case the `if` looks at the statement in parentheses and since it is not true it falls back to the `else` block;

It is not realist to think that we are going to only place a `true` or `false` value in the `if` more likely we will check to see if a statement is `true`.

JavaScript is able to look at two values and see if they are equal to each other we will use `==` or `===` to compare two values.

**Note:** `=` is use to assign not evaluate.

```javascript
1 === 1; // true
1 === 2;
false;
"a" === "a"; // true
"a" === "b"; // false

var a = 100;
var b = 200;

a === b; //false since 100 not equal to 200
```

Some times we want to check if something is not equal to something else in that case we use the not equal `!=` or `!==`.

```javascript
1 !== 1; // false
1 !== 2; // true
"a" !== "a"; // false
"a" !== "b"; // true

var a = 100;
var b = 200;

a !== b; // true since 100 not equal to 200
```

The `if` statement is always looking for the value to be true.

## ternary if statement

The conditional (ternary) operator is the only JavaScript operator that takes three operands. This operator is frequently used as a shortcut for the if statement.

Lets say we have a test that will set the value of a variable based on a statement. it will either be one or the other.

```javascript
var a = 100;
var value;
if (a === 100) {
  value = "a is 100";
} else {
  value = "a is not 100";
}
```

In this case we are only checking to see if `a` equal to `100` and based on if that is true we will get on of two values. A statement like this is were we can use the ternary operator.

```javascript
var value = a === 100 ? "a is 100" : "a is not 100";
```

Here we create a variable `value` and set it equal to a statement `a = 100`. After that we have the true and false values that will defined to `value`. `?` is the true value and `:` is the false value.

They do the same thing. When we get to reactjs there are sometimes that we will need to use the ternary.

## return statment

Javascript functions will always return a value. Even if you dont define the return value a function will return `undefined`.

Let take a look at what a return statement might look like.

```javascript
function getHex(color) {
  var hexColor = null;
  if (color === "red") {
    hexColor = "#ff0000";
  }
  return hexColor;
}

var color = getHex("red");
console.log(color); // "#ff0000"
var color2 = getHex("blue");
console.log(color2); // null
```

Here we have a function that takes a variable `color` and check if it is `red` and returns the hex color. Since we get a value back (the return value) we can then assign it to a variable the use that value.

As soon a value is returned the function will stop running. We can use this to stop a function from running if needed.

```javascript
function getHex(color) {
  if (typeof color !== "string") {
    return;
  }
  var hexColor = null;
  if (color === "red") {
    hexColor = "#ff0000";
  }
  return hexColor;
}

var color = getHex("red");
console.log(color); // "#ff0000"
var color2 = getHex(2);
console.log(color2); // undefined
```

We added a check to ensure that the variable passed in is a "string" and if it not don't run anything and just end the function call.

You do not need to set the return value to anything you can just `return`.

## Arrow functions

Arrow functions were added with ES6 and are a new way to call a function. With an arrow function you have explicit return;

```javascript
function addition(a, b) {
  var total;
  total = a + b;
  return total;
}

var myValue = addition(10, 20); // 30
```

Here we are passing two values in to our function (you can do this). Then we create a new variable `total` then we se the `total` to the computed value of `a` and `b`. last we return `total`.

Lets clean this up a bit with an arrow function `() => {}`;

```javascript
var addition = (a, b) => {
  var total;
  total = a + b;
  return total;
};
var myValue = addition(10, 20); // 30
```

At this point we have just formatted the function to use an arrow function. But we can make things a little cleaner. We can set the value to total and do the addition at the same time.

```javascript
var addition = (a, b) => {
  var total = a + b;
  return total;
};
var myValue = addition(10, 20); // 30
```

in fact we dont even need to set the `total` variable insted we can just return the addition that we are doing .

```javascript
var addition = (a, b) => {
  return a + b;
};
var myValue = addition(10, 20); // 30
```

But the arrow function has an explicit return we don't need to tell it return the value it will just do it by default.

```javascript
var addition = (a, b) => a + b;
var myValue = addition(10, 20); // 30
```

We need to remove the `{}` that wrap the calculation. Now the arrow function will "return" `a + b`;

The two functions do the same thing but the arrow function is much cleaner and easy to read and less error pone.
