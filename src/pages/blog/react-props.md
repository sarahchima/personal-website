---
title: React Properties
date: "2017-10-20"
description: Learn how to use props in React
featuredImage: https://res.cloudinary.com/dvj2hbywq/image/upload/v1550930072/potrait.jpg
tags: ["react", "javascript"]
---

Last time, I wrote on [React Components](https://dev.to/sarah_chima/an-introduction-to-react-components-cke). This time, we will talk about something every component has - properties. I'll be making use of the component we created in that article to explain properties. So you might want to read it especially if you are not so familiar with [React Components](https://dev.to/sarah_chima/an-introduction-to-react-components-cke).

A component `props` is an object that holds information about that component. They are similar to attributes in HTML. In fact, they are passed to the components same way attributes are passed to HTML.

Here's the code for the component we made in my previous article.

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

<h3>Adding Properties to Components </h3>

So let's say we want to pass a value to the name property of `Greeting` component we created. We will do this.

```js
<Greeting name = "Sarah" />
```

Quite simple right? A component can take as many properties as you want it to.  

```js  
<Greeting name = "Sarah" message = "I will like you to be my friend" blah = "blah blah blah" />
```

Take note of what's necessary to pass a property. You need a name which in the above example are `name` `message` and `blah`. The name of the property can be anything you choose to call it. The second thing is the information you want that property to store. These are "Sarah", "I will like you to be my friend" and "blah blah blah" in the example above.
If we want to pass information that's not a string, say a function, an object, an array or a variable, it has to be wrapped in curly braces.

```js
<Greeting message = {greetings} myInfo = {{firstName : "Sarah", lastName : Chima }}/>
```

How can we access and display this properties we just passed to the component?

<h3>Accessing Properties</h3>

We use `this.props`to access properties passed to a component. The `this.props` object contains all properties that a component has. Let's go back to our example of the `Greeting` component.  Let's say we want to the user to be able to pass the name of the person to say hello to and the message to be passed. This is how we will do that.

```js
class Greeting extends React.Component {
    render() {
        return (
            <div className = "box">
                <h2> Hello {this.props.name}!!!</h2>
                <p> {this.props.message} </p>
            </div>
        );
    }
}
```

What we have just done is to tell the component to render whatever information that is passed to the name property and message property. So if we do this

```js    
ReactDOM.render(<Greeting name = "Sarah" message = "I want to be your friend" /> , document.getElementById("app"));
```

This is what we are actually rendering

```js
...
<div className = "box">
    <h2>Hello Sarah!!!</h2>
    <p>I want to be your friend</p>
</div>
...
```
<h3>Handling an Event</h3>

There are times when we want to pass functions to a property. For instance, you want a function to handle an event like `onClick` or `onKeyDown`, how can this be done?
Let's proceed with our example to explain this. Let's add a button to our Greeting that says "hello" when clicked.

First of all, we will add a method to the `Greeting` component that handles the `onClick` event. This method will be outside `render()`.

```js
class Greeting extends React.Component {

    handleClick () {
        alert ("Hello Human");
    }
    
    render() { ...
```

Then we will pass the method to the `onClick` property of the button we add.

```js
...
    render () {
        return (
            <div className = "box">
            <h2>Hello {this.props.name}!</h2>
            <p>{this.props.message}</p>
            <button onClick = {this.handleClick}>Click Me</button>
            </div>
            );

    }
```

<h3>Default Properties</h3>

You can also pass default properties to a component. For instance, what if a person uses the `Greeting` Component without passing any property to it? We don't want our new acquaintance to think we are unfriendly. In this case, we can set default `props` for the component. We do this by adding a default value property for our component. This `defaultProps` must be equal to an object.

```js
Greetings.defaultProps = {name : "Human Friend", message : "You are welcome to our world"};
```

This will be added after the class declaration.

<h3>Accessing the Children </h3>
Components can also have children. For instance, the `Greeting` component can be written as 

```js
<Greeting>Hello</Greeting>
```

This is still valid. To access the children of this component, which in this case is the string `Hello`, we use `this.props.children`. With this we can access anything that's between the two tags.

<b>NOTE</b> One last thing to note that Properties are read only. A component should not modify its own `props`. `props` store information that can only be modified by another component and never by itself.

Here's a [Codepen](https://codepen.io/sayrah901/pen/XeGOwo) that demonstrates all we've done so far. Try to play with it until you are sure you understand what we've done.

Got any question? Any addition? Feel free to leave a comment.

Thank you for reading :)