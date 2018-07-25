---
title: Lesson 7
lesson: Picture Tag
author: Dan Hahn
date: 3/28/2018 15:00
template: article.jade
lessonId: 7
order: 3

nav:
  Web Fonts: index.html
  Google Fonts: google-fonts.html
  Responsive: responsive.html
  Picture Tag: picture.html
  Classwork: classwork.html
---

## HTML `<picture>` Tag

How to use the `<picture>` tag:

```html
<picture>
  <source media="(min-width: 650px)" srcset="img_pink_flowers.jpg">
  <source media="(min-width: 465px)" srcset="img_white_flower.jpg">
  <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
</picture>
```

## Definition and Usage

The `<picture>` tag gives web developers more flexibility in specifying image resources.

The most common use of the <picture> element will be for art direction in responsive designs. Instead of having one image that is scaled up or down based on the viewport width, multiple images can be designed to more nicely fill the browser viewport.

The `<picture>` element holds two different tags: one or more `<source>` tags and one `<img>` tag.

The `<source>` element has the following attributes:

- `srcset` (required) - defines the URL of the image to show
- `media` - accepts any valid media query that would normally be defined in a CSS
- `sizes` - defines a single width descriptor, a single media query with width descriptor, or a comma-delimited list of media queries with a width descriptor
- `type` - defines the MIME type

The browser will use the attribute values to load the most appropriate image. The browser will use the first `<source>` element with a matching hint and ignore any following `<source>` tags.

The `<img>` element is required as the last child tag of the `<picture>` declaration block. The `<img>` element is used to provide backward compatibility for browsers that do not support the `<picture>` element, or if none of the `<source>` tags matched.
