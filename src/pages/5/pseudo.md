---
title: Lesson 5
lesson: Pseudo Class
lessonId: 5
order: 2

tags:
  'css':
    'label': 'css'
    'icon': 'fa fa-css3'
    'data' : [':link', ':visited', ':hover', ':active', ':focus']
---

Pseudo class selectors are CSS selectors with a colon preceding them.

## Link related pseudo class selectors

`:link` - Perhaps the most confusion-causing link-related pseudo selector. Aren't all `<a>`'s links? Well not if they don't have an href attribute. This selects only those that do, thus is essentially the same as a[href]. This selector will become a lot more useful should any-element linking become reality.

`:visited` - Selects links that have already been visited by the current browser.

`:hover` - When the mouse cursor rolls over a link, that link is in it's hover state and this will select it.

`:active` - Selects when the link while it is being activated (being clicked on or otherwise activated). For example, for the "pressed" state of a button-style link or to make all links feel more button-like.

```css
a {
  color: maroon;
  text-decoration: none;
}

a:link {
  color: teal;
}

a:visited {
  color: orangered;
}

a:hover {
  color: hotpink;
  text-decoration: underline;
}

a:active {
  color: forestgreen;
  font-style: italic;
}
```

While the order does not matter in most cases, here the selector weights are all the same so having `:active` last means it will override `:hover` and display when clicked.

## Form pseudo class

`:focus` - Applied when a curser is placed within a form element.

```css
input {
  border: 2px solid gray;
  padding: 5px;
  width: 200px;
  outline: none;
  transition: width 1s;
}

input:focus {
  width: 400px;
  border-color: gold;
  background-color: lightyellow;
}
```

**Note:** `:hover` can be applied to any element.
