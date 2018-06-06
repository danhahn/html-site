---
title: Lesson 4
index: true
lesson: Basic Style Properties
author: Dan Hahn
date: 2/14/2018 15:00
template: article.jade
lessonId: 4
order: 1

nav:
  Font Properties: index.html
  Text Properties: text.html
  Include CSS File: include.html
  Borders: borders.html
  Padding and Margin: padding-margin.html
  Homework: homework.html
labels: [Download Stater File]
attachments:
  - "./week4.zip"
badges: [css]
---

This week We will dive back into CSS and talk about text, font, borders, margin and padding.

<span class="more"></span>

When styling fonts with CSS they are broken into two types. **Font** properties and **Text** properties. The two are very similar, the **Font** deals more with the character set and the **Text** is more about changing the way the font looks.

## Font Properties

| Property             | Values                                                                                                              |
| -------------------- | ------------------------------------------------------------------------------------------------------------------- |
| font:\* <br>required | style variant weight size/line-height family<br> example: `font:bold 12px/2 verdana, "Lithos Regular", sans-serif;` |
| font-style:          | normal, italic                                                                                                      |
| font-variant:        | normal, small-caps                                                                                                  |
| font-weight:         | normal, bold                                                                                                        |
| font-size:\*         | length, percent                                                                                                     |
| line-height:         | normal, length, percent                                                                                             |
| font-family:\*       | Arial ,"Arial Black", "Courier New", Impact, "Lucida Sans Unicode", Tahoma, Verdana                                 |

**\*required**

When styling fonts with CSS they are broken into two types. **Font** properties and **Text** properties. The two are very similar, the **Font** deals more with the character set and the **Text** is more about changing the way the font looks.

---

`font` - is a shorthand way to express any font propertiesx on one line. When using the shorthand the order matters. There are two required properties, font-size and font-family.

```css
font: italic small-caps bold 12px arial, verdana;
```

If you do not define a property within the shorthand it will be set to the default state often normal. It could be the case that in the case of `h1` where the default is for the text to be bold that when using the shorthand and not setting the `font-weight` it will be sent to `normal` and the `h1` will no longer be bold even though we did not set it.

---

`font-style` will define if something will be italic. If something is italic by default like the `em` you can also set the `font-style` to be `normal` and it will remove the italics.

```css
font-style: italic;
```

---

`font-variant` will set the text to be `small-caps` where the “lowercase” letters will be displayed as small uppercase letters.

```css
font-variant: small-caps;
```

---

`font-weight`will define text that is bold. If something is bold by default like `h2` you can remove the bold by setting the value to `normal`.

```css
font-weight: bold;
```

---

`font-size` - set the size of the font.

While there are a number of options to define what the size can be we use only three options. We will use **percent**, **em**, or **pixel**.

Both percent and em calculate the size of the font off of another font size. For example if a font size set to `10px` and wanted to have the text be **twice as large** you could set the size to be `2em` or `200%`, This will calculate size to be `20px` but if the font size where to change to `12px` it would then calculate the size to `24px`. The advantage of this is you only need to **change the one font** and all the other fonts will change in relation to that size.

Since we **can’t** measure what an inch is on a computer screen we can’t use it. That also means that we **can’t** use point because `1 points` is defined as `1/72 inch`. The fact that we do not know what an inch is it we can not calculate what a point is. Instead you should always define **font sizes in pixels, percent or em**.

```css
font-size: 12px;
font-size: 2em;
font-size: 200%;
```

### CSS Units

| Unit | Description                                             |
| ---- | ------------------------------------------------------- |
| %    | a percentage of something                               |
| in   | \*_inch_                                                |
| cm   | \*_centimeter_                                          |
| mm   | \*_millimeter_                                          |
| em   | one em is equal to the font size of the current element |
| pt   | \*_point (1 pt is the same as 1/72 inch)_               |
| pc   | \*_pica (1 pc is the same as 12 points)_                |
| px   | pixels (a dot on the computer screen)                   |

\*_Should not be used when viewing on a computer screen. Should only be used when printing_

---

`font-family` - defines what font is displayed when the page is rendered. The `font-family` can only load a font that is installed on the **local computer** viewing the page. This means we are limited in the fonts that installed on both the Mac and Windows computers by default.

```css
font-family: helvetica, arial, “time new roman”;
```

**Note:** any font name that has a _space_ in needs to be quoted(“).

If you want to use a font that may not be fully supported but have a fall back you can put them in a comma separated list. If the first item in the list is not available it will try the next font in the list. If no font is available it will display the browser default.

| Type             | Name                                                                                                                                                                                                                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Serif Fonts      | Georgia, serif<br>"Palatino Linotype", "Book Antiqua", Palatino, serif<br>"Times New Roman", Times, serif                                                                                                                                                                                              |
| Sans-Serif Fonts | Arial, Helvetica, sans-serif <br>"Arial Black", Gadget, sans-serif<br>"Comic Sans MS", cursive, sans-serif<br>Impact, Charcoal, sans-serif<br>"Lucida Sans Unicode", "Lucida Grande", sans-serif<br>Tahoma, Geneva, sans-serif<br>"Trebuchet MS", Helvetica, sans-serif<br>Verdana, Geneva, sans-serif |
| Monospace Fonts  | "Courier New", Courier, monospace<br>"Lucida Console", Monaco, monospace                                                                                                                                                                                                                               |

<style>
table tr td:nth-child(1){width:20%}
td .label {margin-right: 4px;cursor: pointer;}
</style>

<script src="lesson5.js"></script>
