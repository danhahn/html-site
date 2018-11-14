---
title: Lesson 7
lesson: Picture Tag
template: article.jade
lessonId: 7
order: 2
---

## Responsive Images

Images are not a one size fits all.  In the past we could load one image and it would display on any screen size.  Sure it might be a little bigger than it needs to be but so what every one has broadband.  This is what everyone was saying in 2008. Then this little thing called the iPhone came out and everything changed.  There was a push to make the web responsive and to use the right size image for the right device.  Media query allow you to look at the screen size and change the styles based on it.

Introducing the `<picture>` element.  This is a wrapper element that allows the source of the image to be replaced based on a media query.

<iframe height='374' scrolling='no' title='Picture Element' src='//codepen.io/danhahn/embed/wYyZyd/?height=374&theme-id=light&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/danhahn/pen/wYyZyd/'>Picture Element</a> by Dan Hahn (<a href='https://codepen.io/danhahn'>@danhahn</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Definition and Usage

The `<picture>` tag gives web developers more flexibility in specifying image resources.

The most common use of the `<picture>` element will be for art direction in responsive designs. Instead of having one image that is scaled up or down based on the viewport width, multiple images can be designed to more nicely fill the browser viewport.

The `<picture>` element holds two different tags: one or more `<source>` tags and one `<img>` tag.

The `<source>` element has the following attributes:

* `srcset` (required) - defines the URL of the image to show
* `media` - accepts any valid media query that would normally be defined in a CSS
* `sizes` - defines a single width descriptor, a single media query with width descriptor, or a comma-delimited list of media queries with a width descriptor
* `type` - defines the MIME type

The browser will use the attribute values to load the most appropriate image. The browser will use the first `<source>` element with a matching hint and ignore any following `<source>` tags.

The `<img>` element is required as the last child tag of the `<picture>` declaration block. The `<img>` element is used to provide backward compatibility for browsers that do not support the `<picture>` element, or if none of the `<source>` tags matched.

The `<picture>` element works similar to the `<video>` and `<audio>` elements. You set up different sources, and the first source that fits the preferences is the one being used.

```html
<picture>
  <source media="(min-width: 650px)" srcset="img_pink_flowers.jpg">
  <source media="(min-width: 465px)" srcset="img_white_flower.jpg">
  <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
</picture>
```
