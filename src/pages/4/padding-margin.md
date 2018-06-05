---
title: Lesson 4
lesson: Padding and Margin
author: Dan Hahn
date: 2/14/2018 15:00
template: article.jade
lessonId: 4
order: 5

nav:
  Font Properties: index.html
  Text Properties: text.html
  Include CSS File: include.html
  Borders: borders.html
  Padding and Margin: padding-margin.html
  Homework: homework.html
---

Padding is the amount of space from the border in to the content.

Margin is the amount of space from the borer out to the next element.

<iframe height='573' scrolling='no' title='Padding' src='//codepen.io/danhahn/embed/MoQYeQ/?height=573&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/danhahn/pen/MoQYeQ/'>Padding</a> by Dan Hahn (<a href='https://codepen.io/danhahn'>@danhahn</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Working With Paragraphs

There is often a little confusion when to use margin or padding with paragraph tags.

<a href="margin-padding-paragraph/" class="btn">See Example</a>

## Values

The margin and padding property can have from one to four values.

```css
padding: 25px 50px 75px 100px;
```

* top padding is 25px
* right padding is 50px
* bottom padding is 75px
* left padding is 100px

```css
padding: 25px 50px 75px;
```

* top padding is 25px
* right and left paddings are 50px
* bottom padding is 75px

```css
padding: 25px 50px;
```

* top and bottom paddings are 25px
* right and left paddings are 50px

```css
padding: 25px;
```

* all four paddings are 25px
