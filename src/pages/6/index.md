---
title: Lesson 6
index: true
lesson: Float Layout
author: Dan Hahn
date: 2/28/2018 15:00
template: article.jade
lessonId: 6
order: 1

downloads:
  labels: [Download Stater File]
  files: ['./week6.zip']
nav:
  Float Layout: index.html
  Clear Fix: clear-fix.html
  Flex Box: flex.html
  Flex Layout: flex-layout.html
  Homework: homework.html
badges: [css]
---

This week we will talk about the new CSS3 flex box layout.

<span class="more"></span>

<iframe height='589' scrolling='no' title='Float Layout' src='//codepen.io/danhahn/embed/owGKdY/?height=589&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/danhahn/pen/owGKdY/'>Float Layout</a> by Dan Hahn (<a href='https://codepen.io/danhahn'>@danhahn</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Set Up

You can use a `float` to layout a page. Because when 2 elements are floated they will create row.

Here we a have the `html` for a three column layout. Note how `nav`, `article`, and `aside` are wrapped with a `section` tag. We will use that to _clear fix_ the layout issue.

```html
<div class="wrapper">
  <header class="header">
  </header>
  <section>
    <nav class="nav"></nav>
    <article class="main"></article>
    <aside class="sidebar"></aside>
  </section>
  <footer class="footer"></footer>
</div>
```

Here we have the CSS. There are a few things we need to do.

1.  add clear fix to `section`
2.  define a `width` to all elements in the row
3.  add `float: left;` to all children of the `section`

```css
section:after {
  content: "";
  display: table;
  clear: both;
}
.nav {
  width: 200px;
  float: left;
  background-color: lightgreen;
}

.main {
  width: 800px;
  float: left;
  background-color: white;
}

.sidebar {
  width: 200px;
  float: left;
  background-color: lightblue;
}
```

White this will work it is not very flexible or easy to make work on a mobile device.
