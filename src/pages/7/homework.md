---
title: Lesson 7
lesson: Homework
author: Dan Hahn
date: 3/14/2018 15:00
template: article.jade
lessonId: 7
order: 4

homework:
  lesson: lesson7

downloads:
  labels: [Homework Files]
  files: ['./homework7_yourname.zip']
nav:
  Background: index.html
  Tables: tables.html
  Homework: homework.html
---

The point of this homework is to work on add background images and adding and styling tables.

## Getting Started

Download the starter file that contains

- 1 html file
- 1 css file
- 1 images folder with 3 images in it.

You will need to link the CSS to the HTML using the `<link>` tag. Once you connect the CSS you will notice that some of the styles have been pre written for you.

### Things to do in this homework.

1.  Add a `background` to the `header`
2.  Use `flexbox` to align the navigation
3.  Create a table
4.  Style the table
5.  Add hover state to nav
6.  Add `background` to the `body`

## Adding background to Header

In the images folder you will find a image `header.png` this should be set as a background for the element with `.banner` class. You will need to set a height of `height: 200px` and set the border color to be `#FDB927`. Use flex box to center the `h1` in the center of the header. The `h1` will have a font size of `4em` and a `text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);`

## Nav Bar

The `.navbar` element will use `#83a6be` and `#415863` for the background and border. You will need to use `flexbox` to align the content on its own row and centered.

When you `:hover` over the links you will need to add `flake.png` as a `background-image` that is centered within the `a`.

## Table

Use this content to build a table with a class of `chart`. Make sure you use the `th` for the headers and `td` for the table data.

---

<pre>
GSB Cities
The 2017 - 2018 Snow Season Normal
Average to Date
This Time Last Season
Normal Seasons Average
All Time Season Snowfall Record
Syracuse    76.3  59.8  67.4  123.8 192.1 inches (1992 - 1993)
Rochester   62.5  43.8  49.6  99.5  161.7 inches (1959 - 1960)
Buffalo     51.6  50.1  33.9  94.7  199.4 inches (1976 - 1977)
Binghamton  24.9  36.2  59.5  83.4  135.2 inches (2016 - 2017)
Albany      19.9  26.2  15.3  60.2  112.5 inches (1970 - 1971)
</pre>

---

## Style the table

The table will have a border that is `#415863` and background that is `#ffffff`. Both the `th` and `td` will have a border on the bottom with this color `#415863` and padding of `.5em`. The `th` will have a background that is `#374a52` you will also need to update the text color.

The first column of the table needs to be `120px` wide and the next 4 columns must be `140px`. The cell that is "featured" needs to be `#b11c3f`.

## Adding background to the body

Last we need to add a background to the body of the page. Use `background.jpg`, it should be fixed and centered on the page. It should have a `background-size` of cover.

To allow the content to be transparent to see the background of the page you will need to add `background-color: rgba(255, 255, 255, 0.7)` to the `.container`. To add the drop shadow add `box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5)`.
