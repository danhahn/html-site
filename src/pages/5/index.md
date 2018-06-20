---
title: Lesson 5
index: true
lesson: CSS Box Model
lessonId: 5
order: 1

labels: [Download Stater File]
attachments:
  - "./week5.zip"

badges: [css]
---

This week we will be talking about the CSS Box Model, Psedudo Classes, Google Fonts and Flex Box.

<span class="more"></span>

Since Everything on in web design is a rectangular box we need to know how to size that box. The way that CSS calculates the size of a box is not what you expect. Rather than set the size of the box based on the outer most elements `border` or `padding` the width is set baed on the content.

### Setting a width

To set the width of an element you take the desired width and subtract the `padding-left`, `padding-right`, `border-left-width` and `border-right-width`. If you need to maintain the `margin` you will need to subtract the `margin-left` and `margin-right`.

### Example

If we have an element that needs to fit in to a space that is `400px` and it has `padding: 20px` and `border: 5px solid black` the calculation to find the size would look like this.

```html
400px - 20px -20px - 5px - 5px = 350px
```

### Example

<iframe height='800' scrolling='no' title='Box Model' src='//codepen.io/danhahn/embed/MoQNbO/?height=734&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/danhahn/pen/MoQNbO/'>Box Model</a> by Dan Hahn (<a href='https://codepen.io/danhahn'>@danhahn</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Box Sizing

In CSS, by default, the width and height you assign to an element is applied only to the element's content box. If the element has any border or padding, this is then added to the width and height to arrive at the size of the box that's rendered on the screen. This means that when you set width and height you have to adjust the value you give to allow for any border or padding that may be added. This is especially tricky when implementing a responsive design.

The `box-sizing`property can be used to adjust this behavior:

```css
.example {
  box-sizing: border-box;
}
```

- `content-box` is the default, and gives you the default CSS box-sizing behavior. If you set an element's width to 100 pixels, then the element's content box will be 100 pixels wide, and the width of any border or padding will be added to the final rendered width.
- `border-box` tells the browser to account for any border and padding in the value you specify for width and height. If you set an element's width to 100 pixels, that 100 pixels will include any border or padding you added, and the content box will shrink to absorb that extra width. This typically makes it much easier to size elements.

## Apply to all elements

The `*` selector will apply a style to all elements. `box-sizing` is a great example of time to use it.

```css
* {
  box-sizing: border-box;
}
```

Now all elements on the page will size based on a `border-box`.
