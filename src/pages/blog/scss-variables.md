---
title: SASS Variables
date: "2017-11-09"
description: 
featuredImage: https://res.cloudinary.com/dvj2hbywq/image/upload/v1550930072/potrait.jpg
tags: ["css", "sass"]
---
If you have no idea what SASS is, you should read [this article](https://dev.to/sarah_chima/sass--getting-started-bbc).
One of the awesome things about the Sass preprocessor is the ability to use variables. This is not limited to Sass alone and even recently variables in CSS was introduced. Our focus here, though, is how they can be used in Sass. If you have no idea of what variables are, they are simply used to store data. First though, let us understand why variables are awesome.
<b>NB</b>: I'll be using Sass and SCSS interchangeably in this article as SCSS is a newer version of Sass and I'll be using the syntax of SCSS. 

<b>Why Variables?</b>
Imagine you have used a particular color many times in a CSS file and you want to change this color. How will you do this? Find and replace? Well, you don't have to if you made use of a variable. You just need to update the value of the variable and this automatically changes it everywhere.
Any property that will be repeated in a code such as a color or a size, usually benefits from being declared with a variable. This makes it easier and faster for the developer to makes changes. Variables are reusable and thus makes your code easy to maintain and change.

<h3><b>Using Variables</b></h3>
In Scss, variables are declared by using any variable name preceded by a dollar sign, and are set like CSS properties.

```cSS
/* SCSS */
$height: 2rem;
```

`$height` can be used anywhere in your code.

```cSS
/* SCSS */
$height: 2rem;

.button {
    height: $height;
}
```
This will be compiled to 

```css
.button {
    height: 2rem; }
```

Let's do some more, this time with colors. 


```css
/* SCSS */
$gray: #a1a1a4;
$blue: #00aeef;
$red: #c05d5d;

.button-success {
    background-color: $blue;
}

.button-danger {
    background-color: $red;
}
```
This will be compiled to

```css
.button-success {
    background-color: #00aeef; }

.button-danger {
    background-color: #c05d5d; }

```
If ever I want to change the color code of any of these colors, I'll simply change it once and it will update everywhere I have used it.

<b>What can be stored with variables?</b>

SCSS accepts eight data types that can be stored as variables. From the Sass documentation they are:

<ul>
    <li>numbers (e.g. 2.4, 15, 10px)</li>
    <li>strings of text, with and without quotes (e.g. "foo", 'bar', baz)</li>
    <li>colors (e.g. blue, #04a3f9, rgba(255, 0, 0, 0.5))</li>
    <li>booleans (e.g. true, false)</li>
    <li>nulls (e.g. null)</li>
    <li>lists of values, separated by spaces or commas (e.g. 2.5em 3em 0 4em, Helvetica, Arial, sans-serif)</li>
    <li>maps from one value to another (e.g. (key1: value1, key2: value2))</li>
    <li>function references</li>
</ul>

That's a whole of things that can be stored with SCSS variables. If you don't understand why some data types can be stored as variables, sooner or later, you might see their relevance.If you want to find out how data types can be used check the [Sass Documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#Variables_____variables_).

Before we go any further, I think we should consider something important when using variables: scope.

<h3><b>Scope of SASS variables</b></h3>

The scope of a variable simply means where a variable is available for use. In SCSS, there are two scopes:  global scope and local scope. If a variable has a global scope, it means it is available for use everywhere. A local scope is bounded by `{}`. So if a variable is declared within a `{}` and thus has a local scope, it is only available for use within that scope. Let's use examples to explain this.

```css
/* SCSS */
$width: 30px;

.button {
    $fontSize: 16px;
    font-size: $fontSize;
    width: $width;
}

.dropdown {
    width: $width;
}
```
This will be compiled to

```css
.button {
    font-size: 16px;
    width: 30px; }

.dropdown {
    width: 30px; }
```
Which of these variables have global scope? Did you say `$width`? If you did, you are correct. That is why it is available to both the `.button` and `.dropdown` class. 
The `$fontSize` variable on the other hand, has a local scope. It is only available within `button` and any other selector nested within it. If we try to use `$fontSize` in `dropdown`, we will get an error `Undefined variable: "$font-size"`.

Local variables take precedence over global variables. That is, if the same variable is declared globally and also within a local scope and is used within the local scope, the value of the variable will be that assigned to it within the local scope. So in our example above, let's re-declare `$width` within `.dropdown`, what will the width of the dropdown be? Let's find out.

```css
/* SCSS */
$width: 30px;

.dropdown {
    $width: 50px;
    width: $width;
}
```
This will be compiled to

```css
.dropdown {
    width: 50px; }
```

So that explains it. The width becomes that of its local scope. 

<b>The !global flag</b> 
It is possible to make variables that are declared locally to have a global scope. We use the `!global` flag to achieve this. Let's go back to our earlier example and try to use a variable declared in `.button` in `.dropdown` but this time with a `!global` flag.

```css
/* SCSS */
$width: 30px;
.button {
    $fontSize: 16px !global; 
    font-size: $fontSize;
    width: $width;
}

.dropdown {
    font-size: $fontSize;
    width: $width;
}
```
This will be compiled to

```css
.button {
    font-size: 16px;
    width: 30px; }

.dropdown {
    font-size: 16px;
    width: 30px; }
```
No error was returned this time. The `!global` flag just made `$fontSize` available for use everywhere. Let's consider another flag next.

<b>The !default flag</b>

When the `!default` flag is used when assigning a variable, we are simply saying that if this variable is not assigned elsewhere, make use of this value. It makes a value to act as a fallback. This can come in handy if we are creating custom variables that will be reused. Let's use an example. 

```css
$brand-color: #00aeef !default;
$brand-background: #000000 !default;
``` 
So if this variables don't get re-assigned elsewhere, these default values will be used.

It is also possible to check if a variable exists using a SCSS function `variable-exists()`. This will be better understood when functions are discussed.

There's a lot that can be done with SCSS variables. The more you use them, the more you see their uses. 

Got any question or addition? Leave a comment.

Thank you for reading. :)