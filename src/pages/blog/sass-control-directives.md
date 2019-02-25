---
title: SCSS Control Directives
date: "2017-11-29"
description: 
tags: ["css", "sass"]
---

If you've been going through Sass code or reading articles on Sass you probably have come across Sass control directives. These control directives are `@if`, `@for`, `@each` and `@while`. How do they function in Sass? How are they used? When is the appropriate time to use them? This article answers these questions and more by discussing each of these directives. First though, let's get a brief overview of Sass control directives.

Control directives and expressions are used in Sass to include styles only under some conditions or to include the same style several times with variations. Control directives are an advanced feature and exist mainly for use in mixins. You might not need to use them unless you are working on a large project. However, it is still important to know them as they might just come in handy some time. Let's discuss these directives then.

<h3><b>@if<b></h3>
The `@if` directive takes a Sass expression and executes the block of styles beneath the directive if the evaluation of the expression does not return `false` or `null`. Let's use a simple example to explain this. 

```css
h3 {
    @if(2+2 == 4) { color: black;}
    @if(true) {font-size: 24px;}
    @if(1 > 4) {color: blue;}
    @if(false) {font-size: 30px;}   
}
```
will compile to

```CSS
h3 {
    color: black;
    font-size: 24px; }
```

The first two expressions are evaluated to be true, so the styles are added, while the other two are evaluated as false, hence their styles are not added.

It is also possible to provide other options to be used if the expression is not evaluated to be `true`. `@else if` and `@else` statements are used to do this. So if the `@if` statement fails, the `@else if` statements are tried in order until one succeeds or the `@else` is reached. Here's an example.

```css

@mixin heading($size) {
    @if($size == large) {
        font-size: 40px;
    } @else if ($size == medium) {
        font-size: 24px;
    } @else if ($size == small) {
        font-size: 18px;
    } @else {
        font-size: 16px;
    }
}

h2 {
    @include heading(large);
}
h4 {
    @include heading(medium);
}
p {
    @include heading(hi);
}
```
This will compile to

```css
h2 {
    font-size: 40px; }

h4 {
    font-size: 24px; }

p {
    font-size: 16px; }
```
In the example above, the block of styles after each directive is executed only if the expression returns `true`. If all the expressions fail, like it did in the `p` case, the block of styles under the `else` statement is used. Next, we will discuss the `@for` directive.

<h3><b>@for directive</b></h3>

The `@for` directive is used to output styles in a loop. This loop has a start and end value. There are two forms of the `@for` directive: you can either loop `through` the start and end value or you loop from the start `to` end value. There's a subtle difference in both. While `through` loops and includes the end point, `to` does not include the end value. Examples will make this clearer.

```css
    @for $i from 1 through 4 {
        .box-#{$i} { width: 10 * $i;}
    } 
```
This will compile to

```css
.box-1 {
    width: 10; }

.box-2 {
    width: 20; }

.box-3 {
    width: 30; }

.box-4 {
    width: 40; }
    
```

The variable `$i` can be any name you decide to use. This variable is used to keep track of the loop against the ranges. Notice that this SCSS loop above loops from 1 to 4 with 4 included. Here's what happens when `to` is used instead.

```css
@for $i from 1 to 4 {
    .box-#{$i} { width: 10 * $i;}
} 
```
This will compile to
```css
.box-1 {
    width: 10; }

.box-2 {
    width: 20; }

.box-3 {
    width: 30; }

```
This time, the last number `4` is not included. This is because after the variable `$i` reaches `4`, the code doesn't execute unlike in the case of <i>through</i>. Let's move to the next directive.

<h3><b>@each</b></h3>
The `@each` directive is used to loop through a list or map instead of starting and ending values as in the case of `@for`. Its syntax is `@each $var in <list>` where `$var` can be the name of any variable like `$name` or `$animal`. This variable is set to each item on the list and processes the block of styles beneath the directive using the variable. `<list>` is a SassScript expression that returns a list. Let's put this directive to use.

```css
@each $place in lagos, newyork, paris {
    .place-#{$place} {
        background-image: url("img/place/#{$place}" )
    }
}
```
this will compile to

```css
.place-lagos {
    background-image: url("img/place/lagos"); }

.place-newyork {
    background-image: url("img/place/newyork"); }

.place-paris {
    background-image: url("img/place/paris"); } 
```
<b>@each with multiple variables</b>

The `@each` directive can also make use of multiple variables to handle a list that is made up of lists. Sounds confusing? Look at the example below.

```css   
    @each $place, $color, $position in (lagos, blue, fixed), 
                                (newyork, black, relative),
                                (paris, gray, absolute) {
    .place-#{$place} {
        background-image: url("img/place/#{$place}" );
        border: 2px solid $color;
        position: $position;
    }
}
```
Notice that different variables are used. Each of these variables is set to a corresponding item in each sublist and the block of styles is processed using these variables. So this will compile to:

```css
.place-lagos {
    background-image: url("img/place/lagos");
    border: 2px solid blue;
    position: fixed; }

.place-newyork {
    background-image: url("img/place/newyork");
    border: 2px solid black;
    position: relative; }

.place-paris {
    background-image: url("img/place/paris");
    border: 2px solid gray;
    position: absolute; }
```
<b>@each with a map</b>

Let's use the `@each` directive with a map. A map is treated as a list of pairs so we have to also use two variables that the pairs will be set to as the directive is processed. Here's an example:

```css
    
$animals: ( animal1: fish, animal2: rat, animal3: monkey);

    @each $key, $animal in $animals  {
        .#{$animal}-avatar {
            background-image: url('/img/#{$animal}.png');
    }
}

```
This will compile to

```css
.fish-avatar {
    background-image: url("/img/fish.png"); }

.rat-avatar {
    background-image: url("/img/rat.png"); }

.monkey-avatar {
        background-image: url("/img/monkey.png"); }

```
Let's finally consider the last directive: the `@while` directive.

<h3><b>@while</b></h3>

Just like other control directives, the `@while` directive takes an expression and executes the nested block of styles as long as the expression is not evaluated to `false`. It is similar to the `@for` directive but it can be used to execute much more complex loops than the `@for` directive is capable of.

When using the `@while` directive, a variable with a set value is used instead of a range of values. Let's repeat our `@for` directive example but this time using `@while`.

```css
$i: 1;
@while $i < 4 {
    .box-#{$i} { width: 10 * $i;}
    $i: $i + 1;
}
```
The above code can be read as while the variable `$i` is not greater than 4, execute the nested block of styles. This value is increased within the nested block of styles until it is no longer less than 4, which is the condition for it return false and then it stops. This will compile to

```css
.box-1 {
    width: 10; }

.box-2 {
    width: 20; }

.box-3 {
    width: 30; }

```

When using the `@while` directive, if you don't provide a condition for failure, the loop will run forever. In our example, we repeatedly increased the value of `$i` so the condition was set to return `false` at some point.


So there we have it for control directives.

Got any question or addition? Please leave a comment.

Thank you for reading. :)
