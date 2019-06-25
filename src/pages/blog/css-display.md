---
title: "CSS Property: Display"
date: "2019-06-25"
description: "Learn about common display values in CSS"
featuredImage: https://res.cloudinary.com/dvj2hbywq/image/upload/v1561426476/Group_26_zv2l83.png
tags: ["CSS"]
---


The display property is one of the most commonly used properties in CSS. 

Every HTML element on a web page is a rectangular box. The display property determines how these boxes will behave.
Display is CSS's most important property for controlling layout. Every element has a default display value depending on what type of element it is. The default value for most elements is usually `block` or `inline`.

Here are some commonly used display values:

```CSS
    div {
        display: inline;       
        display: inline-block;  
        display: block;        
        display: none;                
    }
```

Let us discuss each of them.

### Display: Inline
This is the default value for many HTML elements.

Inline elements are displayed side by side (in line or horizontally) on a page. They take only as much space as needed on a page. They do not accept width or height properties and top or bottom margin/padding. Wrapping text in this element does not break the flow of the text.

Some examples are `span`, `em`, `b`. 

```html
<p> The sky above is <span> blue.</span>
    <b><i>Roses</i></b> are <span> red.</span>
</p>
```

It will result in the following (styles added by me for clarity).
<div style="background-color: #e0e0e0; padding: 20px">
    <p> The sky above is <span style="color: blue"> blue.</span>
        <b><i>Roses</i></b> are <span style="color: red"> red.</span>
    </p>
</div>

###Display: Inline-block

Inline-block elements are like inline elements but they have width or height properties. Top and bottom margin/padding are also respected. A common use of this display value is in placing navigation elements side by side.

```html
<ul>
    <li>Home</li>
    <li>About</li>
    <li>Blog</li>
    <li>Contact</li>
</ul>

<style>
    ul {
        padding: 0;
        list-style-type: none;
        background-color: #e0e0e8;
    }

    li {
        display: inline-block;
        padding: 10px 20px;
    }
</style>

```
This will result in: 

<ul class="ul-example">
    <li>Home</li>
    <li>About</li>
    <li>Blog</li>
    <li>Contact</li>
</ul>

<style>
    .ul-example {
        padding: 0;
        list-style-type: none;
        background-color: #e0e0e8;
    }

    .ul-example li {
        display: inline-block;
        padding: 20px 20px 10px;
    }
</style>
###Display: Block

Block level elements always start a new line and take up the full width(horizontal space) available. This display type also allows us to specify the width and height of the element. With `display:block`, the new element always starts on a new line. It cannot be used to wrap elements around other elements.

Examples of elements with default block display type are `<p>`, `<h1>` - `</h6>`, `<div>`, `<form>`, `<section>` etc.

```html
    <p>This is a block level element<p>
    <span>Hello</span>
    <div> I am another block element</div>
```

This will result in:
<div style="background-color: #e0e0e0; padding: 10px 20px 20px;">
   <p style>This is a block level element<p>
    <span>Hello</span>
    <div> I am another block element</div>
</div>

###Display: None
This display type is used to visually hide elements from the user interface without deleting the element. It is also ignored by screen readers. Let us repeat the previous example, this time giving the span a style of display: none.


```html
    <p>This is a block level element<p>
    <span style="display: none">Hello</span>
    <div> I am another block element</div>
```
This will result in: 

<div style="background-color: #e0e0e0; padding: 10px 20px 20px;">
   <p>This is a block level element<p>
    <span style="display: none">Hello</span>
    <div> I am another block element</div>
</div>

###CONCLUSION
Other display values are grid and flexbox. These are broad topics we cannot discuss in short notes. However, they are both used for controlling the layout of a page. They are much more powerful than other display types used for positioning elements. They can shrink and stretch elements. They can centre content. They can be used to reorder elements and also align elements. While `display: grid` is container-based, `display: flex` is content based. 

There are tons of articles and courses where you can learn about these layouts. Here are some:

[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

[Basic concepts of flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

[Learn CSS Grid with Wes Bos](https://cssgrid.io/)

[A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

Follow my journey on [Instagram](https://www.instagram.com/sarah_codes_/) where I post regularly on software engineering tips.
