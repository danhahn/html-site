---
title: Lesson 12
index: true
author: Dan Hahn
lesson: Final Project Responsive
date: 4/25/2018 15:00
template: article.jade
nav:
  Final Project: index.html
badges: [html,css]
lessonId: 12
---

This week we work on the in class final.

<span class="more"></span>

Once you get your desktop version of the project done you have the optional task to create a responsive version.

[![](https://res.cloudinary.com/svahtml/image/upload/c_thumb,g_north,h_500,w_300/v1544628467/SVA_HTML_-_Fall_2018.png)](https://res.cloudinary.com/svahtml/image/upload/v1544628467/SVA_HTML_-_Fall_2018.png)

When finished you page should look like this.

You will need to add the "hamburger" by using this code below.

```html
<div class="hamburger">
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
</div>
```

And the CSS to make it look correct

```css
.global-nav .hamburger {
    border: 2px solid #ff951a;
    border-radius: 7px;
    padding: 5px;
    flex: 0 0 35px;
    align-self: flex-start;
}

.global-nav .hamburger .line {
    height: 2px;
    background-color: #ff951a;
    margin-bottom: 4px;
}
```

This will need to be added to the `.global-nav` and be hidden by using `display: none;` if the screen is greater than 768px.

Also set the `max-height` of `.nav-list` to `0` if the screen is greater than 768px.

Next you need to add some Javascript to make it work.

1. Create a javascript file
2. Include the file a the end of each page.  `<script src=""></script>`
3. Add an eventListener to `.hamburger`
4. Create a variable `isOpen` and set to false.
5. When clicked change
   1. the `min-height` of `.nav-list` to `292px` if `isOpen` is false and set to true
   2. the `min-height` of `.nav-list` to `0` if `isOpen` is true and set to false

Any other styling to make the page display like the example above.

