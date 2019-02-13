---
title: Arrow Functions in ES6
date: "2017-10-26"
description: Arrow Functions in ES6
tags: ["javascript", "es6"]
---

Along with ES6 came arrow functions. If you learnt JavaScript before ES6 was introduced or you learnt JavaScript using resources that are yet to include features of ES6, arrow functions might be a bit confusing to you. This might be because its syntax is quite different from ES5 JavaScript's function declaration and expressions. The difference is more than just the syntax though, it also includes the scope of the `this` keyword and its `arguments`. This article is here to help us understand all of these. Let us start with its syntax.

<h3>SYNTAX</h3>

We'll use an example to explain this. In ES5, if we want to iterate over an array using `Array.prototype.map` we'll do this.
    
```Javascript
   var numbers = [3, 4, 5, 6];

   var threeTimes = numbers.map(function(x) {
       return x * 3;
   });

   console.log (threeTimes);//[9, 12, 15, 18]
```
If we are to rewrite the function in ES6, we'll replace the `function` on the left of `(x)` with a fat arrow `=>` on its right like this:

```Javascript
   var threeTimes = numbers.map((x) => {
        return x * 3;
   });
```
Easy right? Congratulations to us, we just created an arrow function. But the goodnews is that this can even be simplified further. Since the function receives just one argument, we can further simplify it by removing the bracket around `x`.


```Javascript
   var threeTimes = numbers.map( x => {
    return x * 3
    });
```
Cool!!! Note though that if the arguments are more than one, they have to be in a bracket. We will see an example of that soon. Next, we can remove the curly brackets after that arrow without harming anything like this:

```Javascript
   var threeTimes = numbers.map( x => return x * 3 );
```
So we have just one line of function now. This function can even be simplified further but this will bring us to another feature which is part of the syntax of arrow functions - implicit return. 


<b>Implicit Return</b>

What does this mean?

Maybe understanding the opposite of this, i.e explicit return, might help us understand it better. Well, explicit return is when we write `return` to tell the function what to return like we did in the example above. This is not necessary in arrow functions if we are returning just one line of code. Implicit return simply means if you are returning one line of code you don't have to use the keyword `return`. `return` is implied if there is an expression after the arrow. This is cool as most return statements are usually one line of code.
So our example can be written as:

```Javascript
   var threeTimes = numbers.map( x =>  x * 3);
```
See how simple the syntax of an arrow function is? 

There is another thing to note about arrow functions.

<b>Arrow functions are anonymous.</b>
 This means that we can't do this in ES6:

```Javascript
    //ES5
   function sayHello() {
   ... 
    }
```
The function above is a named function. This is useful if there's an error and you want to know the particular function the error called in. However, if we want a function to have a name so that it can be called later, we have to store it in a variable. An example is given below.

```Javascript
   var square = x => x * x;

   square(2); // 4
```
If it's a function that receives more than one argument, it will be written as:


```Javascript
   var add = (a,b) => a + b;
```
What if there are no arguments at all? We can simply write the function as :


```Javascript
   var sayHello = () => "Hello";
   var x = sayHello();// x = "Hello"
```
My guess is that you've gotten a hang of of the syntax now. We should move further and talk about another feature of arrow functions - lexical scope of `this`.

<b>Lexical Scope of `this` in Arrow functions</b>

`this` is a keyword that is confusing even to developers that have used Javascript for a number of years. To explain this, I'll use an example. We want to create a counter that increases the number of seconds.

```Javascript
   //ES5
   function counter() {
      this.seconds = 0;
      this.setInterval(function() {
        this.seconds++;
        console.log(this.seconds);
      }, 1000); 
    }

    counter();
```
We might expect that to work and `this.seconds` will be increased after every second. This is what you will get instead.

```Javascript
    //NaN
    //NaN
    //NaN
    //NaN
```
Why does this happen? It's because in ES5, each function binds its own `this`.  So in the `setInterval` function, `this.seconds` does not refer to its parent `this.seconds`, but to the window's `this.seconds` which is not a number.
To resolve this in ES5, we either store the parent's `this` in a variable and use it like below

```Javascript
   //ES5
   function counter() {
      this.seconds = 0;
      var that = this;
      this.setInterval(function() {
        that.seconds++;
        console.log(that.seconds);
      }, 1000); 
    }
```
 or we bind(this) to the `setInterval` function like this.
    

```Javascript
   //ES5
   function counter() {
      this.seconds = 0;
      this.setInterval(function() {
        this.seconds++;
        console.log(this.seconds);
      }bind(this), 1000); 
    }
```
In ES6, you don't have to go through all that stress as arrow functions do not bind their own `this`. Rather, `this` in an arrow function always refers to its parent's `this`. Arrow functions inherit the scope of their parent. So the above  example can be rewritten as

```Javascript
   //ES6
   function counter() {
      this.seconds = 0;
      this.setInterval(() => {
        this.seconds++;
        console.log(this.seconds);
      }, 1000); 
    }
```
So the `this` value is not actually bound to the arrow function. `this` in arrow functions is actually gotten lexically from  its parent. It has no `this`, so when you use `this`, you’re refering to the outer scope.

<b>No Binding of Arguments</b>

Just like in the case of `this`, arrow functions do not bind their own `arguments` objects. `arguments` in an arrow function is simply a reference to the arguments of the enclosing scope. So we can do this :

```Javascript
    var arguments = [1, 2, 3];
    var arr = () => arguments[0];

    arr();//1
```
It works because its reference is to its parent's arguments.

So this is basically what you should understand about Arrow functions. If you want further reference, [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) is a good place to check.

Got any question or addition? Please leave a comment.

Thank you for reading :)