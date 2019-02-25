---
title: Sass Mixins
date: "2017-11-15"
description: 
tags: ["css", "sass"]
---

Sometimes in our projects, there are groups of CSS styles that are used over and over again. It could be vendor prefixes like `-webkit-`, `-moz-`, `-ms-` or maybe media queries. Writing such code gets tedious over time. Mixins help us with this.

<b>What is a Mixin?</b>
A mixin is a reusable chunk of CSS styles. It lets us group CSS declarations we might reuse throughout our site. It's quite simple to create and use them but they are really powerful and helps us to use many features available in many programming languages in CSS. In this article, we will explore the power of mixins. Let's start right away.

<b>How to Create a Mixin</b>
We create a mixin by using the `@mixin` directive followed by the name of the mixin. Then the chunk of styles we want it to contain is included in the curly braces after the name. See an example below.

```css
@mixin transform {
    -webkit-transform: scale(1.5);
    -moz-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.5);
}
```
We just created a mixin. `transform` is now reusable. So how do we reuse it? We use the `@include` directive to add it to other parts of our code like it is done below.

```css
.box {
    @include transform;
}
```
Now if it is compiled, it becomes

```css

.box {
    -webkit-transform: scale(1.5);
    -moz-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.5); }
```

Really simple. It gets quite interesting as we use it further.

<b>Using Arguments</b>
In the example above, notice we used a fixed value for the transform property i.e. `scale(1.5)`. What if we want to use a different value when the transform mixin is used? We can do that by passing an argument to the mixin. Yeah, we can use arguments in CSS too. This allows for more flexibility. For instance, in our example above, we can use whatever transform property we want to. Let's do that.

```css
@mixin transform ($value) {
    -webkit-transform: $value;
    -moz-transform: $value;
    -ms-transform: $value;
    transform: $value;
} 

.box {
    @include transform(skewY(1.5deg));
}
``` 
This will be compiled to

```css
.box {
    -webkit-transform: skewY(1.5deg);
    -moz-transform: skewY(1.5deg);
    -ms-transform: skewY(1.5deg);
    transform: skewY(1.5deg); }
```

Cool right? 

<b>Multiple arguments</b>

We are not limited to just one argument. We can use as many arguments as we want to in a mixin. The arguments are separated by a comma and they Let us do that.

```css
@mixin spacing ($margin, $border, $padding) {
    margin: $margin;
    border: $border;
    padding: $padding;
}

.box {
    @include spacing( 10px, 1px solid black, 15px )
}
```
This will be compiled to

```css
.box {
    margin: 10px;
    border: 1px solid black;
    padding: 15px; }
```

<b>Default values in arguments</b>

Arguments can be given defaults values too. These values act as fallbacks if no value is passed to the mixin when it is used. Let's pass default values to our `spacing` mixin above. 

```css
@mixin spacing ($margin, $border, $padding: 1rem) {
    margin: $margin;
    border: $border;
    padding: $padding;
}

.box {
    @include spacing( 10px, 1px solid black )
}
```
In the example above, we added a default value for `$padding`. Then when we used the mixin, we didn't pass any argument for the padding. When compiled, what will be the result?

```css
.box {
    margin: 10px;
    border: 1px solid black;
    padding: 1rem; }
```

So the padding uses the default value, but if a value is passed, it uses that value. It is important to note that arguments with default values should be added only after those without default values. So doing this in the example below is will result in an error.

```css
@mixin spacing ($margin , $padding: 1rem, $border) {
    margin: $margin;
    border: $border;
    padding: $padding;
}

.box {
    @include spacing( 10px, 5px, 1px solid black )
}
```
So far we have seen how we can create and use mixins and also how can use it with arguments.

<b>Variable Arguments in SASS</b>

Sometimes we need an argument to take more than one value. For instance, properties like padding or margin can take from one to four values. To do this, we use variable arguments. Variable arguments allow us to pass variables as a list. They are like regular arguments only that they have `...` at the end to indicate it can accept a list. Mixins treat these values as variables instead of a list. Let us use an example.

```css
@mixin margin ($margin...) {
    margin: $margin;
}

.box1 {
    @include margin(10px);
}
.box2 {
    @include margin(10px 20px);
}
.box3 {
    @include margin(10px 20px 10px)
}
.box4 {
    @include margin(10px 20px 10px 30px)
} 
    
```
This compiles to.

```css 
.box1 {
    margin: 10px; }

.box2 {
    margin: 10px 20px; }

.box3 {
    margin: 10px 20px 10px; }

.box4 {
    margin: 10px 20px 10px 30px; }
```
If these variable arguments are used with other arguments, the variable arguments should be placed after the other arguments.

It is also possible to pass these variable arguments to a mixin when including the mixin. This can be a list or a map. Look at an example below.

```css
$colors1: #F2F2F2, #404040, #00AEEF;
$colors2: ( text: #404040, border: #00AEEF, background: #F2F2F2);

@mixin color ($background, $text, $border) {
    background-color: $background;
    color: $text;
    border-color: $border
}

.first {
    @include color($colors1...);
}

.second {
    @include color($colors2...);
}
```

`$colors1` is a list. When using a list the order the arguments appear is the order they will be passed into the mixin. So we have to order them accordingly. On the other hand, when using a map, the order doesn't matter. Notice that the `background` was passed at the end instead of the beginning but when it is compiled, it gives the appropriate result. Here is the result.

```css

.first {
    background-color: #F2F2F2;
    color: #404040;
    border-color: #00AEEF; }

.second {
    background-color: #F2F2F2;
    color: #404040;
    border-color: #00AEEF; }

```

One last thing we should discuss.

<b>@content</b>

The `@content` directive allows us to pass blocks of CSS styles that are not defined in a mixin. These styles will appear wherever you placed the `@content` in the `mixin` declaration. An example will help here. This example shows how mixins can be effectively used with media queries.

```css
@mixin small {
    @media (max-width: 480px) {
        border: 1px solid #404040;
        @content;
    }
}

@mixin medium {
    @media (min-width: 481px) and (max-width: 768px) {
        @content;
    }
}

.box {
    @include small {
        width: 80%;
    }
    @include medium {
        width: 50%;
    }
}
```

This compiles to

```css

@media (max-width: 480px) {
    .box {
        border: 1px solid #404040;
        width: 80%; } }
@media (min-width: 481px) and (max-width: 768px) {
    .box {
        width: 50%; } }

```
There's a whole lot that can be done with mixins. It is indeed a powerful feature. 

Got any question or addition? Leave a comment.

Thank you for reading. :)