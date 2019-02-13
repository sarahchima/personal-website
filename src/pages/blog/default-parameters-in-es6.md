---
title: Default Parameters in ES6
date: "2017-10-28"
description: 
tags: ["es6", "javascript"]
---

Default parameters also came along with ES6. It allows you to set default values for your function parameters if no value is passed or if undefined is passed. First, what happens when no parameter is passed to a function that requires parameters. We are going to define a simple function and call it without assigning variables to it.

```Javascript

    function add(a,b) {
         return a + b;  
    }
    add() //NaN
```
We got `NaN`. This is what happens when a function is called without parameters. How was this handled prior to ES6? Look at the example below.

```Javascript
    //ES5
    function add(a,b) {
        var b = (typeof(b) !== "undefined") ? b : 5;
         return a + b; 
    }

    add(4,2) //6
    add(4) //9
```

So what we did is to check if the `typeof` the second parameter is `undefined` i.e. no value is passed to it. If it is `true`, `b` is set to `5`. So when we called the function with just one parameter, the result was `9`. Now that we have done this, let us see how this can be handled in ES6.

```Javascript

    function add(a=3, b=5) {
        return a + b; 
    }

    add(4,2) // 6
    add(4) // 9
    add() // 8
```
It's that simple. You just assign a value to the parameter when initializing its parameters. 
It is important to note that parameters are set from left to right. So the overwriting of default values will occur based on the position of the your input value when you call the function. For instance, in our last example, when one parameter was passed `add(4)`, since `4` was passed first, it was automatically assumed to be `a`. 

What happens when a parameter without a default value is called after one with a default value?

```Javascript

    function createArray(a = 10, b) {
        return [a,b]; 
    }
    
    createArray() // [10, undefined]
    createArray(5) //[5, undefined]
```
So this clearly proves that parameters are set form left to right, overwriting default parameters even if there are later parameters without default values.

You can also set a function as the default parameter.

```Javascript
    function createA() {
        return 10;
    }

    function add(a = createA(), b=5) {
        return a + b; 
    }
    
    add() // 15
```
Note that when doing this, the function cannot be an internal function because the default arguments are evaluated when the function is called. Therefore the following will not work.

```Javascript

    function add(a = createA(), b=5) {

        function createA() {
        return 10;
        }
        return a + b; 
    }
    
    add() // createA is not defined
```
Default parameters are also available to later default parameters. That is, in the above example, we can set the default value of `b` to be `a`. Don't understand that? Let's use an example.


```Javascript
    function createA() {
        return 5;
    }

    function add(a = createA(), b = a*2, c = b+3) {
        return a + b + c; 
    }
    
    add() // 28 because 5 + (5*2) + ((5*2) + 3) = 5 + 10 + 13 = 28
    add(2)// 13 because 2 + (2*2) + ((2*2) + 3) = 2 + 4 + 7 = 13
    add(2,3)// 11 because 2 + 3 + (3+3) = 11
    add(2,3,1)//6
```
Let's do one more just for fun.

```Javascript
    function awesome (a = "You", b = a +" are awesome", c = b +" for reading", d = c + " this article", e = d + " to the end" ){

        return e;

    };
    
    awesome()//You are awesome for reading this article to the end 
    
```
Got any question or addition? Please leave a comment.

Thank you for reading :)