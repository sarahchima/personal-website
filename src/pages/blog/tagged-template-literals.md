---
title: Tagged Template Literals in ES6
date: "2017-11-06"
description: 
featuredImage: https://res.cloudinary.com/dvj2hbywq/image/upload/v1550930072/potrait.jpg
tags: ["es6", "javascript"]
---

In my previous article, [Template Literals](https://dev.to/sarah_chima/an-introduction-to-es6-template-literals-94l) was discussed. If you have no idea of what template literals, you should read it. We saw that when template literals are used, the string gets passed to a default function which interprets the string and returns a result. Well, this doesn't always have to be so. We can have control over what results we get from our strings using tagged template literals.

Tagged template literals enables us to tag strings. This means that we can pass a string through our own defined function rather than allowing the browser to interpret the string using the default function. This gives us control over how the string is made. At this point, an example will be helpful.


```javascript
function doSomething(string) {
    
}
const name = "Kelvin";
const food = "Rice";
const sentence = doSomething`My name is ${name} and I love eating ${food}`; 
```
From the example, we can see that we created a function, then used it to tag the string. That is, place the function in front of the string. Notice that brackets were not used. This function defines what the string will be.  In our case, `doSomething` determines what `sentence` will be. So if we define the function to do something like return a different string, that is what `sentence` will become. Look at the example below.


```javascript
function doSomething() {
    return "Hello";
}

const name = "Kelvin";
const food = "Rice";

const sentence = doSomething`My name is ${name} and I love eating ${food}`;
console.log(sentence);// "Hello"
```
Let's understand what goes on when we use a tagged template literal. When the function is run, all the information about the string are supplied to the function. This includes all the pieces of strings that was typed as well as the expressions/variables that gets passed in. These interpolated expressions are evaluated and passed to the tag.  The string pieces get passed as an array to the function then all other variables are passed as individual arguments to the function. For instance, in our above example, what is actually passed to the function is this:

```javascript
function doSomething(strings, name, food) {
    return "Hello";
}
```
Where `strings` is an array of all pieces of strings in the template and  `name` and `food` are variables in the template.The function determines what is to be done with this information and the result that it will produce.
What happens when we have so many arguments passed to the function and you want to retrieve them? We can retrieve them using ES6 rest operator. This puts all the other arguments in an array. Its syntax is simply the name of any variable of yor choice preceded by `...` like this.

```javascript
function doSomething(strings,...rest) {
    return "Hello";
}
```
`rest` is an array that contains all variables and expressions passed to the tag i.e everything apart from the main strings. In our example, it contains `[name, food]`.

In the above example, we just told the function to return `hello` but that's definitely not what we want to be doing with our strings. Let's do something more practical. We want to highlight variables passed to a string so that they appear bold on the screen. We can do this.

```javascript
function highlight(strings, ...rest) {
    let str = "";

    strings.forEach((string, i) => {
        if (rest[i] != undefined){
            str += `${string} <b>${rest[i]}</b>`;
        } else {
            str += `${string}`;
        }
    });

    return str;
}

const name = "Kelvin";
const food = "Rice";
const sentence = highlight`My name is ${name} and I love eating ${food}, cool right?`;

document.body.innerHTML = sentence;
```
So our function `highlight` uses template literals to concatenate the pieces of strings and the variables. The `if else` statement there is to ensure that `undefined`  is not added to the string there's no variable after the last piece of string.

This is just a simple example of what can be done with tagged template literals. Tagged template literals is indeed a powerful feature of ES6. It gives you power over strings. What else do you think can be done with this? Please leave a comment.

Got any question or addition? Leave a comment.

Thank you for reading :)