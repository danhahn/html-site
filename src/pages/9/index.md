---
title: Lesson 9
index: true
lesson: Forms
author: Dan Hahn
date: 4/04/2018 15:00
template: article.jade
lessonId: 9

downloads:
  labels: [Download Stater File]
  files: ['./week9.zip']
nav:
  Forms: index.html
  Javascript: javascript.html
badges: [html, js]
---

This week we will be talking about forms and JavaScript.

<span class="more"></span>

## form

The `<form>` tag is used to create an HTML form for user input.

The `<form>` element can contain one or more of the following form elements:

<table class="w3-table-all notranslate" id="table1">
  <tbody><tr>
    <th style="width:20%">Attribute</th>
    <th style="width:37%">Value</th>
    <th style="width:43%">Description</th>
  </tr>
  <tr>
    <td>action</td>
    <td><i>URL</i></td>
    <td>Specifies where to send the form-data when a form is submitted</td>
  </tr>
  <tr>
    <td>method</td>
    <td>get<br>
      post</td>
    <td>Specifies the HTTP method to use when sending form-data</td>
  </tr>
  <tr>
    <td>name</td>
    <td><i>text</i></td>
    <td>Specifies the name of a form</td>
  </tr>
  <tr>
    <td>target</td>
    <td>_blank<br>
      _self<br>
      _parent<br>
      _top</td>
    <td>Specifies where to display the response that is received after submitting the form</td>
  </tr>
</tbody></table>

```html
<form action="/action_page.php" method="get">
  First name: <input type="text" name="fname"><br>
  Last name: <input type="text" name="lname"><br>
  <input type="submit" value="Submit">
</form>
```

## input

The `<input>` tag specifies an input field where the user can enter data.

`<input>` elements are used within a `<form>` element to declare input controls that allow users to input data.

An input field can vary in many ways, depending on the type attribute.

<table class="w3-table-all notranslate">
  <tbody><tr>
    <th style="width:22%">Attribute</th>
    <th style="width:37%">Value</th>
    <th style="width:41%">Description</th>
  </tr>
  <tr>
    <td>checked</td>
    <td>checked</td>
    <td>Specifies that an `<input>` element should be pre-selected when the page loads (for `type="checkbox"` or `type="radio"`)</td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>disabled</td>
    <td>Specifies that an `<input>` element should be disabled</td>
  </tr>
  <tr>
    <td>maxlength</td>
    <td><i>number</i></td>
    <td>Specifies the maximum number of characters allowed in an `<input>` element</td>
  </tr>
  <tr>
    <td>name</td>
    <td><i>text</i></td>
    <td>Specifies the name of an `<input>` element</td>
  </tr>
  <tr>
    <td>placeholder</td>
    <td><i>text</i></td>
    <td>Specifies a short hint that describes the expected value of an `<input>` element</td>
  </tr>
  <tr>
    <td>readonly</td>
    <td>readonly</td>
    <td>Specifies that an input field is `read-only`</td>
  </tr>
  <tr>
    <td>required</td>
    <td>required</td>
    <td>Specifies that an input field must be filled out before submitting the form</td>
  </tr>
  <tr>
    <td>size</td>
    <td><i>number</i></td>
    <td>Specifies the width, in characters, of an `<input>` element</td>
  </tr>
  <tr>
    <td>type</td>
    <td>button<br>
      checkbox<br>
 color<br>
      date <br>
 email <br>
      file<br>
      hidden<br>
      image<br>
      password<br>
      radio<br>
      range <br>
      reset<br>
      submit<br>
      text<br>
    </td>
    <td>Specifies the type `<input>` element to display</td>
  </tr>
  <tr>
    <td>value</td>
    <td><i>text</i></td>
    <td>Specifies the value of an `<input>` element<b><br>
 &nbsp;</b></td>
  </tr>

</tbody></table>

<p data-height="650" data-theme-id="light" data-slug-hash="vWJXgj" data-default-tab="html,result" data-user="danhahn" data-embed-version="2" data-pen-title="Form Elements" class="codepen">See the Pen <a href="https://codepen.io/danhahn/pen/vWJXgj/">Form Elements</a> by Dan Hahn (<a href="https://codepen.io/danhahn">@danhahn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## select

The `<select>` element is used to create a drop-down list.

The `<option>` tags inside the `<select>` element define the available options in the list.

<table class="w3-table-all notranslate">
  <tbody><tr>
    <th style="width:20%">Attribute</th>
    <th style="width:20%">Value</th>
    <th style="width:60%">Description</th>
  </tr>
  <tr>
    <td>disabled</td>
    <td>disabled</td>
    <td>Specifies that a drop-down list should be disabled</td>
  </tr>
  <tr>
    <td class="html5badge">form</td>
    <td><i>form_id</i></td>
    <td>Defines one or more forms the select field belongs to</td>
  </tr>
  <tr>
    <td>multiple</td>
    <td>multiple</td>
    <td>Specifies that multiple options can be selected at once</td>
  </tr>
  <tr>
    <td>name</td>
    <td><i>name</i></td>
    <td>Defines a name for the drop-down list</td>
  </tr>
    <tr>
    <td class="html5badge">required</td>
    <td>required</td>
    <td>Specifies that the user is required to select a value before submitting the form</td>
    </tr>
  <tr>
    <td>size</td>
    <td><i>number</i></td>
    <td>Defines the number of visible options in a drop-down list</td>
  </tr>
</tbody></table>

## textarea

The `<textarea>` tag defines a multi-line text input control.

A text area can hold an unlimited number of characters, and the text renders in a fixed-width font (usually Courier).

The size of a text area can be specified by the cols and rows attributes, or even better; through CSS' height and width properties.

<p data-height="450" data-theme-id="light" data-slug-hash="LOjbGg" data-default-tab="html,result" data-user="danhahn" data-embed-version="2" data-pen-title="Form Elements select, textarea" class="codepen">See the Pen <a href="https://codepen.io/danhahn/pen/LOjbGg/">Form Elements select, textarea</a> by Dan Hahn (<a href="https://codepen.io/danhahn">@danhahn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
