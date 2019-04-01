---
title: An Introduction to React Components
date: "2017-10-19"
description: Components make it possible to divide any user interface into resuable parts. Find out about them in this article.
featuredImage: https://res.cloudinary.com/dvj2hbywq/image/upload/v1550930072/potrait.jpg
tags: ["react", "javascript"]
---


Any user interface can be broken into smaller parts. These parts are components of the UI. An example is the page you are viewing right now (the dev.to page). Let's try to break it into smaller parts. First, we have two major parts: the navbar on top of the page and the body that contains the text you are reading. The navbar can further be broken down into smaller parts. We have a search field, a link for `write a post`, a notification icon and a dropdown menu with an image on top. Each of these parts is a component that make up the navbar of this page. They can be referred to as sub-components of the navbar. So the page is made up of components(the navbar and body) that have sub-components. The more complex the UI is, the more components it can be broken into. Let's get a proper definition now.

A component is a reusable chunk of code. Components make it possible to divide any UI into independent, reusable pieces and think about these pieces in isolation. Just like a pure function, a component should ideally do just one thing. What are we waiting for? Let's create a component right away.

We are going to create a component that welcomes people to a page. It is really basic but it is important that we  start with this so that we can easily understand how to create and render a component. Here's a [Codepen](https://codepen.io/sayrah901/pen/pWGQjq) of what we want to achieve.

```js 
import React from "react";
import ReactDOM from "react-dom";

class Greeting extends React.Component {
    render() {
		return (
			<div className = "box">
				<h2> Hello Human Friend!!!</h2>
				<p> We are so glad to have you here. </p>
			</div>
		);
    }
}

ReactDOM.render(<Greeting />, document.getElementById("app"));
```

It's okay if you don't understand what's going on in the code. I'll explain each part shortly. Let's start with the first part. 

```js
    import React from "react";
    import ReactDOM from "react-dom";
```

`react` and `react-dom` are JavaScript libraries. `react` is the React library. It  contains methods that you need in order to use React. `react-dom` is a JavaScript library which contains several methods that deal with the DOM in some way.  What we are doing here is simply assigning these libraries to variables so that they can their methods can be used anywhere in our js file.

```js
    class Greeting extends React.Component {
      ...
```
The above is the syntax for creating a component class.
Here we are making use of the [ES6 class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) to make a component class. This component class itself is not a component but a factory that is used to create components. Confusing huh? It is similar to a CSS class. You define a class in a CSS file once. Then you can use this class in several places through out your HTML file. Each time you use the class, all properties of the class are added to the HTML element you use it for. So here, you define a component class and use it to create components with the same methods that were defined in the component class.

`Greeting` is the name of your component class. In React, components conventionally start with a capital letter to differentiate them from normal HTML elements. The `extends` keyword is used in class declarations or class expressions to create a class as a child of another class. That is, to create a subclass of a class.

To create this component class, you use a base class from the React library which is `React.Component`. When you do this, you are actually subclassing  `React.Component`. So the above is the syntax for creating a component class. 

<b>Note</b>: This is not the only way to create a component. I just find this one more convenient.

```js
    render() {
        return (
			<div className = "box">
				<h2> Hello Human friend</h2>
				<p> We are so glad to have you here. </p>
			</div>
        );
      }
    }
```

`render()` is an important part of each component class. It should be present in every component class. It must also contain a return statement. Basically, `render()` is a function that defines what should be returned in a component. This could be a react element, a string or number or even a component. 
The render() function should be pure. This means that it does not modify component state, it returns the same result each time it’s invoked, and it does not directly interact with the browser.
So in our component, the `render()` function will return an element which is the `<div>`. 

Finally,

```js
    ReactDOM.render(<Greeting />, document.getElementById("app"));
```

`ReactDOM.render` causes your component to appear on the screen. Remember a self closing tag must always contain the forward slash before the closing angle bracket in JSX.

Once more, here's a link to the [Codepen](https://codepen.io/sayrah901/pen/pWGQjq) where you can see the component that was just created. You can always play with it to ensure that you understand it.

Now, if I ever want to welcome people on any other part of my app, I'll simply use the `<Greeting />` component. Cool!!!

There you have it, an introduction to React components. Got any question? Any addition? Feel free to leave a comment.

Thank you for reading :)
