---
title: Lesson 7
lesson: Responsive Layouts
author: Dan Hahn
date: 2/28/2018 15:00
template: article.jade
lessonId: 7
order: 2

nav:
  Float Layout: index.html
  Clear Fix: clear-fix.html
  Flex Box: flex.html
  Flex Layout: flex-layout.html
  Homework: homework.html
badges: [css]
---

This week we will be talking about resonsive layouts includeing media queries and picture element.

<span class="more"></span>

## CSS3 Media Queries

Let us look at some more examples of using media queries.

We will start with a list of names which function as email links. The HTML is:

```html
<!DOCTYPE html>
<html>
<head>
<style>
  ul {
    list-style-type: none;
  }

  ul li a {
    color: green;
    text-decoration: none;
    padding: 3px;
    display: block;
  }
</style>
</head>
<body>

<ul>
  <li><a data-email="johndoe@example.com" href="mailto:johndoe@example.com">John Doe</a></li>
  <li><a data-email="marymoe@example.com" href="mailto:marymoe@example.com">Mary Moe</a></li>
  <li><a data-email="amandapanda@example.com" href="mailto:amandapanda@example.com">Amanda Panda</a></li>
</ul>

</body>
</html>
```

Notice the data-email attribute. In HTML5, we can use attributes prefixed with data- to store information. We will use the data- attribute later.

### Width from 520 to 699px

When the browser's width is between 520 and 699px.

```css
@media screen and (max-width: 699px) and (min-width: 520px) {
  ul li a {
    padding-left: 30px;
    background: url(email-icon.png) left center no-repeat;
  }
}
```

### Width from 700 to 1000px

When the browser's width is between from 700 to 1000px.

```css
@media screen and (max-width: 1000px) and (min-width: 700px) {
  ul li a {
    font-style: italic;
    color: #666666;
  }
}
```

### Width above 1001px

When the browser's width is above 1001px.

```css
@media screen and (min-width: 1001px) {
  ul li a {
    font-size: 12px;
    font-style: italic;
    color: #666666;
  }
}
```

### Width above 1151px

For browser widths above 1151px.

Here, we do not have to write an additional media query block, we can just append an additional media query to our already existing one using a comma (this will behave like an OR operator):

```css
@media screen and (max-width: 699px) and (min-width: 520px),
  (min-width: 1151px) {
  ul li a {
    padding-left: 30px;
    background: url(email-icon.png) left center no-repeat;
  }
}
```
