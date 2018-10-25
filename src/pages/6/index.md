---
title: Lesson 6
index: true
lesson: Flex Layout
author: Dan Hahn
date: 2/28/2018 15:00
template: article.jade
lessonId: 6
order: 1

labels: [Download Stater File]
attachments:
  - "./week6.zip"
nav:
  Float Layout: index.html
  Clear Fix: clear-fix.html
  Flex Box: flex.html
  Flex Layout: flex-layout.html
  Homework: homework.html
badges: [css]
---

This week we will be talking about using flex box to create layouts and adding backgrounds to the site.

<span class="more"></span>

<iframe height='528' scrolling='no' title='Flex Layout (Week 6)' src='//codepen.io/danhahn/embed/owmERe/?height=528&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/danhahn/pen/owmERe/'>Flex Layout (Week 6)</a> by Dan Hahn (<a href='https://codepen.io/danhahn'>@danhahn</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Set Up

We have the same markup as the `Float` layout.

But rather than using the brittle `float` we can use a more modern `display: flex`.

```markup
<div class="wrapper">
  <header>Header</header>
  <section>
    <nav>Nav</nav>
    <article>Content</article>
    <aside>Side Content</aside>
  </section>
  <footer>Footer</footer>
</div>
```

In this example we have two `display: flex;` Going on at the same time. The design is to have a "sticky" footer, a footer that is at the bottom of the page regardless of the content on the page this is our first `flex`; The other is the `<section>`, we use this to create a "row" that contains our `<nav>` `<article>` and `<aside>`.

If you are comfortable using `flex` the "row" style should straight forward. We define `display: flex;` on `<section>` to define a row. To define the "columns" we need define a `flex-basis` on the `<nav>` and `<aside>` which are basically the "width" of the columns. To give the remainder of the space to the `<article>` we define `flex: 1`.

Getting the "sticky" footer to work is a little more complex. First we need to ensure that page is as tall as the viewport we need to set `<html>` and `<body>` to have a height of `100%`. This will allow us to set the height of the `.wrapper` to `100vh`. The `vh` is a view height, it gets is size form the viewport. In our case it it taking up the full screen so we have it set to `100vh`. We also use `min-height` to ensure it takes the full screen size but can grow inf the content needs it to.

Next we need to add a `display: flex;` to the `.wrapper`. Since the default for a _"flexbox"_ is `flex-direction: row;` it will stack the content next to each other. Since we want the content to stack on top of one another we need to set the `flex-direction: column`; It may seem like there is no change but it is now a "flexbox" and this will allow us to take the remainder of the space in the column and give it our `<section>`. We need to add `flex: 1` to the `<section>`, it is now a _flex parent_ and _flex child_ at the same time.

```css
html,
body {
  height: 100%;
}
body {
  font: 16px arial;
  margin: 0;
}
.wrapper {
  background-color: lightgray;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
}
header {
  background-color: slategray;
  padding: 20px;
  color: white;
}
section {
  display: flex;
  flex: 1;
}
nav {
  background-color: plum;
  padding: 1em;
  flex: 0 0 100px;
}
article {
  background-color: white;
  flex: 1;
  padding: 2em;
}
aside {
  background-color: pink;
  padding: 1em;
  flex: 0 0 100px;
}
footer {
  background-color: black;
  padding: 20px;
  color: white;
}
```

## Responsive

`@media` is a conditional styles that can be applied only when the conditions are meet. In this example it is looking at the `max-width`. So if the screen width is `600px` or less these additional style are added to the file. It is important to understand that the selectors in the media query have no more weight than any other selector. To ensure the styles at in the `@media` query are applied they need to be defined after the _"default"_ styles.

```css
@media (max-width: 600px) {
  section {
    flex-direction: column;
  }
  nav,
  aside {
    flex-basis: auto;
  }
}
```

`@media` queries are different in that they wrap the selector. When working with media queries ensure that all `{}` have a pair. Failing to properly close a media query could have adverse affects on any style after the missing `}`.
