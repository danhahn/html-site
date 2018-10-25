---
title: Lesson 4
lesson: CSS Includes
author: Dan Hahn
template: article.jade
lessonId: 4
order: 3
---

Up to this point we have just used an internal style block.  While this works well for one off pages the style in each block must be recreated on every additaional page.  A better way would be to create once file and include it on every page.  This way when a change needs to be made it only needs to happen once.

There are two ways we can include a css file on to an html page.

## Create a CSS file

To create a css file you will need to

1. File > New File
1. File > Save As...
1. Name the file with a `.css` extention

An example of what this file might look like could be something like `all-pages.css`.

The same rules apply for linking to a css file as for images or links.

Often stylesheets are located in a `/css/` folder.

NOTE: When linking to a file from a css file the path are relative to where the css file is saved not the file that is including the file.

## Link Tag

The `<link>` is an html tag that will be added to the `<head>` of your html document.  It should be placed in the `<head>` to ensure that all styles are loaded in to the browser before any html content.  By loading the CSS file first the browser knows how the content should look at the time of render.

```html
<link rel="stylesheet" href="/css/all-pages.css">
```

### Parts of the `<link>`

Tag/Attribute | Description
---|---
`<link>` | **Tag** specifies relationships between the current document and an external resource. This element is most commonly used to link to stylesheets.
`rel` | *attribute* The rel stands for "relationship", and is probably one of the key features of the `<link>` element — the value denotes how the item being linked to is related to the containing document.
`href` | *attribute* Just like the `<a>` tag defines where the file is located.

NOTE: Their are many types of `rel` here is a full list <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types" target="_blank">Link Types</a>

It is valid to load more that one CSS file in to an HTML document.  The file loaded last has the greatest weight in the event of a tie of selector weight.

## @import

There are cases where you are not able to update the html file but still need to include a css file.  This is very common if you are using a tool like WordPress.  In this case you will need to include the css file within an other CSS file.

```css
@import '/css/all-pages.css';

body {
  background-color: blue;
}
```

`@import` should only be used as a last resort.  The page will load slower because the way the browser is able to load multiple files at the same time using the `<link>` but not with `@import`