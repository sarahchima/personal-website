---
title: An Introduction to CSS Variables 
date: "2017-12-05"
description: An introduction to CSS variables/ Custom Properties
tags: ["css"]
---

One feature that makes preprocessors like Sass and Less appealing is the ability to use variables with them. Recently, I wrote an article on [SASS Variables](https://dev.to/sarah_chima/sass-variables-2pb) and explored the how variables can make our CSS a whole lot maintainable. Guess who has the ability to use variables too? Our very own CSS. What this means is that we don't have to use any preprocessor to make use of variables. 

In CSS, variables are referred to as <b>custom properties</b>. Typing the word "variables" sometimes is easier than "custom properties" so I'll use them interchangeably throughout this article. This article discusses how CSS variables are declared and used. First, let's understand the problem CSS variables solve. 

<h3><b>The Problem</b></h3>

Values tend to be repeated in CSS files to keep the look of an app consistent. These values could be colors or even font-sizes. Remembering such values is not always easy. I mean, it's easier to remember the name of a color than the color code. If such values are stored in variables and can be called by just the name of the variables, life becomes much easier.

Another problem occurs when you want to change these values. Say you've been using a wrong color all along and you want to change all instances of that color. While find and replace might seem to be the perfect solution, it is not always ideal, especially in large CSS files. If the color is stored in a variable, you only need to change it once and it affects all properties where it has been used.

<b>Why use CSS variables instead?</b>
But why CSS variables?  Why not just use a preprocessor for it. Here are some reasons:

1. You don't need a preprocessor to use them. Yeah, this is a valid reason.
2. They cascade. Unlike in preprocessors, you can set a variable in any selector to set or override the current value. So there is no scope for using CSS variables.
3. They can be used with media-queries to create responsive properties.
4. They can be changed at runtime. That means you can use JavaScript to access and manipulate CSS variables.


Now that we have considered all of these, let's see how CSS variables can be used.

<h3><b>Using CSS Variables</b></h3>

To use CSS variables we have to know two things:
1. How to declare a CSS variable.
2. How to use a CSS variable.

Let's start with the first.

<b>The Syntax for Custom Properties</b>

The syntax for declaring custom properties is quite straightforward. Here's an example.

```CSS
    --primary-color: #00AEEF;
```
We just declared a custom property. Here are some things you should note about the syntax of custom properties.

1. The name of a custom property must always be preceded by two dashes i.e `--`. 
2. Custom properties are case sensitive. So `--primary-color` is different from `--Primary-color`. 


Now that we know that, let's move on to discuss an important feature of custom properties.

<b>The Cascade</b>
Custom properties follow the normal cascading rules, so the same property can be defined or set at the different levels of specificity. It is important to note that custom properties do inherit. So if no value is set for a custom property on a given element, it inherits that of its parent. Look at an example.

```CSS 
    :root { --color: blue}
    div { --color: green}
    p{ --color: red}
    
    * { color: var(--color)}
```
In the example above, the `div` and `p` element uses the color value re-assigned to the `--color` variable. Other elements which are not children of the `div` and `p` element will use the color of the `:root` pseudo-class which is their parent. 

The cascade is important as it what enables us to set different values for the same variable with media queries. This is not possible with preprocessors. Let's use an example. 

```CSS
    --width: 80%
    @media screen and (min-width: 768px) and (max-width: 1020px) {
        --width: 60%;
    }
    @media screen and (min-width: 1020px) {
        --width: 40%
    }
```
The variable `--width` is assigned different values and whenever that variable is used, the appropriate value for each screen size is used. This makes CSS variables extremely useful and aids responsive design. Enough about the syntax, let's move to the part where we actually use it.

<b>Using CSS Variables </b>
To use declared variables, we use the `var()` function. You might have seen in the first example in this article. What the `var()` function does is to take a variable and replace itself with the value of that variable. Here's an example.

```CSS
    --padding: 10px 20px;
    
    div {
        padding: var(--padding);
    }
```
`var(--padding)` will be replaced with the `10px 20px`. The actual syntax for the `var` function is this:

```CSS
    var(<custom-property-name> [, <declaration-value> ]? )
```
Where `custom-property-name` is the name of the already declared variable like `--padding` in the previous example and `<declaration-value>` is a fallback value, i.e. a value that should be used if the referenced custom property is invalid. Look at an example below.

```CSS
    p {
        font-family: var(--primary-font,  "sans-serif")
    }
```
So if the value of `--primary-font` is invalid or maybe it was never declared, the fallback font `sans-serif` is used. It is also possible to use more than one value as fallbacks. These values are separated by a comma. Let's rewrite our previous example.

```CSS
    p {
        font-family: var(--primary-font, "Lato", "Roboto", "sans-serif")
    }
```
However in cases of shorthand values, like those used with margin and padding, the comma is not used to separate them. So an appropriate fallback is this:

```CSS
    p {
        margin: var(--margin, 10px 20px 5px)
    }
```
There's no need to separate them with commas. 

<b>With the Calc() function</b>
Custom properties can also be used with the CSS `calc()` function, this makes it more fun to use. The calc function is used to perform calculations in CSS. Let's see how it can be used with Custom properties.

```CSS
    :root {
        --margin: 2rem;
    } 

    div {
        margin: calc(var(--margin) * 2);
    }
    
    p {
        margin: var(--margin)
    }
```

<h3><b>Browser Support</b></h3>

Currently Chrome 49, Edge 16, Firefox 42, Safari 9.1 and iOS Safari 9.3 support custom properties.

To find out more about CSS variables, here are some good articles on it.
[CSS Variables: Why you should care?](https://developers.google.com/web/updates/2016/02/css-variables-why-should-you-care)
[CSS Variables — No, really!](https://medium.com/dev-channel/css-variables-no-really-76f8c91bd34e)
[Why I'm Excited About Native CSS Variables](https://philipwalton.com/articles/why-im-excited-about-native-css-variables/)

Got any question or addition? Leave a comment.

Thank you for reading. :)