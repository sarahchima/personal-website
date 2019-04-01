---
title: Nesting in SASS
date: "2017-11-10"
description: 
featuredImage: https://res.cloudinary.com/dvj2hbywq/image/upload/v1550930072/potrait.jpg
tags: ["css", "sass"]
---

Remember nesting in HTML? The thing we do all the time when we put a `<p>` in a `<div>` and a `<span>` in the `<p>` like this?

```html
<body>
    <div>
        <p>
            <span></span>
        </p>
    <div>
</body>
```
I bet you do. SCSS allows us to nest CSS selectors in a similar manner. Nesting is a shortcut to creating CSS rules. So instead of writing so many lines of CSS just to be specific on the style we want to apply to an element, we simply nest it. Let's use an example. In CSS, we want to style the `li` of a particular sidebar in a certain way, here's how we will target it.

```css
#sidebar ul li {
    background-color: #F2F2F2;
    color: #404040;
}
```
Using nesting, we will simply do the following and get the same results.

```css
#sidebar {
    ul {
        li {
            background-color: #F2F2F2;
            color: #404040;
        }
    }
}
```
This is better organized and it is easier to see the hierarchy. It produces the same result. You can add properties to the selector itself and not just to the nested selectors.

```css
#sidebar {
    position: fixed;
    height: 100%;

    ul {
        list-style-type: none;
        padding: 0;

        li {
            background-color: #F2F2F2;
            color: #404040;
        }
    }
} 
```
This will compile to

```css
#sidebar {
    position: fixed;
    height: 100%; }
#sidebar ul {
    list-style-type: none;
    padding: 0; }
#sidebar ul li {
    background-color: #F2F2F2;
    color: #404040; }

```
You can also <b>nest media queries</b> too.
```css
#sidebar {
    position: fixed;
    height: 100%;

    @media (max-width:768px) {
        left: -9999;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }
} 
```   
This will compile to

```css
#sidebar {
    position: fixed;
    height: 100%; }
@media (max-width: 768px) {
    #sidebar {
        left: -9999; } }
#sidebar ul {
    list-style-type: none;
    padding: 0; }
```

We can even <b>nest CSS properties</b>.

```css
li {
    background: {
        image: url("image.jpg");
        position: fixed;
    }
    margin : {
        top: 1rem;
        left: 2rem;
        right: 1rem;
    }
}

```
This will compile to

```css
li {
    background-image: url("image.jpg");
    background-position: fixed;
    margin-top: 1rem;
    margin-left: 2rem;
    margin-right: 1rem; }
```

Really, nesting makes life a whole more easier. Let's next consider how we can use the ampersand `&` to nest pseudo classes and elements and to place selectors side by side.

<b>The Ampersand in Nesting</b>
In Sass, `&` is a very useful feature in nesting. If you want the selectors to be attached without leaving any space in between, we have to use the ampersand. This is especially useful when we have to nest pseudo-classes and pseudo-elements. If you want understand what pseudo-classes and pseudo-elements are, you can read [this post](http://www.growingwiththeweb.com/2012/08/pseudo-classes-vs-pseudo-elements.html). `&` is also useful when we have to place classes side by side to select elements that have those classes. Let's use an example to understand this.

```css
.list {
    background-color: white;
    color: #404040;

    /* Pseudo-class */
    &:hover {
        background-color: blue; 
        color: white
    }

    /* Pseudo-element */
    &:before {
        content: "List ";
    }  

    /* Placing selectors side by side */
    &.active {
        border-left: 3px solid blue;
        color: blue;
    }
}
```

This will compile to

```css
.list {
    background-color: white;
    color: #404040; }

.list:hover {
    background-color: blue;
    color: white; }

.list:before {
    content: "List ";
    width: 30px; }

.list.active {
    border-left: 3px solid blue;
    color: blue; }
```

See how they are all joined side by side with no space between? That's the power of the `&`. 

<b> CAUTION!!!</b>
Nesting is very useful and makes our CSS organized but we do not want to misuse it. One way we can misuse it is by over-nesting selectors. Look at an example of over-nesting.

```css
div {
    .sidebar{
        position: fixed;
        height:  100%;
    
        ul {
            list-style-type: none;
            padding: none;

            .list {
                background-color: white;
                color: black;
                
                a {
                    text-decoration: none;
                    i{
                        &:hover {
                            background:  transparent;
                        }
                    }
                }
            }
        }
    }
}
```
This will compile to

```css
div .sidebar {
    position: fixed;
    height: 100%; }
div .sidebar ul {
    list-style-type: none;
    padding: none; }
div .sidebar ul .list {
    background-color: white;
    color: black; }
div .sidebar ul .list a {
    text-decoration: none; }
div .sidebar ul .list a i:hover {
        background: transparent; }
```
Look at the last selector, that's six levels of nesting. That's so much. There's a lot of things wrong with this.
1. Increase in file size: Look at the amount of code it added to the CSS file. This in turn increases the size of your file  and affects performance. 
2. Specificity issues: Being too specific is itself a problem. A style in a selector that is very specific will be difficult to be overridden by another selector. 
3. Maintainability: This is also a problem. A change in any of the selectors in the top level selectors affects the other selectors. 
4. Styles are also not so reusable.

A rule of the thumb is not to nest more than 4 levels. Less than four levels is preferable. Rather than so many levels of nesting, you can use it to name your selectors and still be specific. See an example below.

```css
.sidebar {
    position: fixed;
    height: 100%;

    &-list {
        background-color: white;

        &-link {
            text-decoration: none;
        }
    }
}
```
This will compile to

```css
.sidebar {
    position: fixed;
    height: 100%; }
.sidebar-list {
    background-color: white; }
.sidebar-list-link {
    text-decoration: none; }
```
See how much better this is. We exploited the power of nesting and still kept our code maintainable and reusable. So the key is using nesting in a way that it doesn't affect performance and its maintainability.

And it's a wrap. Thank you for reading. :)
Got any question or addition? Leave a comment.