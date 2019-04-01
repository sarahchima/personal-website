---
title: Enhanced Object Literals in ES6
date: "2017-11-01"
description: Enhanced object literals in ES6
featuredImage: https://res.cloudinary.com/dvj2hbywq/image/upload/v1550930072/potrait.jpg
tags: ["es6", "javascript"]
---

Object literals make it easy to quickly create objects with properties inside the curly braces. To create an object, we simply notate a list of key: value pairs delimited by comma. ES6 makes the declaring of object literals concise and thus easier. Three major ways it does this are :

1. It provides a shorthand syntax for initializing properties from variables.
2. It provides a shorthand syntax for defining function methods. 
3. It  enables the ability to have computed property names in an object literal definition.

Let's examine each of them.

<b>Shorthand for Initializing Properties</b>
We will use an example to explain this. Let's create a `getLaptop` function. We are using a function here to make it easier for to pass variables. We are basically still creating an object. Prior to ES6, if we want to initialize a property in an object using object literals, we will do the following:

```javascript
//ES5
function getLaptop(make, model, year) {
    return {
        make: make,
        model: model,
        year: year
    }
}

getLaptop("Apple", "MacBook", "2015");// {make: "Apple", model: "MacBook", year: "2015"}
```
So in the above function, the object that is being returned is created using object literals. The properties of this object are created by assigning the value of the parameters passed to their corresponding keys. Did you notice the repetition there? I did too. ES6 removes all of that repetition. Here's how we will write our `getLaptop` function;


```javascript
function getLaptop(make, model, year) {
    return {
        make,
        model,
        year
    }
}

getLaptop("Apple", "MacBook", "2015"); // {make: "Apple", model: "MacBook", year: "2015"}
```
Much more easier to write and read. What happens here is that it checks if the property key has a corresponding variable name and assigns the value of that variable to the property. Note that if no variable has the same name as the property key defined, we'll get an error. Let's move to the next enhancement then.

<b>Shorthand for writing Methods</b>
Prior to ES6, the syntax for writing methods in objects is this: 


```javascript
//ES5
function getLaptop(make, model, year) {
    return {
        sayModel : function() {
            return model;
        }
    }
}

getLaptop("Apple", "MacBook", "2015").sayModel(); //"MacBook"
```
With ES6, we don't have to write much code just to get a method to work.

```Javascript
//ES6
function getLaptop(make, model, year) {
    return{
        sayModel() {
            return model;
        }
    }
}

getLaptop("Apple", "MacBook", "2015").sayModel(); //"MacBook"
```
Did you notice the difference? The `:` and `function` are no longer necessary to define a method. So ES6 makes the syntax for creating methods concise.

<b>Computed Properties and Object Literals</b>
If you read my previous article on [Object Destructuring](https://dev.to/sarah_chima/object-destructuring-in-es6-3fm), you might have come across this. Well, as you might already know, there are two ways to specify a key when accessing an object property: the dot notation and bracket notation. The bracket notation allows us to access a property using expressions. Computed property names allow us to write an expression wrapped in square brackets instead of the regular property name. Whatever the expression evaluates to will become the property name. This means that we can do  this:

```javascript
var name = "make";
const laptop = {
    [name]: "Apple"
}

console.log(laptop.make);//"Apple"
```
The value of `name` was computed to `make` and this was used as the name of the property. This is why we can access the property using `laptop.make`;

Similarly, this will work.

```javascript
var name = "make";
var i = 0;
const laptop = {
    [name + ++i]: "Apple",
    [name + ++i]: "Dell",
    [name + ++i]: "HP"
}

console.log(laptop.make1);//"Apple"
console.log(laptop.make2);//"Dell"
console.log(laptop.make3);//"HP"
```
In this case, the value of both `name` and `i` are computed and concatenated to get the name of the property. I think this is pretty cool, don't you?

That's all for enhanced object literals.

Got any question or addition? Leave a comment.

Thanks for reading. :)