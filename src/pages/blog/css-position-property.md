---
title: "Learn the Basics: The CSS Position Property"
date: "2020-06-11"
description: Learn about the CSS position property and its values.
featuredImage: https://res.cloudinary.com/dvj2hbywq/image/upload/v1591873454/pankaj-patel-4oAFasAPftg-unsplash_famvdv.jpg
tags: ["css", "javascript"]
---

To be super good at CSS you need to understand the basics of CSS. You have to understand CSS properties and their values. I know this is important, that's why I'm starting a series called "Learn the Basics". In each article of this series, I'll discuss one CSS property and provide concise but insightful details on it.

On today's episode of learning the basics of CSS, we focus on the CSS position property. We are going to learn the various values of the CSS position property and how they work. Let's do this!

### What is the CSS position property?
The CSS position property defines the position of an element in a document. This property works with the left, right, top,  bottom and z-index properties to determine the final position of an element on a page. 

There are five values the position property can take. They are:

1. static
2. relative
3. absolute
4. fixed
5. sticky

Let's discuss each one of them.

### Static

This is the default value for elements. The element is positioned according to the normal flow of the document. The left, right, top, bottom and z-index properties do not affect an element with `position: static`.

Let's use an example to show that `position: static` has no effect on the position of an element. We have three divs placed in a parent container. We'll use this example throughout this article.

```html
<html>
	<body>
        <div class="parent-element">
            <div class="sibling-element">
                I'm the other sibling element.
            </div>
            
            <div class="main-element">
                All eyes on me. I am the main element.
            </div>
            
            <div class="sibling-element">
                I'm the other sibling element.
            </div>
        </div>
    </body>
<html>
```

Let's add `position: static` to the div with the class `main-element` and left, top values to it. We also add some styles to the other divs to differentiate them from the element in focus.

```css
.main-element {
    position: static;
    left: 10px;
    bottom: 10px;
    background-color: yellow;
    padding: 10px;
}

.sibling-element {
    padding: 10px;
    background-color: #f2f2f2;
}

```

This is the result.

<iframe width="100%" height="300" src="//jsfiddle.net/sarahchima/4vsm3o1d/5/embedded/result,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

Did you notice that it there's no change? This confirms the fact that the left and bottom properties do not affect an element with `position: static`.

Let's move to the next value.

### Relative

Elements with `position: relative` remains in the normal flow of the document. But, unlike static elements, the left, right, top, bottom and z-index properties affect the position of the element. An offset, based on the values of left, right, top and bottom properties, is applied to the element relative to itself. 

Let's replace `position: static` with `position: relative` in our example.

```css
.main-element {
    position: relative;
    left: 10px;
    bottom: 10px;
    background-color: yellow;
    padding: 10px;
}
```

<iframe width="100%" height="300" src="//jsfiddle.net/sarahchima/78tbavnu/14/embedded/result,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

Notice that the left and bottom properties now affect the position of the element. Also notice that the element remains in the normal flow of the document and the offset is applied relative to itself. Take note of this as we move on to other values.

### Absolute
Elements with `position: absolute` are positioned relative to their parent elements. In this case, the element is removed from the normal document flow. The other elements will behave as if that element is not in the document. No space is created for the element in the page layout. The values of left, top, bottom and right determine the final position of the element.

One thing to note is that an element with `position: absolute` is positioned relative to its closest positioned ancestor. That means that the parent element has to have a position value other than `position: static`. If the closest parent element is not positioned, it is positioned relative to the next parent element that is positioned. If there's no positioned ancestor element, it is positioned relative to the `<html>` element.

Let's get back to our example. In this case, we add change the position of the main element to `position: absolute`. We will also give its parent element a relative position so that it does not get positioned relative to the `<html>` element.

```css
.main-element {
    position: absolute;
    left: 10px;
    bottom: 10px;
    background-color: yellow;
    padding: 10px;
}

.parent-element {
    position: relative;
    height: 100px;
    padding: 10px;
    background-color: #81adc8;
}

.sibling-element {
	background: #f2f2f2;
	padding: 10px;
    border: 1px solid #81adc8;
} 
``` 

Here's the result.

<iframe width="100%" height="300" src="//jsfiddle.net/sarahchima/5qyp4m2z/5/embedded/result,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

Notice that no space was created in the document for the element. The element is now positioned relative to the parent element. Take note of this as we move on to the next value.

### Fixed
Fixed position elements are similar to absolutely positioned elements. They are also removed from the normal flow of the document. But unlike absolutely positioned element, they are always positioned relative to the `<html>` element. One thing to note is that fixed elements are not affected by scrolling. They always stay in the same position on the screen.

```css
.main-element {
    position: fixed;
    bottom: 10px;
    left: 10px;
    background-color: yellow;
    padding: 10px;
}

html {
    height: 800px;
}
```

<iframe width="100%" height="300" src="//jsfiddle.net/sarahchima/L4gsxwft/2/embedded/result,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

In this case, the element is positioned relative to the `<html>` element. Try scrolling to see that the element gets fixed on the screen.

Let's move to the final value.


### Sticky
`position: sticky` is a mix of `position: relative` and `position: fixed`. It acts like a relatively positioned element until a certain scroll point and then it acts like a fixed element. Have no fear if you don't understand what this means, the example will help you to understand it better.

```css
.main-element {
    position: sticky;
    top: 10px;
    background-color: yellow;
    padding: 10px;
}

.parent-element {
    position: relative;
    height: 800px;
    padding: 50px 10px;
    background-color: #81adc8;
}
```

<iframe width="100%" height="300" src="//jsfiddle.net/sarahchima/f3m0qxgn/8/embedded/result,css/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

Scroll on the result tab to see the result. You see it acts as a relative element until it gets to a certain point on the screen, `top: 10px` and then it gets there just like a fixed element.

### Summary

Whoops! That has been quite a ride. But I really hope this article helped you to understand the CSS position property and how it works. Feel free to play around with the fiddles if you don't fully understand any of them. You can change the values and notice the difference or better still try to use the position property to work on a personal project. 

Remember that getting better at CSS takes constant practice. So keep practising and you'll get better.