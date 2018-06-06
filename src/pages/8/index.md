---
title: Lesson 8
index: true
lesson: Web Fonts
author: Dan Hahn
date: 3/28/2018 15:00
template: article.jade
lessonId: 8
order: 1

nav:
  Web Fonts: index.html
  Google Fonts: google-fonts.html
  Responsive: responsive.html
  Picture Tag: picture.html
  Classwork: classwork.html

downloads:
  labels: [Download Stater File]
  files: ['./week8.zip']

tags:
  html:
    label: html
    icon: fa fa-html5
    data : [picture, source, img]
  css:
      label: css
      icon: fa fa-css3
      data : [font-family, font-face, media]
badges: [html,css]
---

This week we will talk about adding Google Fonts, responsive and the `<picture>` tag.

<span class="more"></span>

## Font families recap

As we looked at in Fundamental text and font styling, the fonts applied to your HTML can be controlled using the font-family property. This takes one or more font family names, and the browser travels down the list until it finds a font it has available on the system it is running on:

```css
p {
  font-family: Helvetica, "Trebuchet MS", Verdana, sans-serif;
}
```

This system works well, but traditionally web developers font choices were limited. There are only a handful of fonts that you can guarantee to be available across all common systems — the so-called Web-safe fonts. You can use the font stack to specify preferrable fonts, followed by web-safe alternatives, followed by the default system font, but this adds overhead in terms of testing to make sure that your designs look ok with each font, etc.

## Web fonts

But there is an alternative, which works very well, right back to IE version 6. Web fonts are a CSS feature that allows you to specify font files to be downloaded along with your website as it is accessed, meaning that any browser that supports web fonts can have exactly the fonts you specify available to it. Amazing! The syntax required looks something like this:

First of all, you have a `@font-face` block at the start of the CSS, which specifies the font file(s) to download:

```css
@font-face {
  font-family: "myFont";
  src: url("myFont.ttf");
}
```

Below this you can then use the font family name specified inside `@font-face` to apply your custom font to anything you like, as normal:

```html
html {
  font-family: "myFont", "Bitstream Vera Serif", serif;
}
```

**There are two important things to bear in mind about web fonts:**

- Browsers support different font formats, so you'll need multiple font formats for decent cross browser support. For example, most modern browsers support WOFF/WOFF2 (Web Open Font Format versions 1 and 2), the most efficient format around, but older versions of IE only support EOT (Embedded Open Type) fonts, and you might need to include an SVG version of the font to support older versions of iPhone and Android browsers. We'll show you below how to generate the required code.
- Fonts generally aren't free to use. You have to pay for them, and/or follow other license conditions such as crediting the font creator in the code (or on your site.) You shouldn't steal fonts and use them without giving proper credit.

Below are all the supported non web fonts. If the font you want to use is not listed below you will need to use a web font. While you can set up your own hosted fonts there are [services that will host and serve your fonts for you](https://www.smashingmagazine.com/2010/10/review-of-popular-web-font-embedding-services/). Many of them are free. In our next section we we will talk about how to use [Google Fonts](google-fonts.html).

### Serif Fonts

<table class="w3-table-all notranslate">
<tbody><tr>
<th style="width:55%">font-family</th>
<th>Example text</th>
</tr>
<tr>
<td>Georgia, serif</td>
<td><h2 style="margin-top:0px;font-family: Georgia, serif">This is a heading</h2><p style="margin-bottom:0px;font-family: Georgia, serif">This is a paragraph</p></td>
</tr>
<tr>
<td>"Palatino Linotype", "Book Antiqua", Palatino, serif</td>
<td><h2 style="margin-top:0px;font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif">This is a heading</h2><p style="margin-bottom:0px;font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif">This is a paragraph</p></td>
</tr>
<tr>
<td>"Times New Roman", Times, serif</td>
<td><h2 style="margin-top:0px;font-family: 'Times New Roman', Times, serif">This is a heading</h2><p style="margin-bottom:0px;font-family: 'Times New Roman', Times, serif">This is a paragraph</p></td>
</tr>
</tbody></table>

### Sans-Serif Fonts

<table class="w3-table-all notranslate">
<tbody><tr>
<th style="width:55%">font-family</th>
<th>Example text</th>
</tr>
<tr>
<td>Arial, Helvetica, sans-serif</td>
<td><h2 style="margin-top:0px;font-family: Arial, Helvetica, sans-serif;">This is a heading</h2><p style="margin-bottom:0px;font-family: Arial, Helvetica, sans-serif;">This is a paragraph</p></td>
</tr>
<tr>
<td>"Arial Black", Gadget, sans-serif</td>
<td><h2 style="margin-top:0px;font-family: Arial Black, Gadget, sans-serif;font-weight:normal;">This is a heading</h2><p style="margin-bottom:0px;font-family: Arial Black, Gadget, sans-serif">This is a paragraph</p></td>
</tr>
<tr>
<td>"Comic Sans MS", cursive, sans-serif</td>
<td><h2 style="margin-top:0px;font-family: 'Comic Sans MS', cursive, sans-serif">This is a heading</h2><p style="margin-bottom:0px;font-family: 'Comic Sans MS', cursive, sans-serif">This is a paragraph</p></td>
</tr>
<tr>
<td>Impact, Charcoal, sans-serif</td>
<td><h2 style="margin-top:0px;font-family: Impact, Charcoal, sans-serif;font-weight:normal">This is a heading</h2><p style="margin-bottom:0px;font-family: Impact, Charcoal, sans-serif">This is a paragraph</p></td>
</tr>
<tr>
<td>"Lucida Sans Unicode", "Lucida Grande", sans-serif</td>
<td><h2 style="margin-top:0px;font-family: 'Lucida Sans Unicode', 'Lucida Grande', sans-serif">This is a heading</h2><p style="margin-bottom:0px;font-family: 'Lucida Sans Unicode', 'Lucida Grande', sans-serif">This is a paragraph</p></td>
</tr>
<tr>
<td>Tahoma, Geneva, sans-serif</td>
<td><h2 style="margin-top:0px;font-family: Tahoma, Geneva, sans-serif">This is a heading</h2><p style="margin-bottom:0px;font-family: Tahoma, Geneva, sans-serif">This is a paragraph</p></td>
</tr>
<tr>
<td>"Trebuchet MS", Helvetica, sans-serif</td>
<td><h2 style="margin-top:0px;font-family: 'Trebuchet MS', Helvetica, sans-serif">This is a heading</h2><p style="margin-bottom:0px;font-family: 'Trebuchet MS', Helvetica, sans-serif">This is a paragraph</p></td>
</tr>
<tr>
<td>Verdana, Geneva, sans-serif</td>
<td><h2 style="margin-top:0px;font-family: Verdana, Geneva, sans-serif">This is a heading</h2><p style="margin-bottom:0px;font-family: Verdana, Geneva, sans-serif">This is a paragraph</p></td>
</tr>
</tbody></table>

### Monospace Fonts

<table class="w3-table-all notranslate">
<tbody><tr>
<th style="width:55%">font-family</th>
<th>Example text</th>
</tr>
<tr>
<td>"Courier New", Courier, monospace</td>
<td><h2 style="margin-top:0px;font-family: 'Courier New', Courier, monospace">This is a heading</h2><p style="margin-bottom:0px;font-family: 'Courier New', Courier, monospace">This is a paragraph</p></td>
</tr>
<tr>
<td>"Lucida Console", Monaco, monospace</td>
<td><h2 style="margin-top:0px;font-family: 'Lucida Console', Monaco, monospace">This is a heading</h2><p style="margin-bottom:0px;font-family: 'Lucida Console', Monaco, monospace">This is a paragraph</p></td>
</tr>
</tbody></table>
