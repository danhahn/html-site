---
title: Lesson 5
lesson: Floats
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

Float is CSS property that is used to display content. Floats where originally intended to get the magazine feel on the web by allowing images or other content to wrap around text within an article. Over time floats have been used for other reason like layouts. CSS floats can be applied to any elements, both _inline_ and _block_.

When an element is floated they go into a state that is not inline or block. A floated element is alot like `display: inline-block` but the content will wrap around it.. A floated element differs from all other elements because it is not part of the _flow of the document_ so the container is not able to use a floated element to determine its height.

**Note:** Elements are floated horizontally, this means that an element can only be floated left or right, not up or down.

## Float Basics

| prop  | value | desc                                                       | example         |
| ----- | ----- | ---------------------------------------------------------- | --------------- |
| float | left  | float an item to the left and content will wrap around it  | `float: left;`  |
| float | right | float an item to the right and content will wrap around it | `float: right;` |

<iframe height='1069' scrolling='no' title='Floats Explained' src='//codepen.io/danhahn/embed/NgyEJG/?height=1069&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/danhahn/pen/NgyEJG/'>Floats Explained</a> by Dan Hahn (<a href='https://codepen.io/danhahn'>@danhahn</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

**Note:** Elements that are floated will move to the far left or right of the container and the content will wrap around the floated element.

When two elements are floated in the same direction one after another they will "stack" next to each other.

## Clearing A float

When an element is floated it affects both the element that has the float and the element after it. To stop an element from being affected by the float you need to add the css property of clear.

Clear has three values, left, right and both. `clear: left` will clear a `float: left`, `clear: right` will clear a `float right` and `clear: both` will clear either a left or right float.

| prop  | value | desc                                                                           | example         |
| ----- | ----- | ------------------------------------------------------------------------------ | --------------- |
| clear | left  | A clear **left** will clear an element that has been floated left              | `clear: left;`  |
| clear | right | A clear **right** will clear an element that has been floated right            | `clear: right;` |
| clear | both  | A clear **both** will clear an element that has been floated left **or** right | `clear: both;`  |

The the clear float must be added to an element after the floated element.

In this example the content in the second element is not affected by the the float because it has a clear:left; on it.

**Note:** When the clearing an element it will clear that element and all the elements after.

## Stacking Floats

When two or more consecutive elements are floated in the same direction they will "stack" horizontally. This is often used to create navigation or layouts.

**Note:** when all the content with in an element is floated that element will seem to have no height.

### Example

<iframe height='514' scrolling='no' title='Stacking Floats' src='//codepen.io/danhahn/embed/dRdrRm/?height=514&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/danhahn/pen/dRdrRm/'>Stacking Floats</a> by Dan Hahn (<a href='https://codepen.io/danhahn'>@danhahn</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[More Info](http://css-tricks.com/all-about-floats/)

<script src="lesson-6.js"></script>

<style>
  table td:nth-child(4) {
    white-space: nowrap;
  }
</style>
