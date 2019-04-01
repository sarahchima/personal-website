---
title: What is Hoisting Anyway?
date: "2019-03-25"
description: Learn what Hoisting in JavaScript is, how it works and what gets hoisted.
featuredImage: https://res.cloudinary.com/dvj2hbywq/image/upload/v1550930072/potrait.jpg
tags: ["es6", "javascript"]
---

Hoisting is a term you come across from time to time as a JavaScript developer. Do you know what hoisting is and how it works? Well, let us find out if you do. In this article, we will discuss what hoisting is, how it works and what gets hoisted. 

<h3>What is Hoisting? </h3>
To understand what hoisting is, there are some concepts that we need to understand. 

First, it is common to think that JavaScript is not a compiled language. Contrarily, the JavaScript engine compiles the code before execution. 

Second, we need to understand some types of errors that can occur when we want to fetch the value in a variable. They are the Reference error, Type error and undefined. `ReferenceError` occurs when you call a variable that is not declared. `TypeError` occurs when a value is not of expected type. `undefined` is returned when the variable called has no assigned value or is not initialized. Equipped with this basic knowledge we can now understand what hoisting is. If you do not understand these, examples in this article will help you to understand it better.

<b>So what is hoisting? </b>

Hoisting is a JavaScript concept whereby variable and function declarations are put into memory during the compilation phase before the code is executed. It makes it appear like these declarations are moved to the top of their scope thus making them available anywhere in that scope. Note that this does not physically happen. 

Let us understand this better using an example.

```js
console.log(a)

var a = 2;
```

Looking at the code above, what do you think will be the result? 2? undefined or Reference error? Open your browser console and run the code. What did you get?

I got `undefined`. I am sure you got that too. You might expect a Reference error because you called a variable before it was declared. That did not happen because the variable declaration was hoisted to the top of the code. So during execution, the code is executed like this.

```js
var a;

console.log(a); //undefined

a = 2;

``` 

Makes sense right? Note that it is only declarations that the engine hoists, assignments are not hoisted. Variable declarations are hoisted and initialized with `undefined`. That is why we got `undefined` and not 2 because the assignment remained in the place it was assigned.

Also, note that hoisting is per scope. So the variable will be available in the functional scope if we declare within a function.  It will be available in the global scope if we declare it outside a function. If we use a variable outside the scope where we declared it, it will return a `Reference Error`. For example, if we execute the code below, we get a reference error.

```js
console.log(b); //Uncaught ReferenceError: b is not defined

function a() {
    var b = 2
}
```
Speaking of functions, are all functions hoisted? I think we need a heading for what gets hoisted.

<h3>What Gets Hoisted</h3>

Function declarations are hoisted. So we can call a function before we declare it in our code. 

```js
foo(2); // 2

function foo(a) {
    console.log(a)
}

```

Function expressions are not hoisted. If we call a function expression before we assign a function to it, we get a `TypeError.

```js
foo(2); // Uncaught TypeError: foo is not a function

var foo = function (a) {
    console.log(a)
}

```

`foo` is initialized with `undefined`, therefore calling the variable as a function leads to a type error.

What about ES6 variables `let` and `const`? Are they hoisted too?

Yes, they are but are not initialized with `undefined` like `var`, they stay uninitialized. If we use them before they we assign a value to them, they return a `ReferenceError` rather than `undefined`.

```js
console.log(b); //Uncaught ReferenceError: b is not defined

let b = 2;

```

Same thing with `const`

```js
console.log(a);//Uncaught ReferenceError: a is not defined

const a = 2;
```

We should note that we cannot declare the `const` variable without initialization. So the code below will throw a different kind of error.

```js
console.log(a)

const a;
a = 4;

//Uncaught SyntaxError: Missing initializer in const declaration
```

<h3>What Gets Hoisted First? Variables or Functions?</h3>

We have seen that both variables and function declarations get hoisted. Which of them get hoisted first? Let us do a little exercise. Look at the code below, what do you expect to be printed? string or function? Make a guess and then try it in your console.

```js
console.log(typeof foo);

var foo = 'hello';

function foo() {
    console.log(4);
}

```

What was the result? I am sure the result is `function`. This proves two points:

1. Functions are hoisted first, that is why although the variable was declared before the string, the JavaScript engine still interprets it as a function. In fact, this is how the engine executes the code.

```js
function foo() {
    console.log(4);
}

console.log(typeof foo); //function

foo = 'hello';
```

If the console.log statement were to come after the variable declaration, the result would have been `string` instead. Notice that the variable declaration (which is a duplicate of the function ) was ignored. This brings us to the second point. 

2. It is a bad idea to make duplicate declarations with the same variable name. Duplicate declarations are ignored by the JavaScript engine and can often lead to confusing results.

Let us have a review of what we have discussed in this chapter.

<h3>Review</h3>

1. Hoisting is a concept where variable and function declaration appears to move to the top of the code during execution. This is because variable and function declarations are processed during the compilation phase. 

2. All variables are hoisted. `var` is hoisted and initialized with `undefined`. `let` and `const` are hoisted and are not initialized.

3. Function declarations are hoisted while function expressions are not.

4. In the compilation phase, functions declarations are hoisted before variable declarations.

Thank you for reading.