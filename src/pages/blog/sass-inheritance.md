---
title: The Goodness of SASS Inheritance
date: "2017-11-21"
description: 
tags: ["css", "sass"] 
---


Organizing and maintaining large stylesheets becomes harder and more complex as stylesheets grow larger. Sass comes with a lot of features that makes maintaining such stylesheets easier. If you are new to Sass, you should definitely read [this article]() on it.

One awesome feature of Sass is the ability of selectors to inherit styles from another selector. To do this, we use the `@extend` directive. It's pretty amazing when you to use. Let's do that using a simple example.
 

```css
.foo {
    height: 30px;
}

.bar {
    @extend foo;
    width: 10px;
}

```
It's quite easy to use. It's similar to the way mixins are used but the magic happens when the SCSS is compiled. This is compiled to

```css
.foo, .bar {
    height: 30px; }

.bar {
    width: 10px; }

```
You notice that `.bar` inherits all the  of `.foo` and has its own properties. This reduces the amount of CSS code and thus reduces the file size. Let's use a more practical example.

Here, we want to create various buttons that have the same base styles but vary only in color. Instead of writing the properties over and over again, we'll create a base class that contains the common styles which each button contains and then each button inherits this styles. This is seen in the example below.

```css
.button {
    height: 30px;
    font-size: 16px;
    padding: 0 2rem; 
    border-radius: 4px;
}

.button-default {
    @extend .button;
    color: #404040;
    border: 1px solid #404040;
} 

.button-success {
    @extend .button;
    background: green;
    color: white; 
}

.button-danger {
    @extend .button;
    background: red;
    color: white;
}
    
```
This is compiled to

```css
.button, .button-default, .button-success, .button-danger {
    height: 30px;
    font-size: 16px;
    padding: 0 2rem;
    border-radius: 4px; }

.button-default {
    color: #404040;
    border: 1px solid #404040; }

.button-success {
    background: green;
    color: white; }

.button-danger {
    background: red;
    color: white; }

```
I guess we clearly know how to use the `@extend` directive for inheritance now. Note that you can extend other selectors like ids, tags, and even pseudo-classes. It is also possible to inherit the properties of a selector that inherited the properties of another selector. If that sounds confusing just look at the example below.

```css    
.button {
    height: 30px;
    font-size: 16px;
    padding: 0 2rem; 
    border-radius: 4px;
}

.button-default {
    @extend .button;
    color: #404040;
    border: 1px solid #404040;
} 

.button-default-blue {
    @extend .button-default;
    background: blue;
}

```
Here, the `button-default` inherits the properties of `button` while `button-default-blue` inherits the properties for `button-default`. This means that `button-default-blue` inherits the properties of both `button` and `button-default`. This is called chaining. 

The SCSS above is compiled to

```css
.button, .button-default, .button-default-blue {
    height: 30px;
    font-size: 16px;
    padding: 0 2rem;
    border-radius: 4px; }

.button-default, .button-default-blue {
    color: #404040;
    border: 1px solid #404040; }

.button-default-blue {
    background: blue; }
```
Let us now consider the good using inheritance can do to our stylesheets.

<h3>Advantages of Inheritance</h3>

1. <b>Allows for reusable CSS styles</b>
Duplication of styles in CSS occurs a lot. This is not good as it fills our stylesheets with unnecessary styles. Inheritance reduces duplication of CSS as styles that are shared by similar components are inherited and defined in the same place in our stylesheet. This leads to a more cleaner and maintainable stylesheet.

2. <b>Reduces amount of HMTL Classes used</b>
Another advantage of inheritance is that we don't have to write so many classes in our HTML. Let's use our button example above to explain this. Imagine if we did not use the `@extend` feature. Our HTML will look like this.

```HTML

<button class="button button-default">Example</button>
   
```
But with the inheritance, we'll use just one class. 

```HTML
<button class="button-default">Example</button>
```
Now, this may seem pretty small because we are using just two classes but it if you have to use many other classes, it gets messy. Like this below.

```HTML
 
<button class="button button-default button-default-blue button-default-disabled ">Example</button>
   
```
If inheritance is properly used, it clearly reduces the number of classes we use in our HTML code. This leads to a cleaner HTML code and one that is easy to debug and maintain. These advantages save time and effort for developers. Next, let's consider some general tips for using inheritance.

<h3>Tips for using Inheritance</h3>

1. <b>Use `@extend` for similar components</b>
This will keep your stylesheets sane. Like in our button example, we see that all classes there are similar and are variations of the button class. Imagine if a `li` or table-cell or any other unrelated component were to inherit these button properties. It might make it difficult to debug and maintain the CSS. 

2. <b>Do not overuse `@extend`</b> 
While `@extend` is a very useful feature, it should be used carefully. Overusing it might make our code difficult to maintain. For example, if we have a base class and have about 50 classes inheriting its properties any change in a property affects a lot of other classes. So it should not be overused. 

3. <b>When to use a mixin instead</b>
Sometimes we should use a mixin instead of an extension. If you don't understand what a mixin is, you can read [this article](https://dev.to/sarah_chima/sass-mixins-19a). The `@extend` directive doesn't support media queries and does not accept arguments. So if it necessary to use such features, use a mixin instead. Generally though, when those features are not necessary, inheritance is the way to go.

So inheritance is a delightful feature of Sass if used appropriately. 

Any question or addition? Please leave a comment.

Thank you for reading.