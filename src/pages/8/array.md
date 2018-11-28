---
title: Lesson 8
lesson: Array
template: article.jade
lessonId: 8
order: 4
---

JavaScript arrays are used to store multiple values in a single variable.  An array can store any data type including other arrays or objects.

Items can be pulled from an array by its index.  Index start at `0`.

```javascript
var people = new Array();
// or
var people = [];
```
Both create an array but the second options is the most common ways we define a new array.

## adding to an array

When you create an array you can add the values at that time or they can be added later.

```javascript
var people = ["Dan", "Jim", "Pete"];
```

This will create an array with three "strings" in it.

If we want to add to the array we can `push` items to the array.  This will add the item at in the last position of the array.

```javascript
var people = ["Dan", "Jim", "Pete"];
people.push('Amy');
console.log(people); // ["Dan", "Jim", "Pete", "Amy"]
```

When we push to an array we are updating the current array;

## working with an array

There are many things we can do with arrays in this section we will be going over a few of them.

### length

The `length` will tell you how many items are in the array.

```javascript
var people = ["Dan", "Jim", "Pete", "Amy"];
var count = people.length;
console.log(count); // 4
```

### get an item form an array

Lets say we need to get the second item in the array we will use the array name and `[]` with its index.  Index starts at `0` not `1` so if we want the second item the index would be `1`;

```javascript
var people = ["Dan", "Jim", "Pete", "Amy"];
var person = people[1];
console.log(person); // "Jim"
```

### Looping over an array

There are times you want to loop over an array and do something with each value.  To do this we are going to use a `forEach` which is on every array.  We pass in a function that will run for each item in the array.

```javascript
var people = ["Dan", "Jim", "Pete", "Amy"];

people.forEach(function(person) {
  console.log(person);
});
//"Dan"
//"Jim"
//"Pete"
//"Amy"
```

This will loop over each item in the array and write to the console.

we can do this with an arrow function as well

```javascript
var people = ["Dan", "Jim", "Pete", "Amy"];

people.forEach((person) => {
  console.log(person);
});
//"Dan"
//"Jim"
//"Pete"
//"Amy"
```

We get the same result.

But what if we need to get the index for each item as we loop?  We need to pass a second variable to the function.

```javascript
var people = ["Dan", "Jim", "Pete", "Amy"];

people.forEach((person, index) => {
  console.log(person + " " + index);
});
//"Dan 0"
//"Jim 1"
//"Pete 2"
//"Amy 3"
```

### Array Map

An array `map` is like the `forEach` but returns a new array that has been transformed via the function that is passed in.

Since the `map` will return an array we need to assign it to a variable.

```javascript
var people = ['Dan', 'Jim', 'Pete', "Amy"];
var newArray = people.map(function(person, index) {
  return person + " " + index
})

console.log(newArray); // ["Dan 0", "Jim 1", "Pete 2", "Amy 3"]
```

or as an arrow function and string template literal.

```javascript
var people = ['Dan', 'Jim', 'Pete', "Amy"];
var newArray = people.map((person, index) => `${person} ${index}`);

console.log(newArray); // ["Dan 0", "Jim 1", "Pete 2", "Amy 3"]
```

**Note:** We will use `map` a lot with react in a few weeks.