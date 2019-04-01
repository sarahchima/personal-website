---
title: Filter Arrays with the Javascript Filter() Method
date: "2018-12-29"
description: How to use the JavaScript filter method
tags: ["javascript"]
featuredImage: https://res.cloudinary.com/dvj2hbywq/image/upload/v1550930072/potrait.jpg
---

Filtering unwanted elements to reduce the size of an array is fun right? JavaScript array filter method makes it even more fun.

In my last blog post, I wrote about the array map method in JavaScript. In case you missed it, this a [link to the post](https://dev.to/sarah_chima/the-javascript-array-map-method-44m0). In an example there, we saw that we can use logical expressions in the callback function applied to elements in an array. Here is the code snippet below:

```js
const numbers = [4, 9, 36, 49];

let oddSquareRoots = numbers.map((num) => {
    if(num % 2 != 0) {
        return Math.sqrt(num)     
    }
    return num;
})

console.log(oddSquareRoots);
```

While this is possible, it is not ideal. A more efficient way is using the filter method. Now, let us answer the question: What is the filter method and how can we use it?

<h2>Understanding the Filter Method</h2>

According to MDN documentation:

>The filter() method creates a new array with all elements that pass the test implemented by the provided function.

Let us simplify this further by using an example.

If you have an array of random numbers (e.g ages of people) and you only need numbers that are above a certain number ( e.g 18). How will you do this using the normal for-loop?

```js
const ages = [11, 34, 8, 9, 23, 51, 17, 40, 14];

let olderThan18 = [];

for (let i = 0; i < ages.length; i++) {
    if(ages[i] > 18){
        olderThan18.push(ages[i])
    }
}

console.log(olderThan18); // [34, 23, 51, 40]
    
```

This is much simpler using the filter method as shown below:

```js
const ages = [11, 34, 8, 9, 23, 51, 17, 40, 14];

let olderThan18 = ages.filter((age) => age > 18);

console.log(olderThan18); //[34, 23, 51, 40]
```

P.S: We use arrow functions in the example. If you do not understand its syntax, please refer to [this post](https://dev.to/sarah_chima/arrow-functions-in-es6-24) on it.

We get the same result without the for-loop and it is much easier to use. 

If we decide to declare the callback function before using it with the filter method, we can do this:

```js
const ages = [11, 34, 8, 9, 23, 51, 17, 40, 14];
const isOlderThan18 = (age) => age > 18;

let olderThan18 = ages.filter(isOlderThan18);

console.log(olderThan18); // [34, 23, 51, 40]

```

 Let us look at the syntax of the filter method.

<h2>The Filter() method's syntax</h2>

The basic syntax for the filter method is this:

```js
let newArray = array.filter(callback);
```

where
<ul>
    <li>newArray - the new array that is returned</li>
    <li>array - the array on which the filter method is called</li>
    <li>callback - the callback function that is applied to each element of the array </li>
</ul>

The callback function can take three arguments

<ul>
    <li>element - the current element being processed</li>
    <li>index - the index of the current element being processed</li>
    <li>array - the original array the filter was called on</li>
</ul>

Having these arguments in mind, we can also write the syntax as:

```js
let newArray = array.filter(callback(element, index, array));

or

let newArray = array.filter((element, index, array) => {
    //filter 'em elements
})
```

<h5>Here are some things to note about the filter method.</h5>

1. It returns a new array.

2. It does not mutate the original array on which it was called i.e the original array stays the same.

3. The range of element processed by the filter method is set before the first invocation. If new elements are added to the array after the map begins, it will not be processed by the callback.

<h2>When to use the Filter Method</h2>

When you want only items that meet a required condition in an array.

<h2>Examples of using the filter method </h2>

Here are two examples of what we can do with the filter method. 

<h4> Filtering an array of objects</h4>

If  you have an array of countries and you want only countries that are in a particular continent. This is an example of how you can do that using array filter method.

```js
const countries = [
    { name: 'Nigeria', continent: 'Africa'},
    { name: 'Nepal', continent: 'Asia'},
    { name: 'Angola', continent: 'Africa'},
    { name: 'Greece', continent: 'Europe'},
    { name: 'Kenya', continent: 'Africa'},
    { name: 'Greece', continent: 'Europe'}
]

let asianCountries = countries.filter(country => {
    return country.continent === 'Asia';
})

console.log(asianCountries); // [{name: "Nepal", continent: "Asia"}]
```

<h4>Example 2: Search for specific letters in an array</h4>

Given an array of words and you want to find out which of the words contains specific letters. For example, you want female names that contain specific alphabets together, here is how you can do it.

```js
const names = ['Victoria', 'Pearl', 'Olivia', 'Annabel', 'Sandra', 'Sarah'];
const filterItems = (letters) => {
    return names.filter(name => name.indexOf(letters) > -1);
} 

console.log(filterItems('ia')); // ["Victoria", "Olivia"]
```

<h2> Conclusion </h2>

So in this post, we have seen how easy the JavaScript Filter method makes filtering elements in an array. 

Remember the example mentioned at the beginning of this post? Can you try to use the filter method to achieve the same thing?

Got any question or addition? Please leave a comment.

Thank you for reading :)

