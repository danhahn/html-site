---
title: Lesson 7
lesson: HTML Tables
author: Dan Hahn
date: 3/14/2018 15:00
template: article.jade
lessonId: 7
order: 3

nav:
  Background: index.html
  Tables: tables.html
---

An HTML table is defined with the `<table>` tag.

| Tag          | Description                                                               |
| ------------ | ------------------------------------------------------------------------- |
| `<table>`    | Defines a table                                                           |
| `<th>`       | Defines a header cell in a table                                          |
| `<tr>`       | Defines a row in a table                                                  |
| `<td>`       | Defines a cell in a table                                                 |
| `<caption>`  | Defines a table caption                                                   |
| `<colgroup>` | Specifies a group of one or more columns in a table for formatting        |
| `<col>`      | Specifies column properties for each column within a `<colgroup>` element |
| `<thead>`    | Groups the header content in a table                                      |
| `<tbody>`    | Groups the body content in a table                                        |
| `<tfoot>`    | Groups the footer content in a table                                      |

Each table row is defined with the `<tr>` tag. A table header is defined with the `<th>` tag. By default, table headings are bold and centered. A table data/cell is defined with the `<td>` tag.

```html
<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
```

## HTML Table - Cells that Span Many Columns

To make a cell span more than one column, use the `colspan` attribute:

```html
<table style="width:100%">
  <tr>
    <th>Name</th>
    <th colspan="2">Telephone</th>
  </tr>
  <tr>
    <td>Bill Gates</td>
    <td>55577854</td>
    <td>55577855</td>
  </tr>
</table>
```

## HTML Table - Cells that Span Many Rows

To make a cell span more than one row, use the rowspan attribute:

```html
<table style="width:100%">
  <tr>
    <th>Name:</th>
    <td>Bill Gates</td>
  </tr>
  <tr>
    <th rowspan="2">Telephone:</th>
    <td>55577854</td>
  </tr>
  <tr>
    <td>55577855</td>
  </tr>
</table>
```

## HTML Table - Adding a Border

If you do not specify a border for the table, it will be displayed without borders.

A border is set using the CSS border property:

```css
table,
th,
td {
  border: 1px solid black;
}
```

## HTML Table - Collapsed Borders

If you want the borders to collapse into one border, add the CSS border-collapse property:

```css
table {
  border-collapse: collapse;
}
```

## HTML Table - Adding Cell Padding

Cell padding specifies the space between the cell content and its borders.

If you do not specify a padding, the table cells will be displayed without padding.

To set the padding, use the CSS `padding` property:

```css
th,
td {
  padding: 15px;
}
```
