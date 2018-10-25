---
title: Lesson 3
lesson: CSS Selectors
author: Dan Hahn
date: 2/7/2018 15:00
template: article.jade
lessonId: 3
order: 2

nav:
  Intro to CSS: index.html
  Selectors: selectors.html
  CSS3 Reference: css.html
  Homework: homework.html
---

Selectors are the way that the HTML and CSS connect to each other. There are **3 basic types** of selectors, `tag`, `class` and `id`.

## Tag Name Selector

Tag name selectors use HTML tags as the connection. _Any_ HTML element can be used as a selector. Although not all HTML elements can be styled.

### Example

<iframe height='265' scrolling='no' title='tag name selector' src='//codepen.io/danhahn/embed/MommxP/?height=265&theme-id=light&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/danhahn/pen/MommxP/'>tag name selector</a> by Dan Hahn (<a href='https://codepen.io/danhahn'>@danhahn</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

## Class Name selector

Class name selectors require an attribute of `class=""` to be added to an HTML element. A class **name** must be given and that **name** will be used to connect the HTML and CSS.

Many elements on a page may use the same class name.

### Example

<p data-height="265" data-theme-id="light" data-slug-hash="awWWee" data-default-tab="css,result" data-user="danhahn" data-embed-version="2" data-pen-title="class name selector" class="codepen">See the Pen <a href="https://codepen.io/danhahn/pen/awWWee/">class name selector</a> by Dan Hahn (<a href="https://codepen.io/danhahn">@danhahn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

---

## ID Name selector

An ID name selectors require an attribute of `id=""` to be added to an HTML element. An ID **name** must be given and that name will be used to connect the HTML and CSS. Only **one element per page can use an ID name** although there can be many different ID names on the same page.

### Example

<p data-height="265" data-theme-id="light" data-slug-hash="QgvgLr" data-default-tab="css,result" data-user="danhahn" data-embed-version="2" data-pen-title="id name selector" class="codepen">See the Pen <a href="https://codepen.io/danhahn/pen/QgvgLr/">id name selector</a> by Dan Hahn (<a href="https://codepen.io/danhahn">@danhahn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

---

## Limiting the scope

Because classes can be applied to many elements on a page there could be a case where the same class name is used on two or more different elements. One way to ensure that styles are applied only to the elements intended is limit the scope. For example you may have a class name of "firstLine" that is applied to both a P tag and an LI tag. The style you create would apply to both at the same time.

Since they are not the same it may be the case that you want to style each differently. By combining two of the basic selectors you can ensure that only the intended element is styled.

`tag.className`

When two selectors are combined without a space, as with the example above, the class will only applied to the HTML tag that has the class name.

### Example

<p data-height="265" data-theme-id="light" data-slug-hash="pwPwvx" data-default-tab="css,result" data-user="danhahn" data-embed-version="2" data-pen-title="Limit scope" class="codepen">See the Pen <a href="https://codepen.io/danhahn/pen/pwPwvx/">Limit scope</a> by Dan Hahn (<a href="https://codepen.io/danhahn">@danhahn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

In this example you can see there are two elements that have the class name of "firstLine". To limit the class "firstLine" only to P tags, we start with a tag name selector and append the class name.

This idea will work with any combination of the three basic selectors

```css
tag.className {
}
tag#idName {
}
#id.className {
}
.className.className2 {
}
```

## Context Selectors

Context selectors use the HTML structure to target elements to be styled. Context selectors can use any combination of the three basic selectors.

<iframe height='663' scrolling='no' title='context selector' src='//codepen.io/danhahn/embed/ZyKyeN/?height=663&theme-id=light&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/danhahn/pen/ZyKyeN/'>context selector</a> by Dan Hahn (<a href='https://codepen.io/danhahn'>@danhahn</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
