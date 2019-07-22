---
title: Lesson 6
lesson: Float
author: Dan Hahn
date: 2/28/2018 15:00
template: article.jade
lessonId: 6
order: 2

nav:
  Float Layout: index.html
  Clear Fix: clear-fix.html
  Flex Box: flex.html
  Flex Layout: flex-layout.html
  Homework: homework.html
badges: [css]
---

The **float** CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning).

<iframe height="1000" style="width: 100%;" scrolling="no" title="Floats Explained" src="//codepen.io/danhahn/embed/NgyEJG/?height=628&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/danhahn/pen/NgyEJG/'>Floats Explained</a> by Dan Hahn
  (<a href='https://codepen.io/danhahn'>@danhahn</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

| Property | Description                                                           |
| -------- | --------------------------------------------------------------------- |
| `left`   | The element must float on the **left** side of its containing block.  |
| `right`  | The element must float on the **right** side of its containing block. |
| `none`   | The element must **not** float.                                       |

# Clear

The **clear** CSS property sets whether an element must be moved below (cleared) floating elements that precede it. The `clear` property applies to floating and non-floating elements.

| Property | Description                                                                                              |
| -------- | -------------------------------------------------------------------------------------------------------- |
| `none`   | Is a keyword indicating that the element is **not** moved down to clear past floating elements.          |
| `left`   | Is a keyword indicating that the element is moved down to clear past **left** floats.                    |
| `right`  | Is a keyword indicating that the element is moved down to clear past **right** floats.                   |
| `both`   | Is a keyword indicating that the element is moved down to clear past both **left** and **right** floats. |
