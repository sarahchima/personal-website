---
title: Destructuring Assignment in ES6- Arrays
date: "2017-10-30"
description: 
tags: ["es6", "javascript"] 
---

Destructuring assignment is a cool feature that came along with ES6. Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. That is, we can extract data from arrays and objects and assign them to variables. Why is this necessary?

Imagine if we want extract a data from an array. Previously, how will this be done?

```JavaScript
   
    var introduction = ["Hello", "I" , "am", "Sarah"];
    var greeting = introduction[0];
    var name = introduction[3];

    console.log(greeting);//"Hello"
    console.log(name);//"Sarah"
```
We can see that when we want to extract data from an array , we had to do the same thing over and over again. ES6 destucturing assignment makes it easier to extract this data. How is this so? This article discusses destructuring assignment of arrays. My next article will discuss that of objects. Let's get started.

<b>Basic Destructuring</b>

If we want to extract data using arrays, it's quite simple using destructuring assignment. Let's refer to our first example for arrays. Instead of going through that repetitive process, we'll do this.

```JavaScript
   
    var introduction = ["Hello", "I" , "am", "Sarah"];
    var [greeting, pronoun] = introduction;

    console.log(greeting);//"Hello"
    console.log(pronoun);//"I"
    
```
We can also do this with the same result.


```JavaScript
    var [greeting, pronoun] = ["Hello", "I" , "am", "Sarah"];

    console.log(greeting);//"Hello"
    console.log(pronoun);//"I"
    
```
<b>Declaring Variables before Assingment</b> 
The variables can be declared before being assigned like this.

```JavaScript

    var greeting, pronoun;
    [greeting, pronoun] = ["Hello", "I" , "am", "Sarah"];

    console.log(greeting);//"Hello"
    console.log(pronoun);//"I"
    
```
Notice that the variables are set from left to right. So the first variable gets the first item in the array, the second variable gets the second variable in the array and so on.
 
<b>Skipping Items in an Array</b>

What if we want to get the first and last item on our array instead of the first and second item and we want to assign only two variables? This can also be done. Look at the example below.

```JavaScript
    var [greeting,,,name] = ["Hello", "I" , "am", "Sarah"];

    console.log(greeting);//"Hello"
    console.log(name);//"Sarah"
    
```
What just happened? Look at the array on the left side of the variable assignment. Notice that instead of having just one comma, we had three. The comma separator is used to skip values in an array. So if you want to skip an item on an array, just use a comma. 

Let's do another one. I think it's fun. Let's skip the first and third item on the list. How will we do this?

```JavaScript
    var [,pronoun,,name] = ["Hello", "I" , "am", "Sarah"];

    console.log(pronoun);//"I"
    console.log(name);//"Sarah"
    
```

So the comma separator does the magic. So if we want to skip all items, we just do this.

   
```JavaScript
    var [,,,,] = ["Hello", "I" , "am", "Sarah"];

```

<b>Assigning the rest of an array</b>

What if we want to assign some of the array to variables and the rest of the items on an array to a particular variable? We'll do this.

```JavaScript
    var [greeting,...intro] = ["Hello", "I" , "am", "Sarah"];

    console.log(greeting);//"Hello"
    console.log(intro);//["I", "am", "Sarah"]
    
```
Using this pattern, you can unpack and assign the remaining part of an array to a variable.

<b>Destructuring Assignment with Functions</b>
We can also extract data from an array returned from a function. Let's say we have a function that returns an array like the example below.

```JavaScript
    function getArray() {
        return ["Hello", "I" , "am", "Sarah"];
    } 
    var[greeting,pronoun] = getArray();

    console.log(greeting);//"Hello"
    console.log(pronoun);//"I"
```
We get the same results. 

<b>Using Default Values</b>
Default values can be assigned to the variables just in case the value extracted from the array is `undefined`.

```JavaScript
     
    var[greeting = "hi",name = "Sarah"] = ["hello"];

    console.log(greeting);//"Hello"
    console.log(name);//"Sarah"
```
So `name` falls back to "Sarah" because it is not defined in the array.

<b>Swapping Values using Destructuring Assignment</b>
One more thing. We can use destructuring assignment to swap the values of variables.


```JavaScript
    var a = 3;
    var b = 6;

    [a,b] = [b,a];

    console.log(a);//6
    console.log(b);//3
```

Next, I'll write on Object Destructuring.

Any question or addition? Please leave a comment.

Thank you for reading :) 