---
title: Lesson 2
index: true
lesson: Anchor Tag
author: Dan Hahn
date: 1/31/2018 15:00
template: article.jade
lessonId: 2
order: 1

tags:
  html:
    label: html
    icon: fa fa-html5
    data : [strong, em, a, img]

labels: [Download Stater File]
attachments:
  - "./week2.zip"

nav:
  Link Tag: index.html
  Inline: inline.html
  Folder: folders.html
  Images: images.html
  Image Types: image-types.html
  Embed: embed.html
  Homework: homework.html
badges: [html]
---

This week we will talk about how to create links and embed images.

<span class="more"></span>

The anchor tag or the `<a>` tag is most commonly used to create a link to an other file or page. The anchor tag by default will not act as a link without the `href` attribute.

The anchor tag can also be used to set a point on a page where the page can be linked to. You might see this on an FAQ page where you have a list of questions at the top and the answers at the bottom.

Please note there is not a link tag. If someone askes you to create a link they are talking about the anchor tag.

## Example

```html
<a href=”http://www.sva.edu”>http://www.sva.edu</a>
```

**or**

```html
<a name="pointname">Page Content</a>
```

### Description

| Attributes | Value    | Description                                                                       |
| ---------- | -------- | --------------------------------------------------------------------------------- |
| `href=""`  | URL      | The target URL of the link                                                        |
| `target`   | `_blank` | Where to open the target URL. `_blank` - the target URL will open in a new window |

---

## Parts of a link

There are two parts to create a link

1.  The text or content the user can click on
2.  The location of the page the user will have the page replace.

### Example

```html
<a href="location/of/file.html">Clickable text</a>
```

#### Breaking it down

Lets start with the `<a>` which is added to create the anchor. Next we need to add the `href` **attribute** to make the anchor act as a _link_. Then we wrap the text we want the user to click on with the `<a>`. Last we add the location of the page we want to link to.

If we had the text **HTML at SVA** and wanted to link to the web page _http://www.svahtml.com_ the link would look like this.

```html
<a href="http://www.svahtml.com">HTML at SVA</a>
```

Keep in mind that the `<a>` is an inline element so it can be placed next to other text.

If you want a link to be on its own line it would need to wrapped with a Block-Level element like a `<p>`.

---

## Linking to a file in the same folder

When you link to a file that is in the same folder just add the file name to the HREF attribute.

```html
<a href="filename.html">Link Text</a>
```

## Linking to a file in a sub folder

When linking to a file in a sub folder you need to declare what folder you are navigating to then add the file.

```html
<a href="folder/filename.html">Link Text</a>
```

## Linking to a file in a parent folder

When linking a file in a parent folder you need to add `"../"` for each folder you want to navigate up. You do not need the folder name when navigating up.

```html
<a href="../filename.html">Link Text</a>
```

## Linking to an outside site

When linking to an outside site you need to add the full URL including the `http://`.

```html
<a href="http://www.svahtml.com">Link Text</a>
```

## Linking to a point with a page.

The link add the "#" that says look on the page for a A tag with a name that matches the text after the #.

```html
<a href="#sectionName">Link to section</a>
```

The point on the page you are linking to.

```html
<a name="sectionName"></a>
```

## Images as a link

### Example

```html
<a href=”http://www.cnn.com”><img src=”/images/cnnlogo.png” alt=”link to cnn” border=”0”/></a>
```

## Adding Target

There will be time what you want open a page in a new window. By adding the `target="_blank"` attribute it will force that page to open in a new window or tab.

**Note:** How the page open can not be controlled it is a setting of the browser. In most cases it will open in a new tab.

[Read More](http://css-tricks.com/use-target_blank/) about when you should use `target`

<style>
table tr td:nth-child(1){width:20%}
</style>
