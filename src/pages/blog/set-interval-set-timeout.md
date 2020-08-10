---
title: How to use the setTimeout and setInterval Methods in JavaScript
date: "2020-08-07"
description: Understand how to use the setInterval and setTimeout Methods in JavaScript.
featuredImage: https://res.cloudinary.com/dvj2hbywq/image/upload/v1596819107/neonbrand-KYxXMTpTzek-unsplash_kuey5r.jpg
tags: ["javascript"] 
---


There are times when you do not want a function to run immediately. You want it to delay its execution or even run repeatedly after a certain time interval. JavaScript provides us with two methods to achieve that: `setTimeout` and `setInterval`. In this article, we will discuss these two methods and how we can use them to schedule function calls in JavaScript.

### setTimeout
The `setTimeout` method runs a given function after a certain period. It sets a timer and executes the given function(callback) once the time expires. The syntax to use the `setTimeout` method is this:

```
const timerID = setTimeout(function, delay, arg1, arg2, ...)
```

- `function` - the function to be executed after the given delay period
- `delay` - the time, in milliseconds, the timer should wait before executing the function. This is an option argument. If it is not specified, a default value of 0 is used.

- `arg1, arg2, ... argN` - arguments for the given function. This is also optional.

The `setTimeout` method returns an integer value which identifies the timer that is created. This integer is used to clear the timer as we will see soon.

Let's use an example now


#### Basic setTimeout example

```
function sayHello() {
    alert("Hello")
}

setTimeout(sayHello, 2000)
```

This will alert "Hello" after 2 seconds.

<iframe width="100%" height="300" src="//jsfiddle.net/sarahchima/f68cw9xp/1/embedded/js,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

If this `sayHello` function accepts arguments, we can do this:
 
```
function sayHello(name) {
    alert(`Hello, ${name}`)
}

setTimeout(sayHello, 1000, "Sarah")
```

This will alert "Hello, Sarah" after 2 seconds. 

<iframe width="100%" height="300" src="//jsfiddle.net/sarahchima/myfctd3s/1/embedded/js,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

Oh! Don't we just hate browser alerts. Let's move on to a related and important method that we can use to prevent the function from executing.

### clearTimeout
The `clearTimeout` method is used to cancel the timer. For instance, we may want to cancel the timer before it executes the function. Remember that the `setTimeout` method return an ID. This ID is used to cancel the timer. Let's do this:

```
function sayHello(name) {
    alert(`Hello, ${name}`)
}

const timerID = setTimeout(sayHello, 3000, "Sarah")

clearTimeout(timerID)

```

The timer will never run.

<iframe width="100%" height="300" src="//jsfiddle.net/sarahchima/8hfu49e5/embedded/js,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

Let's move on to our next method.

### setInterval

The setInterval method is used to schedule a function to be executed <b>repeatedly</b> after a period of time. The syntax for this method is this:


```
const timerID = setInterval(function, delay, arg1, arg2, ...)
```

In this case, the delay is the time in milliseconds that the timer should delay successive executions of the function. The setInterval method also returns an ID which is used to clear the timer.

Notice that its syntax is very similar to that of the `setTimeout`. However, take note of this difference. For the `setTimeout` method, the function is only fired once after the timer has expired. However, the setInterval method runs the function repeatedly unless it is cancelled. Let's use an example.


```
function sayHello(name) {
    console.log(`Hello, ${name}`)
}

setInterval(sayHello, 3000, "Sarah")
```

The code above will repeatedly print "Hello Sarah" to the console after 3 seconds. Try to run the code to confirm this.

To stop the `setInterval` from continously running, we use the `clearInterval` method .

### clearInterval

The clearInterval method is used to stop the execution of a setInterval method. It accepts a timer ID as argument and uses the ID to stop the timer.

Let's go back to our example.

```
let counter = 0;
function sayHello(name) {
    alert(`Hello, ${name}`)
    counter++;

    if (counter === 3) {
        clearInterval(timerID)
    }
}

let timerID = setInterval(sayHello, 3000, "Sarah");

```

The function `sayHello` will be executed only 3 times. 

<iframe width="100%" height="300" src="//jsfiddle.net/sarahchima/9mp07L8b/embedded/js,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

You may wonder why the if statement is inside the function and not outside the function like this:

```
let counter = 0;
function sayHello(name) {
    alert(`Hello, ${name}`)
    counter++;
}

let timerID = setInterval(sayHello, 3000, "Sarah")

if (counter === 3) {
    clearInterval(timerID)
}

```

At this point, we need to understand the way JavaScript exceutes the `setInterval` and `setTimeout` methods. 

### Non-blocking I/O Operations
Unlike other languages, JavaScript has a single thread for executing tasks and it executes tasks this line by line. Meaning one line of code must complete execution before moving on the next. In other words, the execution of JavaScript code is blocking. 

However, there are some non-blocking I/O operations which are handled by the underlying engine. Operations such as fetching data via Ajax, `setTimeout` and `setInterval` belong to this category. So JavaScript does not wait for the function(callback function) passed to the `setTimeout` or `setInterval` method to finish executing before it moves on to the next task or line of code. 

In the example above, if we had written it the second way, the timer will not stop running. This is because immediately after executing this line `let timerID = setInterval(sayHello, 3000, "Sarah")
`, Javascript moves on to the next code block which is

```
if (counter === 3) {
    clearInterval(timerID)
}
```

And at that point, the condition is not true, so the timer is never cleared. This is also the reason why in our `clearTimeout` example, the callback function passed to the `setTimeout` is never triggered. Because JavaScript immediately moved on to the next line of code.

You can read more about [Asynchronous JavaScript here](https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee).


### Summary

In this article, we have discussed how to use the `setTimeout` and `setInterval` methods to schedule the execution of a function. I hope you learnt a thing or two from it. 

