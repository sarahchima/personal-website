---
title: An Introduction to ES6 Template Literals 
date: "2017-11-03"
description: 
tags: ["es6", "javascript"]
---


Remember how awful coding in JavaScript gets when you have to insert several variables in a string? Ohh, the countless number of times you have to write quotes `''` and the `+` sign. Then you run the code only to realize that you didn't properly space the variables from the main text or that you forgot to add a fullstop at the end of a variable for it to look like a proper sentence. Well, you need to meet my friend, template literals. It'll make you forget all about it. Okay, enough of the drama..lol. Let's get serious now.

Template Literals are string literals that allow embedded expressions. If that sounds confusing, fret not, you'll get a hang of it soon. There are several problems we encounter when using strings. We might want to interpolate a string or include embedded expressions or use multi-line strings. All of these things can be done using versions of JavaScript before ES6. However, template literals makes it super easy to do this and in a neat and elegant way too. We will see how this is so in this article. In my next article, we will discuss tagged template literals. First of all, here are things we should know about template literals.

1. Template literals is just another way of writing strings that makes use of backticks instead of single quotes `''` or double quotes`""`. It was referred to as template strings prior to ES6.

2. To embed an expression (placeholder) in template literals, we enclose them in a dollar sign and curly braces like this`${expression}`.

3. Everything in the back-ticks gets passed to a default function which concatenates to a single string unless a function is specified.

We are all geared up to continue now.

<b>String Interpolation</b>
This is the problem that was mentioned at the beginning of the article. Let's remind ourselves of the pain.

```Javascript
    let name = "Sarah";
    let job = "Developer";
    let tools = "JavaScript and CSS";

    console.log("My name is " + name + " and I am a " + job + ". I write " + tools + "." );//My name is Sarah and I am a Developer. I write JavaScript and CSS."
    
```
Using ES6's template literals we will do this instead.


```Javascript
    let name = "Sarah";
    let job = "Developer";
    let tools = "JavaScript and CSS";
    console.log(`My name is ${name} and I am a ${job} . I write ${tools}.`);//My name is Sarah and I am a Developer. I write JavaScript and CSS."
```    
See how much easier that was. Notice that backticks were used instead of quotes and the variables all appear within the dollar sign and curly braces. Let's do more with this.

Let's embed a mathematical expression using template literals.

```Javascript
    console.log(`Jessy has ${5+3} cats and ${3+2} dogs.`)//"Jessy has 8 cats and 5 dogs."
```
We can also embed a function.

```Javascript
   let sayHello = () => "Hello";

   console.log(`${sayHello()}, it's the code girl next door.`);//"Hello, it's the code girl next door."
```
Let's do one more for fun.

```Javascript
   let sayName = () => "Template Literal";
   let num = 5;

   console.log(`I am a ${sayName()} and I am ${num *2}x more powerful.`);//"I am a Template Literal and I am 10x more powerful."
```
<b>Multi-line Strings</b>

Remember  what `\n` in strings is used for? If you said to move to a new line... you are right. If you said the <b>only</b> way to move to a new line... uhmmm, you are not right. Template literals allows you to move to a new line by literally moving to a new line without using any character. So instead of doing this:

```Javascript
   console.log("I am the first line \n, I am the second line \n And I am the third line.");
```
We can simply do this:

```Javascript
   console.log(`I am the first line,
 I am the second line
 And I am the third line.`);
```
and get the same result.

```Javascript
   "I am the first line,
    I am the second line
    And I am the third line."
```

Super Cool!!!

Let's use an example to see where all of these can be useful. We want to add HTML markup to a page using Javascript. Template literals makes it possible to do this in a very neat way. Look at the example below.

```Javascript
    const animal = {
        kind: "Monkey",
        food: "bananas", 
        hobby: "jumping trees"
    };
   

   const display = `
        <div class = "animal">
            <h1>Hey, this is a ${animal.kind}</h1>
            <p>It eats ${animal.food} and loves ${animal.hobby}</p>
        </div>
    `;
    document.body.innerHTML = display;
```
See how easy and neat this can be done with template literals. Cool right?
My next article will be on tagged template literals. Stay Tuned.

Got any question or addition? Leave a comment.
Thank you for reading. :)