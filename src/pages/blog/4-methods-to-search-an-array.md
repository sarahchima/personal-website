---
title: "4 Methods to Search an Array"
date: "2020-06-18"
description: "Learn about common display values in CSS"
featuredImage: https://res.cloudinary.com/dvj2hbywq/image/upload/v1561426476/Group_26_zv2l83.png
tags: ["JavaScript"]
---

There are different methods in JavaScript that you can use to search for an item in an array. The use of these methods depends on your specific use case. For instance, do you want to get all items in an array that meet a specific condition? Do you want to check if any item meets the condition? 
Do you want to check if a specific value is in the array? Or do you want to find the index of the value in the array? 

For all these use cases, JavaScript Array.prototype methods got you covered. In this article, we will discuss four methods we can use to search for an item in an array. These methods are:
1. Filter
2. Find
3. Includes
4. IndexOf

Let's discuss each of them.

### Array.filter()
We can use the Array.filter() method to find elements in an array that matches a meets a certain condition. For instance, if we want to get all items in an array of numbers that is greater than 10, we can do this.

```js
const array = [10, 11, 3, 20, 5];

const greaterThanTen = array.filter(element => element > 10);

console.log(greaterThanTen) //[11, 20]
```
The syntax for using the array.filter() method is 

```
let newArray = array.filter(callback);
```

where
 - `newArray` - the new array that is returned
 - `array` - the array on which the filter method is called
 - `callback` - the callback function that is applied to each element of the array

If no item in the array meets the condition, an empty array is returned. You can read more about [this method here](/blog/javascript-array-filter/).

There are times when we don't need all the elements that meet a certain condition. We just need one element that matches the condition. In that case, you need the find() method.

### Array.find()
We use the Array.find() method to find the first element that meets a certain condition. Just like the filter method, it takes a callback as an argument and returns the first element that meets the callback condition. 

Let's use the find method on the array in our example above.


```js
const array = [10, 11, 3, 20, 5];

const greaterThanTen = array.find(element => element > 10);

console.log(greaterThanTen)//11
```

The syntax for the array.find() is
```js
let element = array.find(callback);
```

The callback is the function that is executed on each value in the array take three arguments:
- `element` - the element being iterated on - required
- `index` - the index/position of the current element -  optional
- `array` - the array that `find` was called on - optional

Note though that if no item in the array meets the condition, it returns `undefined`.

What if though, you want to check if a certain element is in an array? How do you do this?

### Array.includes()
The includes() method determines whether an array includes a certain value and returns true or false as appropriate.

So in the example above, if we want to check if 20 is one of the elements in the array, we can do this:

```js
const array = [10, 11, 3, 20, 5];

const includesTwenty = array.includes(20);

console.log(includesTwentyThree)//true
```

You'll notice a difference between this method and other methods we have considered. This method accepts a value rather than a callback as the argument. Here's the syntax for the includes method.

```js
const includesValue = array.includes(valueToFind, fromIndex)
```

Where
    - `valueToFind` - the value you are checking for in the array - required
    - `fromIndex` - the index or position in the array that you want to start searching for the element from. - optional

To get the concept of the index, let's use visit our example again. If we want to check the array contains 10 on other positions apart from the first element, we can do this:

```js
const array = [10, 11, 3, 20, 5];

const includesTenTwice = array.includes(10, 1);

console.log(includesTenTwice)//false
```

### Array.indexOf()

The indexOf() method returns the first index at which a given element can be found in an array. It returns -1 if the element does not exist in the array. 

Let's go back to our example. Let's find the index of 3 in the array.


```js
const array = [10, 11, 3, 20, 5];

const indexOfThree = array.indexOf(3);

console.log(indexOfThree)//2
```

Its syntax is similar to that of the `includes` method. 

```js
const indexOfElement = array.indexOf(element, fromIndex)
```

Where
    - `element` - the element you are checking for in the array - required
    - `fromIndex` - the index or position in the array that you want to start searching for the element from. - optional

It's important to note that both the `includes` and `indexOf` methods use strict equality( '===' ) to search the array. If the values are of different types e.g '4' and 4, they'll return `false` and `-1` respectively.

### Summary
With these array methods, you don't need to use a for loop to search an array. Depending on what you need, you can decide which of the methods is best suited for your use case. Here is a summary of when to use each method.
 - Use `filter` if you want to find all items in an array that meet a specific condition.
 - Use `find` if you want to check if at least one item meets a specific condition.
 - Use `includes` if you want to check if an array contains a particular value.
 - Use `indexOf` if you want to find the index of a particular item in an array.

 