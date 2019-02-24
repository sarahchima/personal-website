---
title: The JavaScript Array Map() Method
date: "2018-12-22"
description: Understanding the Javascript Map function, when and how to use it.
tags: ["javascript", "es6"] 
cover_image: https://thepracticaldev.s3.amazonaws.com/i/z4y9rada74qyf288n90i.jpg
---

Ever wondered what the JavaScript array map method is? what it can do? or when it should be used? This is article is for you. Before we go any further, let us get a formal definition of the map method. 

<h2>Meet the method</h2>
According to MDN documentation: 

>The map() method creates a new array with the results of calling a provided function on every element in the calling array.

Let us simplify this.

The JavaScript map method takes an array(Array 1) and creates a new array(Array 2) by calling a function on each element in the given array(Array 1). To explain this further, we will use an example to see what the map method accomplishes.

Let us use our regular for-loop to show that the map function does. A classic example is if we want an array of the square of all elements in a given array, we could do this using a for-loop as seen in the example below:

```js
const array = [2, 5, 9];
let squares = [];

for (let i = 0; i < array.length; i++) {
    squares.push(array[i] * array[i]));
}

console.log(squares); // [4, 25, 81]
console.log(array); // [2, 5, 9]

``` 

What does the above achieve? It loops through an array, finds the square of each element in the array and pushes it to the squares array that was earlier defined.

This is similar to what the map function achieves only that you do not need to define another array that the result is pushed to. The map function automatically does that. So let us accomplish the above using the map function.

P.S: Arrow functions are used in the example. If you do not fully understand its syntax, please refer to [this article](https://dev.to/sarah_chima/arrow-functions-in-es6-24) on it.

```javascript
const array = [2, 5, 9];
let squares = array.map((num) => num * num);

console.log(squares); // [4, 25, 81]
console.log(array); // [2, 5, 9]
```

Notice how much easier it to use the map method and still accomplish the same thing. Also, note that the initial array remains the same, this is especially useful in functional programming. Now let us dig a little deeper into the map method.

<h2>The Map Method and its Syntax</h2>

The syntax of the map function is as follows:

```javascript
let newArray = array.map((currentValue, index, array) => {
    // return element to new Array
});
```

<ul>
    <li>newArray - the array that is returned</li>
    <li>array - the array on which the map method is called </li>
    <li>currentValue - the value being processed </li>
    <li>index - the index of the current value being processed </li>
</ul>

<h5><b>Here are some things to note about the map method:</b></h5>

1. It returns a new array.
2. It does not mutate the original array on which it was called i.e the original array stays the same.
3. The range of element processed by the map function is set before the first invocation. If elements are added to the array after the map begins, it will not be processed by the callback.


<h2>When To use the Map Method </h2>

Given that there are other similar array methods like the ForEach method, you might wonder, "when should I use (or not) the map method?" Here are some questions that can help you decide:

1. Do I need an array to be returned from the method and will the returned array be used?
2. Am I returning a value from the callback function?

If your answer to any of these questions is Yes, you should use the map function. If your answer is negative in both cases, you should probably use `forEach` or `for..of` instead. 

<h2> Examples of the Map Method </h2>

In addition to the example used before, here are some other examples of things you can do with the map method.

<h5>Example 1: Extracting values from an array of objects</h5>

    
We want to extract certain values from an array of objects. For instance, in a array of girls, we want to get the ages of the girls.

```javascript
const girls = [
    {name: 'Sarah', age: 19},
    {name: 'Laura', age: 10},
    {name: 'Jessy', age: 29},
    {name: 'Amy', age: 23}];

let girlsAges = girls.map((girl) => girl.age);

console.log(girlsAges);  //[19, 10, 29, 23]
    
```

<h5>Example 2: Apply the Callback on only certain elements</h5>

If we want to the callback to only be applied to certain elements in an array, say odd numbers, we can use an if statement to do this.

```javascript
const numbers = [4, 9, 36, 49];

let oddSquareRoots = numbers.map((num) => {
    if(num % 2 != 0) {
        return Math.sqrt(num)     
    }
    return num;
})

console.log(oddSquareRoots);
```

or using ternary operators

```javascript
const numbers = [4, 9, 36, 49];

let oddSquareRoots = numbers.map((num) => {
    return num % 2 !== 0 ? Math.sqrt(num) : num 
})

console.log(oddSquareRoots);
```

However, a more efficient way to achieve this is using the JavaScript Array Filter method. This will be discussed in my next post.

<h3>Conclusion</h3>

The JavaScript Array Map method is a method that can be used to simplify your code if used correctly. 

Thank you for reading :)

