---
title: Lesson 4
lesson: Borders
author: Dan Hahn
date: 2/14/2018 15:00
template: article.jade
lessonId: 4
order: 4

nav:
  Font Properties: index.html
  Text Properties: text.html
  Include CSS File: include.html
  Borders: borders.html
  Padding and Margin: padding-margin.html
  Homework: homework.html
---

Every element has a border weather it is seen or not. The border is the extreme edge of that element.

The makeup of any border has three parts.

* style
* width
* color

When creating a border only the _style_ is **required\***. If not set the _color_ of the border will be **whatever the current color is**. If no _size_ is defined the size will be `3px`.

### Border

| Property      | Values                                                                                   |
| ------------- | ---------------------------------------------------------------------------------------- |
| border:       | **border-width** **border-style** **border-color**<br>example: border:1px solid #000066; |
| border-width: | length, percent                                                                          |
| border-style: | none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset                |
| border-color: | color                                                                                    |

### Border Top

| Property          | Values                                                         |
| ----------------- | -------------------------------------------------------------- |
| border-top:       | **border-top-width** **border-top-style** **border-top-color** |
| border-top-width: | border-width                                                   |
| border-top-style: | border-style                                                   |
| border-top-color: | border-color                                                   |

### Border Right

| Property            | Values                                                               |
| ------------------- | -------------------------------------------------------------------- |
| border-right:       | **border-right-width** **border-right-style** **border-right-color** |
| border-right-width: | border-width                                                         |
| border-right-style: | border-style                                                         |
| border-right-color: | border-color                                                         |

### Border Bottom

| Property             | Values                                                                  |
| -------------------- | ----------------------------------------------------------------------- |
| border-bottom:       | **border-bottom-width** **border-bottom-style** **border-bottom-color** |
| border-bottom-width: | border-width                                                            |
| border-bottom-style: | border-style                                                            |
| border-bottom-color: | border-color                                                            |

### Border Left

| Property           | Values                                                            |
| ------------------ | ----------------------------------------------------------------- |
| border-left:       | **border-left-width** **border-left-style** **border-left-color** |
| border-left-width: | border-width                                                      |
| border-left-style: | border-style                                                      |
| border-left-color: | border-color                                                      |

### Border Radius

| Property       | Values          |
| -------------- | --------------- |
| border-radius: | length, percent |

## Border

Borders can be set on all four sides of the table by using `border-style`, `border-width`, `border-color`.

```css
border-style: solid;
border-color: red;
border-width: 10px;
```

CSS also allows for a _shorthand_ way of writing borders. By using `border` you can set all **three** properties on one line.

The order matters when defining but there are two current valid ways to define.

The old way was to define the size, style then color.

```css
border: 10px solid black;
```

The new way is to set the style, color then size.

```css
border: solid black 10px;
```

Both are valid but you should use the later since it is the current defined way to set a border.

## Border-\*

If you need to set or change a border on just one side of a box you can do so by using `border-*` where \* would be left, right, top or bottom.

```css
border-top: solid blue 20px;
border-right: dotted green 2px;
border-bottom: double;
border-left: solid #ff0033 1px;
```

If you want to change just one aspect of a border on just one side of the box you can do so.

```css
border-left-color: red;
border-bottom-size: 30px;
border-top-style: dotted;
```

## border-radius

Border Radius will add rounded corners to an element

```css
border-radius: 10px;
```

<style>
table tr td:nth-child(1){width:40%}
td .label {margin-right: 4px;cursor: pointer;}
</style>
