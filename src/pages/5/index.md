---
title: Week 5
index: true
lesson: CSS Box Model
lessonId: 5
order: 1

labels: [Download Stater File]
attachments:
  - "./week5.zip"

badges: [css]
---

This week we will be talking about the CSS Box Model, Pseudo Classes, Google Fonts and CSS Transitions.

<span class="more"></span>

There are now two ways we can calculate the size of a box.  The original way a box was sized was based on the "content" of the box.  This is what is referred as the "CSS box model".

Lets say you have box and it can only take up `400px`.  If you add a `width: 400px;` to the element and measure the element it would be `400px`.  At this point the box does not have a border or padding so the content will go the edge of the element.

When you add `padding` to the box to move the content from the edge of the box the box model starts to show up.

```css
.box {
  width: 400px;
  padding: 20px;
}
```
Now if we were to measure the size of the box it would be `440px`.  Where did the `40px` extra come from?  We adding `padding: 20px` so that will add padding on all 4 sides of `20px` in other words we now have `40px` of adding from the left and right. The box model says that extra space should be add to the base width so we get `440px`.  What if the box can only take up the `400px` we need to do some math.

```css
.box {
  width: 360px;
  padding: 20px;
}
```

We need to subtract the left and right padding form the width defined in this case giving a new width of `360px`.

The same thing will happen with a border.  Lets add a border of `10px solid black` to the same box we had defined above.

```css
.box {
  width: 360px;
  padding: 20px;
  border: 10px solid black;
}
```

If we measure the box size now we will see it is `420px`.  We added a border of 10 on all sides of the box so an extra `20px` are added to the width.

```css
.box {
  width: 340px;
  padding: 20px;
  border: 10px solid black;
}
```

So lets look at we did here.  We started with a width of `400px` and added padding of `20px` on the left and right lastly added a border of `10px` on the left and right. to give us this calculation.

`400 - (20 + 20) - (10 + 10) = 340`

While this works its a lot of work to keep track and recalculate for every change.  The other problem and it might be bigger is that this does not work easily with an `em` value since they are relative.

### Example

<iframe height='800' scrolling='no' title='Box Model' src='//codepen.io/danhahn/embed/MoQNbO/?height=734&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/danhahn/pen/MoQNbO/'>Box Model</a> by Dan Hahn (<a href='https://codepen.io/danhahn'>@danhahn</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Box Sizing

In later version of CSS a new property was added to address this issue.  By default the size of the box is calculated based on the "content" of the box.  The `box-sizing` property allows you to define how you want to size a box.

The box-sizing property can be used to adjust this behavior:

* `content-box` - **default** gives you the default CSS box-sizing behavior. If you set an element's width to 100 pixels, then the element's content box will be 100 pixels wide, and the width of any border or padding will be added to the final rendered width.
* `border-box` tells the browser to account for any border and padding in the values you specify for an element's width and height. If you set an element's width to 100 pixels, that 100 pixels will include any border or padding you added, and the content box will shrink to absorb that extra width. This typically makes it much easier to size elements.

```css
.example {
  box-sizing: border-box;
}
```

## Apply to all elements

Since this can be so helpful we may want to apply it to all elements on the page at once.

The `*` selector will apply a style to all elements. `box-sizing` is a great example of time to use it.

```css
* {
  box-sizing: border-box;
}
```

Now all elements on the page will size based on a `border-box`.
