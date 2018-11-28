---
title: Lesson 9
lesson: Javascript
template: article.jade
lessonId: 9
order: 2
---

## Understanding the DOM

The DOM or document object model is the current HTML page's as rendered by the browser.  DOM and HTML are not the same thing.

HTML is the code that your write in your browser and can be viewed by viewing the page source.  The DOM take that HTML and cleans up any errors and make sure it is valid then renders in the browsers.  When you use the development tools this shows you the DOM.

Since the DOM is now standard we can use it as an API (application program interface) and use JavaScript to access, add, update or delete content in the DOM.

## Selecting content from the page

We can use JavaScript to get the content form the DOM and store it in a variable.  Once the DOM element has been selected there are lots of thing that can be done to it like update the css, update the content or adding `eventListener`.

* `getElementById()`
* `querySelector()`
* `querySelectorAll()`

## `getElementById()`

The Document method `getElementById()` returns an Element object representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.

### html

```html
<div id="header">
  <h1>Header</h1>
</div>
```

### JS

```javascript
var header = document.getElementById('header');
console.log(header); // <div id="header"><h1>Header</h1></div>
```

Here we have a `<div>` with an `id="header"` and we use `document.getElementById('header')` to get that element.

If we want to look at the full page to find an element we start with `document`.

Next we use the JavaScript API `getElementById` and pass in a string of the id we want to select `header`.

This return the DOM element in JS form.

**Note:** Javascript should be added after the HTML elements.

## `querySelector()`

For the most part we don't use `id` much any more for many of the reason we have outlined before so we need an other way to select an element from the page.  An alterative to selecting by an `id` is `querySelector()`.

The basic idea is the same but rather than just passing the id name you pass a css selector.  Since we know how to select an element with css to change its display we can use that same selector to get the DOM element.

**Note:** `querySelector()` will only select the first item in the DOM.

### html

```html
<div id="header">
  <span>Header</span>
</div>
```
#### Try it
<div id="header">
  <span>Header</span>
</div>

### JS

```javascript
var header = document.querySelector('#header');
console.log(header); // <div id="header"><span>Header</span></div>
```

This returns the exact same thing as `getElementById()` but what if we dont have an `id`?  Lets update the markup to remove the `id`.

```html
<div class="global-header">
  <span>Header</span>
</div>
```
#### Try it
<div class="global-header">
  <span>Header</span>
</div>

### JS

```javascript
var headerSpan = document.querySelector('.global-header span');
console.log(headerSpan); // <span>Header</span>
```

Now we pass `.global-header h1` in to `querySelector()` and get back just the `h1` just like we would with CSS.  There is one major problem with this in that it only returns one item.  What if we wanted to select all `li` in a nav?

```html
<nav class="global-nav">
  <ul class="social">
    <li class="social-item">Facebook</li>
    <li class="social-item">Twitter</li>
    <li class="social-item">Instagram</li>
    <li class="social-item">LinkedIn</li>
  </ul>
</nav>
```
#### Try it
<nav class="global-nav">
  <ul class="social">
    <li class="social-item">Facebook</li>
    <li class="social-item">Twitter</li>
    <li class="social-item">Instagram</li>
    <li class="social-item">LinkedIn</li>
  </ul>
</nav>

### JS

```javascript
var li = document.querySelector('.global-nav .social .social-item');
console.log(li); // <li class="social-item">Facebook</li>
```

**Note:** `querySelector` will return only **one** item.

In all the examples we have done up to now we always have started with the `document` but you can get a DOM element and then query just that element.

```html
<section class="item1">
  <span>Item 1</span>
  <p>Lorem ipsum dolor sit.</p>
</section>
<section class="item2">
  <span>Item 2</span>
  <p>Necessitatibus voluptates laborum nisi!</p>
</section>
```

#### Try it

<section class="item1">
  <span>Item 1</span>
  <p>Lorem ipsum dolor sit.</p>
</section>
<section class="item2">
  <span>Item 2</span>
  <p>Necessitatibus voluptates laborum nisi!</p>
</section>

```javascript
var item = document.querySelector('.item2');
var p = item.querySelector('p');
conosle.log(p); // <p>Necessitatibus voluptates laborum nisi!</p>
```

## `querySelectorAll()`

`querySelectorAll` acts just like `querySelector` but will return a `nodeList` which is a lot like an array.  Since it returns a nodeList it is a little harder to work with because we need to look over each item update it.

```html
<ul class="all">
  <li class="all-item">Facebook</li>
  <li class="all-item">Twitter</li>
  <li class="all-item">Instagram</li>
  <li class="all-item">LinkedIn</li>
</ul>
```
#### Try it

<ul class="all">
  <li class="all-item">Facebook</li>
  <li class="all-item">Twitter</li>
  <li class="all-item">Instagram</li>
  <li class="all-item">LinkedIn</li>
</ul>

```javascript
var all = document.querySelectorAll('.all');
console.log(all); // NodeList [ul.all]
var allLis = document.querySelectorAll('.all-item');
console.log(allLis); // NodeList(4) [li.all-item, li.all-item, li.all-item, li.all-item]
```

### Looking over a nodeList

We can use a `forEach` to loop over each item in a node list and do something with the item (more on that in a bit).

```javascript
document.querySelectorAll('.all-item').forEach(li => {
  console.log(li.textContent)
});
// Facebook
// Twitter
// Instagram
// LinkedIn
```

We need to pass a function in to the forEach that will do something in this case just long the `textContent` of each item in the list.