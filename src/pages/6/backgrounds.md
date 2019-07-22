---
title: Lesson 6
lesson: CSS Backgrounds
author: Dan Hahn
date: 3/14/2018 15:00
template: article.jade
lessonId: 6
order: 3

nav:
  Background: index.html
  Tables: tables.html
  Homework: homework.html

badges: [html, css]
---

Backgrounds are a way to add colors and images to elements on the page.

| Property                | Description                                                                   |
| ----------------------- | ----------------------------------------------------------------------------- |
| `background`            | Sets all the background properties in one declaration                         |
| `background-attachment` | Sets whether a background image is fixed or scrolls with the rest of the page |
| `background-color`      | Sets the background color of an element                                       |
| `background-image`      | Sets the background image for an element                                      |
| `background-position`   | Sets the starting position of a background image                              |
| `background-repeat`     | Sets how a background image will be repeated                                  |
| `background-size`       | Specifies the size of the background image(s)                                 |

## Background Color

```css
background-color: color name | RGB Value | Hex Value;
```

Background color can be added any element on the page including both block and inline elements. Block level elements will display the full width of the element where inline will only display in the space the content needs. You can use padding to expose more of the background.

<iframe height="265" style="width: 100%;" scrolling="no" title="background-color" src="//codepen.io/danhahn/embed/YWaZzb/?height=265&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/danhahn/pen/YWaZzb/'>background-color</a> by Dan Hahn
  (<a href='https://codepen.io/danhahn'>@danhahn</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Background Image

```css
background-image: url(<imagepath>);
```

Background images can be applied to any element on the page including both block and inline elements. If a background color and image are applied at the same time to the same element the image will overlay the color. By default a background image will tile in all directions starting in the top left corner.

<iframe height="265" style="width: 100%;" scrolling="no" title="yJKvov" src="//codepen.io/danhahn/embed/yJKvov/?height=265&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/danhahn/pen/yJKvov/'>yJKvov</a> by Dan Hahn
  (<a href='https://codepen.io/danhahn'>@danhahn</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Background Repeat

```css
background-repeat: repeat | no-repeat | repeat-x | repeat-y;
```

When applying a background image it will tile in all directions by default.

You can control the way the image will tile by using `background-repeat`.

| Repeat           | Direction                       |
| ---------------- | ------------------------------- |
| repeat (default) | tiles in all directions         |
| no-repeat        | the image will appear one time. |
| repeat-x         | repeat along the x axis         |
| repeat-y         | repeat along the x axis         |

<iframe height="265" style="width: 100%;" scrolling="no" title="background-repeat" src="//codepen.io/danhahn/embed/bZvLoq/?height=265&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/danhahn/pen/bZvLoq/'>background-repeat</a> by Dan Hahn
  (<a href='https://codepen.io/danhahn'>@danhahn</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

##Background Attachment

```css
background-attachment: scroll | fixed;
```

When a background image is applied to an element by default it will move with that element then the page scrolls. An image can be locked to one location by setting the value of background-attachment to fixed. When fixed is applied the element will no longer have its location set by the element but the body instead. The most common use of the is property is when applying a background to the BODY tag and that background image should not move when the page is scrolled.

## Background Position

```css
background-position: (left, right or center) (top, center or bottom);
```

The position of the background image can be sent by using background-position. When a value is set the image will move to the location set background-position and if a tile is applied tile out from that point.

If you want the image to be position the center both vertical and horizontal than you need only define the value of center.

```css
background-position: center;
```

Position can also be set by adding a number value, two values must be set with the first value how far from the left and the second value how far from the top. Number can be in pixels or percentages.

```css
background-position: 100px 300px;
background-position: 50% 80%;
```

<iframe height="265" style="width: 100%;" scrolling="no" title="background-position" src="//codepen.io/danhahn/embed/mExXpV/?height=265&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/danhahn/pen/mExXpV/'>background-position</a> by Dan Hahn
  (<a href='https://codepen.io/danhahn'>@danhahn</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Background Shorthand

```css
background: image repeat attachment position color;
```

Like many CSS properties there is a shorthand way to define a background. Like with other shorthand options not all values are required and values not set will be set to the default value.

```css
background: #fff url(images/side-bar.png) repeat-y right top;
```

<iframe height="265" style="width: 100%;" scrolling="no" title="background" src="//codepen.io/danhahn/embed/ZOxAxr/?height=265&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/danhahn/pen/ZOxAxr/'>background</a> by Dan Hahn
  (<a href='https://codepen.io/danhahn'>@danhahn</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

In this example attachment is not defined so it will be set to the default which in this case is scroll.

In a case where you need to override a value set elsewhere and remove all background values it can be done by setting the background value to none.

```css
background: none;
```

You are setting the `background-image` to none and by default setting the `background-color` to transparent.

<iframe height="265" style="width: 100%;" scrolling="no" title="background: none" src="//codepen.io/danhahn/embed/jAzkjx/?height=265&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/danhahn/pen/jAzkjx/'>background: none</a> by Dan Hahn
  (<a href='https://codepen.io/danhahn'>@danhahn</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
