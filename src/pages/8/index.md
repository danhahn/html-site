---
title: Lesson 8
index: true
lesson: Final Project
template: final.jade
localcssEx: //fonts.googleapis.com/css?family=Homemade+Apple|Montserrat|Roboto+Mono
lessonId: 8
order: 1

nav:
  Final Project: index.html
  Pages: pages.html
badges: [html, css]
---

This week we work on the in class final.

<span class="more"></span>

Welcome to the final for Fall 2018. The idea of this final is to reinforce everything that we have learned this semester. I think the final project is fair, not easy but fair. Everything that is on the final we have covered in class. This is a project not a test. Try to keep that in perspective as you work on it. You are free to use all your notes, examples and any other tools that you need to complete the project.

Since this is a project and not a test I try to set it up as if I am your client. As you might know clients sometimes do not give you everything that you need. While I did my best to give you all the parts that you need I do not give you every little detail. I will try to give you an idea how to fill the gaps when this happens.

I will give a PSD and flat images for the pages that need to be coded but I might not give you examples for each page. This is often the case, you might be a design for one type of page i.e. a page with a table but not a design for every page that has a table.

### Timeline

You will have two full classes to complete the final project plus the time between the two classes. I would highly recommend that you do some work between classes to ensure you finish on time. Please email me a zip file with your final project in it by the end of the last class.

### Source of truth

This file is the source of truth for all content. Any PSD or JPG is only there to provide a visual guide on how things should look. Your project may not match the designs exactly.

### Final thought

Do your best. Have fun. Try not to stress to much and let me know if you have any questions.

### PSD

[![](https://res.cloudinary.com/svahtml/image/upload/c_scale,w_300/v1544624968/SVA_HTML_-_Summer_2018.png)](fall-2018.psd)

## Colors

There are a limited number of colors that are used in the design you can copy the **Hex** color below and use in your css.

> You can click on a color to copy to your clipboard

- \#c0c0c0
- \#333333
- \#004358
- \#50b7f1
- \#ffe11a
- \#ff951a
- \#ffffff
- \#b7b7b7
- \#7fcaf5

## Header Content

<pre class="text-content">
New York State
The Empire State
</pre>

## Nav Content

<pre class="text-content">
Home => index.html
History => history/index.html
Geography => geography/index.html
Major cities => cities/index.html
Demographics => demographics/index.html
Transportation => transportation/index.html
Sports => sports/index.html
</pre>

## Sizes

While I will not give you the sizes for the padding or margin they will always we defined in `em` and be a whole number value like `1em`;

### Font Sizes

For the body use

```css
font: 16px arial;
```

### Headline Sizes

Header Title

```css
font-size: 60px;
```

Header tagline

```css
font-size: 20px;
```

article h2

```css
font-size: 3em;
```

article h3

```css
font-size: 2em;
```

sidebar headline

```css
font-size: 1.5em;
```

sidebar box

```css
font-size: 14px;
```

## Copy

The copy for the final project can be found in the PDF. Note the copy in the PDF may not match the PSD in this case the PDF is correct.

### PDF

- [Copy for final](./final/fall-2018.pdf)

## Images

All the images for the project can be found in the zip file

### ZIP

- [Images](./final/images.zip)

## Google Fonts

The project uses a few Google Fonts. Add this code to your HTML file.

```html
<link
  rel="stylesheet"
  href="http://fonts.googleapis.com/css?family=Homemade+Apple|Montserrat"
/>
```

### Font-family

```css
font-family: "Montserrat", sans-serif;
font-family: "Homemade Apple", cursive;
```

### Example

<h2 style="font-family: 'Montserrat', sans-serif">font-family: 'Montserrat', sans-serif;</h2>

<h2 style="font-family: 'Homemade Apple', cursive">font-family: 'Homemade Apple', cursive;</h2>
