---
title: Lesson 8
lesson: Data Types
template: article.jade
lessonId: 8
order: 2
---

## Dynamic typingSection
JavaScript is a loosely typed or a dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

```javascript
var foo = 42;    // foo is now a number
foo = 'bar'; // foo is now a string
foo = true;  // foo is now a boolean
```

## Variable

JavaScript variables are containers for storing data values.  They can be named anything as long as they start with a letter and do not have a space.

```javascript
var type;
var price;
var tax;
```

variable can be set to a value (any data type see below);

```javascript
var type;
type = "dress";
```

You can also declare and set a variable in one line

```javascript
var type = "shoes";
```

### const and let

the `var` declaration is a relic of older version of JavaScript and there are some issues with like you can reset a value.  Because of this ES6 introduced two new way to declare a variable.

`let` is like a `var` in that the value can change over time but is block scoped.

`const` the value can not be change after it was defined but values on it like arrays or objects can be.

## the semicolon

You will notice that at the end of each line there is a semicolon `;` like with css this is like the period at the end of a sentence.

## Data Types

primitives:

* Boolean - a true or false value
* Null - a value of null
* Undefined - a value that has not been defined
* Number - a number include decimals
* String - any text in side single `'` or double quotes `"`

## Complex data types

* Object - An object is a collection of properties, and a property is an association between a name (or key) and a value.
* Array - An array is a numbered collection of properties.

**Note:** An array is really an object but for now we can think of them as two different types.

## Boolean

A JavaScript Boolean represents one of two values: true or false.

```javascript
var happy = true;
console.log(happy); // true
happy = false;
console.log(happy); // false
```

## Null

The value `null` represents the intentional absence of any object value.

The value `null` is written with a literal: `null`. `null` is not an identifier for a property of the global object, like `undefined` can be. Instead, `null` expresses a lack of identification, indicating that a variable points to no object. In APIs, `null` is often retrieved in a place where an object can be expected but no object is relevant.

```javascript
// foo does not exist. It is not defined and has never been initialized:
foo; //"ReferenceError: foo is not defined"

// foo is known to exist now but it has no type or value:
var foo = null; // null
```

### Undefined

A variable that has not been assigned a value is of type undefined. A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. A function returns undefined if a value was not returned.

```javascript
var x;
console.log(x); //undefined;
```

## number

if you want to do any sort of math you will need to have a number.

```javascript
var a = 10;
var b = 20;
var total = a + b;
console.log(total); // 30
```

### Math operators

Operator | Description
---|---
`+` | Addition
`-` | Subtraction
`*` | Multiplication
`/` | Division
`%` | Modulus (Division Remainder)
`++` | Increment
`--` | Decrement

```javascript
// Addition
var add = 1 + 2;
console.log(add); // 3
// Subtraction
var subtract = 10 - 2;
console.log(subtract); // 8
// Multiplication
var multiply = 4 * 2;
console.log(multiply); // 8
// Division
var divide = 10 / 2;
console.log(divide); // 5
```

**Note:** JavaScript as many functions on the `Math` object like `Math.random()`.  For more [see here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math8) .

## String

Strings are useful for holding data that can be represented in text form. Some of the most-used operations on strings are to check their `length`, to build and concatenate them using the `+` and `+=` string operators, checking for the existence or location of substrings with the `indexOf()` method, or extracting substrings with the `substring()` method.

```javascript
var first = "Dan";
console.log(first); // Dan
var last = "Hahn";
console.log(last); // Hahn

var fullName = first + last;
console.log(fullName); // DanHahn

var fullName2 = first + " " + last;
console.log(fullName2); // Dan Hahn

//ES6 String template literal

const fullName3 = `${first} ${last}`;
console.log(fullName3); // Dan Hahn
```

You an also do checks on a string

```javascript
const name = "Dan Hahn";
console.log(name.length); // 8
console.log(name.charAt(1)); // a
console.log(name.toLowerCase()); // dan hahn
console.log(name.link('http://www.svahtml.com')); //<a href="http://www.google.com">Dan Hahn</a>
```

