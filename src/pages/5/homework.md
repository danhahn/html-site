---
title: Lesson 5
lesson: Homework
lessonId: 5
order: 5

homework:
  lesson: lesson5
labels: [Homework Files]
attachments:
  - "./yourname_homework5.zip"

---

## Getting Started

This week we will be working

1. Adding the correct width to an element
1. Use flex box to create a navigation
1. Add `:hover` to the items in the nav
1. Adding Google Font

Download the starter file and rename the folder to `yourname_homework5`.  In the folder you will fine the html and css files.  You will need to `<link>` the html and css together.  Once you have it linked you will see some of the styles for the page.  You will need fill in the missing styles.

### Setting the width

First thing we need to do is set the width of the page to be the correct width.  We want the `.wrapper` to have a width of `1000px` with padding of `1em` on all sides.

In the header there is an image that should fill up the whole width of the `.wrapper`.

```css
.wrapper {
  width: 1000px;
  padding: 1em;
}
```

Adjust the display so the `.wrapper` is exactly `1000px` when it displays.

### Styling the Nav

We need to style the navigation using `flex-box`. The nav has a class of `.main-nav`.  Remember that flex box has a parent to direct descendant relationship.  Make sure you put the `flex` on the correct element.

On the flex parent add this.

```css
display: flex;
```

On the flex child add this.

```css
flex: 1;
```

You will need to create the selectors as well as adjust the styles to remove any default styles that might appear.

### Adding Hover

Now that we have the nav set up and aligned correctly we need to add a hover to the items on the nav.  Right When you move your mouse any of the nav items there is no visual change to show were you are.  We want to add a `:hover` to the link to change the background color.

Create a selector to target the link in the navigation and add these styles when you "hover"

```css
background-color: #00b3ff;
color: #000000
```

### Adding Google Font

We want to add the "Chela One" font to our `h2`.  To do this we need to go to https://fonts.google.com/ and select "Chela One".  Once selected you will need to follow the instructions to add the font to this page.

Add the style just he `h2` in the `.main-content`.