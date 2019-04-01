---
title: Understanding State in React Components
date: "2017-10-21"
description: 
featuredImage: https://res.cloudinary.com/dvj2hbywq/image/upload/v1550930072/potrait.jpg
tags: ["react", "javascript"]
---

State like [React props](https://dev.to/sarah_chima/react-properties-cml) are used to store data in React. A difference between `state` and `props` is that while the data stored by `props` are fixed throughout their lifetime, `state` store data that can be changed overtime. This change can be in response to user actions, network responses or anything. Also, while `props` are set by the parent component, `state` is changed internally by the component itself.

A component's state should be considered as private data. This data is not exposed to the component that makes use of it. It is private and fully controlled by the component. It is only seen on the inside of component definitions. You can think of `state` as an internal data-set which affects the rendering of components. 
Components that have a state are referred to as stateful components while those that do not have states are referred to as stateless components. 

You can set a component's default state, access the current state and update this state. Let us consider how we can do each of this. We are going to make reference to the `<Greeting />` component that was created in my article on [React Components](https://dev.to/sarah_chima/an-introduction-to-react-components-cke).
Here's the component that was created.

```js  
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

<h3>Setting a Component's Initial State </h3>
```js
class Greeting extends React.Component {
	constructor(props) {
	super(props);
	this.state = {
		name : "Human Friend", 
		message : "You are welcome to our World"
	}
	}...
```      

The above is the syntax for doing setting a component's default state. The `constructor` method is a special method for creating and initializing an object created with a class. In any class, there can only be one `constructor` method. `super` allows you to call the constructor method of the parent class. You need to  include `props` to have access to `this.props` inside of your constructor. In React, `super` should be present in a `constructor` method.

You set the initial state of the component by using `this.state`. `this.state` should be equal to an object just like in the example above. So in our example, the initial state of the component has been set to 

```js
this.state = {
		name : "Human Friend", 
		message : "You are welcome to our World"
	}
```
So that's how the initial state of a component is set. How can we access a component's state then?

<h3>Accessing a Component's State</h3>

To access a component's state  we use `this.state.name-of-property`. For instance, if we want to access the state of the `name` we simply use `this.state.name`.
Now let's change what is displayed to be the initial state of the component. 
```js   
render() {
	return (
		<div className = "box">
			<h2> Hello {this.state.name}!!!</h2>
			<p> {this.state.message}</p>
		</div>
	);
}
```
If you understand `state` up to this point, you are doing great. Next, let's see how to change the state of a component.

<h3>Changing a Component's State</h3>

To change a component's state, we call a function `this.setState()`. `this.setState()` takes two arguments, an object and a callback. So, in our greeting component, if we are to call this.setState({name : "Sarah"}), the state of the `name` property will be changed to "Sarah". Cool!!!

So back to our `<Greeting />` component. Let's see `this.setState` in action. What we are going to do is to create a button that toggles between the initial state of `this.state.name` and the new `this.state.name`.

First we add the button.
```js
render() {
	return (
		<div className = "box">
		<h2> Hello {this.state.name}!!!</h2>
		<p> {this.state.message}</p>
		<button onClick = {this.handleClick}> Click Me </button>
		</div>
	);
}
```

Next, we add a method that handles the click.
    
```js
handleClick() {
	const newName = this.state.name == "Sarah" ? "Human Friend" : "Sarah";
	this.setState({name : newName});
}
	...
```

So what the above code does is to check if the value of `this.state.name` is "Sarah". If it is, the value of `newName` is "Human Friend" and vice versa. Then we set `this.state.name` to the value of `newName`.

One last thing, In JavaScript, class methods are not bound by default. If you forget to bind `this.handleClick` and pass it to `onClick`, `this` will be undefined when the function is actually called. So we have to bind our method to `this` in the constructor method.

```js
class Greeting extends React.Component {
	constructor(props) {
	super(props);
	this.state = {
		name : "Human Friend", 
		message : "You are welcome to our World"
	}
	this.handleClick = this.handleClick.bind(this);
}
```

It's nice that you have read up to this point. Here is total code we've written for the `<Greeting/>` component.

```js    
class Greeting extends React.Component {
	constructor(props) {
	super(props);
	this.state = {
		name : "Human Friend", 
		message : "You are welcome to our World"
	}
	this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
	const newName = this.state.name == "Sarah" ? "Human Friend" : "Sarah";
	this.setState({name : newName});
	}

	render() {
	return (
		<div className = "box">
		<h2> Hello {this.state.name}</h2>
		<p> {this.state.message} </p>
		<button onClick = {this.handleClick}>Click Me </button>
		</div>
	);
	}
}

ReactDOM.render(<Greeting />, document.getElementById("app"));
```

To see how this works, [try it on Codepen](https://codepen.io/sayrah901/pen/EwJNjQ).

So, we've been able to understand states and learn how we can initialize, access and update a component's state. Awesome!!!

Got any question? Any addition? Feel free to leave a comment.

Thank you for reading :)