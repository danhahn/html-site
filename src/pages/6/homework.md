---
title: Lesson 6
lesson: Homework
author: Dan Hahn
date: 2/28/2018 15:00
template: article.jade
lessonId: 6
order: 5

nav:
  Float Layout: index.html
  Clear Fix: clear-fix.html
  Flex Box: flex.html
  Flex Layout: flex-layout.html
  Homework: homework.html
homework:
  lesson: lesson6
downloads:
  labels: [Homework Files]
  files: ['./homework6_yourname.zip']
---

The point of this homework is to work with flexbox and how to layout columns using it.

## Getting Started

Download the starter file. In the zipfile you will find

- 1 html file
- 1 css file
- images folder with all the images needed for the design.

After unzipping the file please rename the folder and files with your name. In the `html` file also update the `title` tag with your name.

## Updating styles

Within `style.css` we need to update a bunch of styles.

### Container width

`.wrapper` needs to have a max with of `1000px` we can this by adding a `max-width` property.

### Making flexible width images

All images (except `.logo`) need to have a variable width. Again we will use `max-width` but the value will be `100%`. This property will allow the image to get smaller in size but grow larger than the original size of the image. We also add `display: block;` to the images to remove a small space that is added due `img` being inline by default.

```css
.hero img {
  max-width: 100%;
  display: block;
}
```

Update the rest of the images to ensure they can resize if needed.

### Adding Flex

Next we need get the content that is vertically aligned to be horizontally aligned. There are two ways we can do this.

1.  float
2.  flexbox

Because flexbox is much more flexible we will use it for this homework but you could to the same with float (but will take 10 times more work).

Lets start with the `.global-nav`. In the provided css file you will find this selector

```css
.global-nav ul {
}
```

To get the content to align horizontally we just need to add `display: flex;` to the selector.

---

The "promo" and "more content" section will use the same idea but its a little more complex.

Again we will use `display: flex;` to align the content.

In the styles that are provided for this example there is a `margin-right: 1em;` that will add the "gap" between the columns. Notice there is a also a "gap" on the column all the way to the right (last column). We need to remove that since we want the columns to full up the full space.

We have a selector that will select just the "last" item in a element. `:last-child` If we set the margin right on just this element to `0` it will remove the extra space.

Now that extra space on the right is gone notice how all the columns are not the same with. The `flex` property will fix this for us. We need to add `flex: 1;` to the flex child.

Repeat this for the "more content"

Align the `.global-footer` as well.
