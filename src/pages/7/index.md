---
title: Lesson 7
index: true
lesson: Media Queries
date: 4/11/2018 15:00
template: article.jade
lessonId: 7
order: 1

labels: [Download Stater File]
attachments:
  - "./week7.zip"

downloads:
  labels: [Download Stater File]
  files: ['./week9.zip']
nav:
  Understanding index: index.html
  Setting up your site: hosting.html
badges: [html, css]
---

This week we will be talking about responsive web sites.

<span class="more"></span>

Media Queries are a way to control what CSS is displayed based on the screen width or other media properties.

The most common way we use a media query is to look at the screen width and if something is true than display the styles.

```css
body {
  background-color: blue;
}

@media screen and (min-width: 400px) {
  body {
    background-color: red;
  }
}
```

<iframe height='265' scrolling='no' title='Media Queries ' src='//codepen.io/danhahn/embed/dgZJMM/?height=265&theme-id=light&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/danhahn/pen/dgZJMM/'>Media Queries </a> by Dan Hahn (<a href='https://codepen.io/danhahn'>@danhahn</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Here we can see based on your screen if you have screen width is larger 400px or larger a new style is added to the document and changes the background-color from blue to red.

## Understanding Media Queries

The first thing we need to understand that a selector in a media query is **NOT** weighted any greater than a normal selector.  If you use the same selector for both the one that comes last *wins*.  Since that is the case media queries should be placed lower in the css file than is not MQ counterpart.  We can see this in the example above.

Next there are a few key selectors that will be used to determine what selector is rendered.

* `max-width` - anything up to but not including the the width.
* `min-width` - The width and above
* `width` - that width and only that.

### max-width

```css
body {
  background-color: blue;
}

@media screen and (max-width: 400px) {
  body {
    background-color: red;
  }
}
```

## The nesting

Media queries are the only time in CSS where we nest a selector.  This is because the way media queries work, they are a conditional wrapper of a selector and will only render the style when the case is true.

It is valid to have more than one selector with in a media block.

```css
@media screen and (max-width: 400px) {
  body {
    background-color: red;
  }
  .wrapper {
    background-color: blue;
  }
  h1 {
    font-size: 3em;
  }
}
```

Here we can see how `@media screen and (max-width: 400px)` has three selectors in side of it.  All three will be rendered when the query is true.

## Organizing your code

There are two ways we can organize your code.  Place all the code at the end of the file or have the query right after the selector.  Each have their benefits.

### Bottom query selector

```css
body {
  background-color: orange;
}
.wrapper {
  background-color: tan;
}
h1 {
  font-size: 11em;
}

/* lots more styles */

@media screen and (max-width: 400px) {
  body {
    background-color: red;
  }
  .wrapper {
    background-color: blue;
  }
  h1 {
    font-size: 3em;
  }
}
```

In this example we put all the query styles at the end of the document.  This is nice because all the "overrides" are in one place and you can just add more selectors as needed.

This works well when you have just one file and you would know to look at the end of the file.

### Grouped query selector

```css
body {
  background-color: orange;
}
@media screen and (max-width: 400px) {
  body {
    background-color: red;
  }
}

/* lots more styles */

.wrapper {
  background-color: tan;
}
@media screen and (max-width: 400px) {
  .wrapper {
    background-color: blue;
  }

}

/* lots more styles */

h1 {
  font-size: 11em;
}
@media screen and (max-width: 400px) {
  h1 {
    font-size: 3em;
  }
}

```

Here we put the query right after the selector.  While you will have many more query selectors in the file it is very clear the changes that need to me made at a screen size.

This approach is really good when you have many files that are used to style your site.

<iframe height='544' scrolling='no' title='Media Query' src='//codepen.io/danhahn/embed/Zqrgwm/?height=544&theme-id=light&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/danhahn/pen/Zqrgwm/'>Media Query</a> by Dan Hahn (<a href='https://codepen.io/danhahn'>@danhahn</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>