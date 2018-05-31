---
title: Lesson 5
lesson: Clear fix
author: Dan Hahn
date: 2/21/2018 15:00
template: article.jade
lessonId: 5

nav:
  Box Model: index.html
  Pseudo Class: pseudo.html
  Floats: floats.html
  Clear Fix: clear-fix.html
  Homework: homework.html
---

There are a number of way to fix the issue when all the content within a element are floated.

## Adding Height

The most basic way to fix the issue is to add a height to the parent element.

```html
<style>
  ul {
    height: 25px;
  }
  li {
    float: left;
    list-style:none;
  }
</style>
<ul>
  <li>Nav Item 1</li>
  <li>Nav Item 2</li>
  <li>Nav Item 3</li>
  <li>Nav Item 4</li>
</ul>
```

| Good     | Bad                                     |
| -------- | --------------------------------------- |
| it works | not flexaable                           |
|          | hard to know what he correct height is. |

## Overflow

Adding `overflow: hidden` or `overflow: auto` will a adjust the way the content is displayed. This will force a height.

```html
<style>
  ul {
    overflow: hidden;
  }
  li {
    float: left;
    list-style:none;
  }
</style>
<ul>
  <li>Nav Item 1</li>
  <li>Nav Item 2</li>
  <li>Nav Item 3</li>
  <li>Nav Item 4</li>
</ul>
```

| Good     | Bad                                              |
| -------- | ------------------------------------------------ |
| it works | No logical connection between overflow and float |

## Extra Div

Since we know that adding a `clear: both;` to an element will stop to clear. We can add a new element after the last floated element and add a clear to it. Since the element is after and cleared it will "pin" the background down.

```html
<style>
  li {
    float: left;
    list-style:none;
  }
  .clear {
    clear: both;
  }
</style>
<nav>
  <ul>
    <li>Nav Item 1</li>
    <li>Nav Item 2</li>
    <li>Nav Item 3</li>
    <li>Nav Item 4</li>
  </ul>
  <div class="clear"></div>
</nav>
```

| Good     | Bad                                             |
| -------- | ----------------------------------------------- |
| it works | Bad to add element that has not content purpose |

## Clear Fix

The idea of the extra `<div></div>` is a good one the only problem is we do not like to add extra markup that has no content need. CSS3 gives all elements an extra element before and after. By using the `:after` pseudo element you can add an "element" can clear that.

```html
<style>
ul:after {
  content: "";
  display: block;
  clear: both;
}
li {
  float: left;
  list-style:none;
}
</style>

<ul>
  <li>Nav Item 1</li>
  <li>Nav Item 2</li>
  <li>Nav Item 3</li>
  <li>Nav Item 4</li>
</ul>
```

**Note:** when working with the pseudo element you need to add `content: "";` and it is an **inline** element by default.

| Good     | Bad                                          |
| -------- | -------------------------------------------- |
| it works | Lack of older browser support. IE8 and below |
