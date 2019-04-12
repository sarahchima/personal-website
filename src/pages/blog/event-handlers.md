---
title: A Guide to Handling Browser Events
date: "2019-04-11"
description: In this article, we will discuss ways browser events can be handle, default browser actions and event propagtaion.
tags: ["javascript", "HTML"]
featuredImage: https://res.cloudinary.com/dvj2hbywq/image/upload/c_scale,w_800/v1555007526/ambitious-creative-co-rick-barrett-110145-unsplash-compressor_hzty02.jpg
---

<picture>

!['An event center'](https://res.cloudinary.com/dvj2hbywq/image/upload/c_scale,w_800/v1555007526/ambitious-creative-co-rick-barrett-110145-unsplash-compressor_hzty02.jpg)

<figcaption><span>Photo by <a href="https://unsplash.com/photos/HnUHOBuJ7s4?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Ambitious Creative Co.  - Rick Barrett</a> on <a href="/search/photos/event?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></figcaption>
</picture>

Most web pages are interactive and users can perform actions on the web page. Examples of actions are clicking on a link, submitting a form or even scrolling through the web page. 

There are times when you might want your page to behave in a certain way when the user performs a certain action. For instance, when a user clicks a button, you might want to display a modal. Or when a user fills a form on the page you might want to show the user if the input is valid. These actions are browser events.
 
In this article, we will discuss how we can handle events that occur in a browser. We will also discuss how to prevent default actions and what event propagation is. Let start right away.

### An Introduction to Event Handlers
When an event occurs, we can tell the browser how to respond using event handlers. An event handler is a function that runs when an event occurs. There are three ways we add event handlers:

1. Inline Event Handlers using HTML attribute
2. DOM property
3. Using the addEventListener method

###Inline Event Handlers
A handler can be set using an HTML attribute. For instance, if we want a button to alert 'hi' whenever a user clicks the button we can do this:

```html
<button onclick="alert('hi')">Say Hi</button>
```

We can also do this for a lot of other events using the same syntax. 

Writing a lot of code in an HTML element might not be convenient. We can also write a function in a script and call the function in the `on<event>` attribute. 

```html
<button onclick="sayHi()">Say Hi</button>

<script>
    function sayHi() {
        console.log('Hi')
    }
</script>
```

###DOM Property
Another way to handle an event is by using the DOM property. Let us use the example above to do this.

```html
<button>Say Hi</button>

<script>
    var button = document.querySelector('button');
    button.onclick = () => {
        console.log('hi')
    }
</script>
```

This produces the same result as the previous method. 

What happens when we apply an inline event handler and a JavaScript handler to the same element? 

```html
<button onclick="console.log('hi')">Say Hi</button>

<script>
    var button = document.querySelector('button');
    button.onclick = () => {
        console.log('no')
    }
</script>
```

The JavaScript handler takes precedence over the inline handler so 'no' is logged.

###The addEventListener method
We can use the addEventListener method to listen for an event on a particular DOM element. Using this method, we provide a method that handles such an event. One advantage of this method is that it allows you to register as many events as possible on an element. 

This is the syntax of the addEventListener method.

```js
target.addEventListener(type, function, useCapture)
```

Target is the element you want to listen for an event on.

Type is the type of event you want to listen for. For example, if it is a button, you can listen for a click event. 

The function is the event handler. It specifies the function is carried out when an event occurs.

useCapture is optional. It is a boolean that specifies whether an event should be used in the capturing or bubbling phase. If it is true, it is used in the capturing phase. If it is false (default value), it is used in the bubbling phase. We will touch more on this later.

Here is an example of using this method.

```html
<button>Say Hi</button>

<script>
    let button = document.querySelector('button');
    button.addEventListener('click', () => {
        console.log('Hi') //Hi
    })
</script>
```

In this case, `button` is my target, the type of event is `click`, the arrow function is the function that is executed when this code runs. If you run this code, anytime the button is clicked, you get 'Hi' in the console. 

A named function can also be passed as the callback function.

###The Event Object
When an event occurs, the browser creates an event object and passes it as an argument to the event handler. This event object contains details of the event. For instance, you might want to know which button was clicked or which key was pressed or the mouse coordinates when the event occurred. You can get all of these from the event object.

Using our example above, we can do this:

```html
<button>Say Hi</button>

<script>
    let button = document.querySelector('button');
    button.addEventListener('click', (event) => {
        console.log(event.clientX) //41
        console.log(event.clientY) //19
    })
</script>

```

It prints the x any y-coordinates of where the event occurred which in this case is 41 and 19 respectively.

The information stored in the event depends on the type of event that occurred. To get full details of the event object, you can log the `event` object to the console `console.log(event)`. In any case, it always has a `type` property that tells the type of event that occurred. 

###Default Actions
When an event occurs on some elements, there are actions that take place by default. For instance, when a link is clicked, it takes you to the link's target. When a button inside a form is clicked, the form is submitted. These are default actions of the browser. 

Event handlers are called for most events before the default takes place. It is possible to prevent the default action using the `event.preventDefault()` method. This method stops the default action from taking place. Here is an example:

```html
<a href="https://sarahchima.com">Sarah Chima</a>

<script>
    let link = document.querySelector('a');
    link.addEventListener('click', (event) => {
        console.log("Nope, you ain't visiting her today")
        event.preventDefault()
    })
</script>

```
When this link is clicked, it does not take you to the expected URL, rather it logs the statement into the console. 

This can also be used to implement keyboard shortcuts on a page or a context menu. 

However, for good user experience, it is best to avoid intercepting expected behaviour of an element. Such actions might make the user think that your website is broken.

###Events and Propagation
When an event occurs on an element, the event handler on the target element first runs. Then the handler of its immediate parent, if any, runs and that of its parent's parent all the way up to outermost element that has a handler. This is called propagation. 

An example will do some good here.

```html
<style>
    * {
        border: 1px solid green;
        margin: 15px
    }
</style>
<div onclick="alert('div')"> DIV
    <p onclick="alert('p')"> P 
        <span onclick="alert('span')"> SPAN</span>
    </p>
</div>
```

I added a little style to differentiate the elements. If you run this HTML code and click on the span element, you will notice that three handlers are fired. First, the one on the `span`, next, the one on the `p` tag and then the one on the `div` tag. This because when an event occurs it propagates to the outer elements and their handlers are also triggered. 

There are two types of propagation that can occur in an element: Bubbling and Capturing. We have seen this before when we were discussing the syntax of the addEventListener method.

The difference between bubbling and capturing is that in the bubbling phase, events propagate outwards. That is,  the handler on the innermost element gets triggered first, then the parent all the way up. 

In capturing, the reverse occurs. The handler on the outermost element is triggered first and then the child handler all the way down to the element where the event occurred. This is the reverse of what occurred in our example.

For event handlers, bubbling is the default but if the capture argument is set to true, then capturing occurs. To learn more about this, you can read [this article](https://javascript.info/bubbling-and-capturing) on it.

You might not want this propagation behaviour to occur when you click on an element. Thankfully, JavaScript provides a way to do so. To stop propagation, you can call the `event.stopPropagation()` method. This method prevents events from propagating.

In our previous example, we can do this:

```html
<div onclick="alert('div')"> DIV
    <p onclick="alert('p')"> P 
        <span> SPAN</span>
    </p>
</div>

<script>
    var span = document.querySelector('span');
    span.addEventListener('click', (event) => {
        alert('span')
        event.stopPropagation();
    }
</script>
```

If you run this code, you will notice that only the handler on the span is triggered. 

As with all default behaviours, preventing propagation should only be done when it is necessary. 

One last thing before we go.

###Removing an Event Listener

It is possible to remove an event listener using the `removeEventListener` method. We use it the same way we use the `addEventListener` method. We pass in the type and the function just the same way. However, the function must be stored in a variable for it to work.

Here is an example

```html
<button>Say Hi</button>

<script>
    let button = document.querySelector('button');

    function sayHi() {
        console.log('Hi')
    }
    button.addEventListener('click', sayHi)
    button.removeEventListener('click', sayHi)
</script>
```
Run this code and notice that the event listener function never runs. This is because the eventListener has been removed. 

If we do not store the function in a variable like in the example below, the `removeEventListener` will not work.

```html
<button>Say Hi</button>

<script>
    let button = document.querySelector('button');
    button.addEventListener('click', () => {
        console.log('hi')
    })
    button.removeEventListener('click',  () => {
        console.log('hi')
    })
</script>
```

###Conclusion

We discussed how we can handle events using HTML attributes, DOM property and the addEventListener method. We saw that we can prevent default actions by using the `event.preventDefault` method. We also learnt about event propagation. 

Handling events can help you control the way the browser responds to user actions and we have discussed how we can do this. In my next article, I will discuss 10 common events that can occur in a browser.