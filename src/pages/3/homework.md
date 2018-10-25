---
title: Lesson 3
lesson: Homework
author: Dan Hahn
date: 2/7/2018 15:00
template: article.jade
lessonId: 3
order: 4

nav:
  Intro to CSS: index.html
  Selectors: selectors.html
  CSS3 Reference: css.html
  Homework: homework.html
homework:
  lesson: lesson3

labels: [Homework Files]
attachments:
  - "./homework3-text.txt"
---

## Goals of this homework

1.  Use HTML tags from other homework
2.  Start to get comfortable with the format of CSS
3.  Use tag name selector
4.  Use class name selector
5.  Use id name selector

In this homework you will be writing styles support the HTML that was provided. There is
no need to make any changes to HTML.

## Use HTML template

Copy the HTML form the text file provided and Paste in the body of your template.
Add Style tag with in the Head tag. (all styles will be added here)
Add the following style to the Style tag that was just added.

---

### Tag Name Selectors

body

<pre class="text-content">
  font-family - arial
  font-size - 16px
  background-color - <span style="color: #3a7f7f;">#3a7f7f</span>
</pre>

h1

<pre class="text-content">
  color - <span style="color: #ffffff;;background-color:#000;padding:2px;">#ffffff</span>
  margin - 0
</pre>

h2

<pre class="text-content">
  color - <span style="color: #3a7f7f;">#3a7f7f</span>
</pre>

h3

<pre class="text-content">
  color - <span style="color: #4b4b4b;">#4b4b4b</span>
</pre>

p

<pre class="text-content">
  line-height - 1.5em
  color - <span style="color: #333333;">#333333</span>
</pre>

---

### Class Name Selector

.container

<pre class="text-content">
  width - 1000px
</pre>

.header

<pre class="text-content">
  background-color - <span style="color: #4b4b4b;">#4b4b4b</span>
  padding - 1em
</pre>

.navigation

<pre class="text-content">
  background-color - <span style="color: #ead967;">#ead967</span>
  padding - 1em
</pre>

.navItem

<pre class="text-content">
  color - <span style="color: #4b4b4b;">#4b4b4b</span>
  text-decoration - none
  font-weight - bold
</pre>

.hero-image

<pre class="text-content">
  margin - 0
</pre>

.content

<pre class="text-content">
  background-color - <span style="color: #e8e8e8;background-color:#000;padding:2px;">#e8e8e8</span>
  padding - 1em
</pre>

.footer

<pre class="text-content">
  background-color - <span style="color: #ff9060;">#ff9060</span>
  padding - 1em
  text-align - right
</pre>
