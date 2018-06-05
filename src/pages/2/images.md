---
title: Lesson 2
lesson: Images
author: Dan Hahn
date: 1/31/2018 15:00
template: article.jade
lessonId: 2
order: 4

nav:
  Link Tag: index.html
  Inline: inline.html
  Folder: folders.html
  Images: images.html
  Image Types: image-types.html
  Embed: embed.html
  Homework: homework.html
---

The image tag or `<img>` is used to embed an image within an `HTML` document. At the time the page is rendered the browser will set aside a space on the page for an image to load. The browser then need to find and load the image in that space. If the iamge can't be found than it will not show up. There are two required attribute.

| Attributes              | Values                                                                                                                               |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `src=""` **\*required** | The source of the image that you want to place on the page.                                                                          |
| `alt=""` **\*required** | The alt tag is where you can put text that will show up when the image is loading or when the user hovers the mouse over that image. |
| `title=""`              | Displays the value of the attribute in a small box over the image when the mouse hovers over the image.                              |

## Example

```html
<img src=”logo.gif”>
```

## Adding the Alt Attribute

HTML **requires** that you add an alt attribute to all images tags. This attribute is used for persons with visual impairments and use screen readers to view the internet. If there is text with in an image that text must be placed with the alt attribute. While the attribute is required there is no need to place text within the value unless there is text on the image. This can be a little misleading.

```html
<img src="image.gif" alt="text on the image">
```

**or**

```html
<img src="image.png" alt="">
```

## Formats

There are **3 image types** that are supported by current browsers.

* GIF – Limited to 256 Colors but one color can be transparent. (Used for Text based images ie Logos or headers)
* JPG – Allows for Millions of colors compressed. (Most commonly used for photos)
* PNG – Like the JPG but allows for opacities. (Supported by all newer browsers after IE 6)

## Transparency

Transparency is an important for two reasons. They allow for complex designs by layers images. They also allow for non-rectangular designs.

The only image type that support transparency are GIF and PNG.

## Animation

GIF are able to display multiple images with in the same saved files.

<style>
table tr td:nth-child(1){white-space: nowrap}
</style>
