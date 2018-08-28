---
title: Week 5
lesson: CSS Transitions
lessonId: 5
order: 4
---

CSS transition allow the browser to "animate" from one state to another and back.  This can be triggered by a number of different types of event like `:hover`, `:focus` or adding a class name via JavaScript.

The browser will calculate the differance in styles from the "default" state to the "active" state based on the properties defined in the "default" state.

<iframe height='400' scrolling='no' title='Transitions ' src='//codepen.io/danhahn/embed/bxexEV/?height=400&theme-id=light&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/danhahn/pen/bxexEV/'>Transitions </a> by Dan Hahn (<a href='https://codepen.io/danhahn'>@danhahn</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

As seen in the example above not all properties will be "animated" in this case `text-align: center;` will go directly to the `center` ;

## CSS Transition Properties

The following table lists all the CSS transition properties:

Property | Description
---|---
**transition** | A shorthand property for setting the four transition properties into a single property
**transition-delay** | Specifies a delay (in seconds) for the transition effect
**transition-duration** | Specifies how many seconds or milliseconds a transition effect takes to complete
**transition-property** | Specifies the name of the CSS property the transition effect is for
**transition-timing-function** | Specifies the speed curve of the transition effect

### transition-timing-function property

The transition-timing-function property can have the following values:

* `ease` - specifies a transition effect with a slow start, then fast, then end slowly (this is default)
* `linear` - specifies a transition effect with the same speed from start to end
* `ease-in` - specifies a transition effect with a slow start
* `ease-out` - specifies a transition effect with a slow end
* `ease-in-out` - specifies a transition effect with a slow start and end
* `cubic-bezier(n,n,n,n)` - lets you define your own values in a cubic-bezier function

<iframe height='400' scrolling='no' title='transition-timing-function' src='//codepen.io/danhahn/embed/PdzyeO/?height=400&theme-id=light&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/danhahn/pen/PdzyeO/'>transition-timing-function</a> by Dan Hahn (<a href='https://codepen.io/danhahn'>@danhahn</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The following example shows the some of the different speed curves that can be used:

```css
.div1 {transition-timing-function: linear;}
.div2 {transition-timing-function: ease;}
.div3 {transition-timing-function: ease-in;}
.div4 {transition-timing-function: ease-out;}
.div5 {transition-timing-function: ease-in-out;}
```