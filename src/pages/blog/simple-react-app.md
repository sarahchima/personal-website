---
title: Let's create a simple React App
date: "2017-10-23"
description: What is knowledge without practice? This article shows you how to build a simple tag adding app with React.
featuredImage: https://res.cloudinary.com/dvj2hbywq/image/upload/v1550930072/potrait.jpg
tags: ["react", "javascript"]
---

The app we will be creating is a super simple app. It is more of a component than an app because it's basic. It's an app that can be used to add tags. If you've ever written an article on Medium, you might be familiar with this feature. It is very similar to a ToDo app and have almost the same requirements. Before you quickly dismiss this article as trivial, here are some of what you will learn while building this app.

1. Learn the steps to take in building a React app.
2. Learn how components interact with each other and pass data to each other.

This basic knowledge can help you in building even more complex apps in React.
Here, I assume you have a basic knowledge of JSX, React Components, Properties and state. If you don't, you might want to read on them by following the links above. If you do, what are we waiting for? Let's get started right away.


The first step in creating any React app is to break the UI into components. A component should ideally do one thing. So if you realize that a component does more than one thing, it might be time for you to break it down into smaller components.The UI of our app has been broken down into small components as shown in the image. 

![components of app](http://res.cloudinary.com/dvj2hbywq/image/upload/v1508764606/Screenshot_173_obizyi.png)

So, you can see that we have four components that make up our app. These are ;

1.    the outer container that holds all other components which we will name as `TagApp`
2.    the input component which will be named `TagInput`
3.    the tag component which we will name `Tag`
4.    the component that contains all tags which will be named `TagList`

The next step is to create a static version of the app. This will be done using JSX and CSS. This version contains no interactivity at all. No states, just the basic user interface as seen in the image. This version will contain no other method apart from the render method.
Here's the code for this.

```js
import React from "react";
import ReactDOM from "react-dom";

class TagInput extends React.Component {
	render () {
		return (
			<form>
				<input  placeholder = "Add a tag"/>
			</form>
		);
	}
}

class Tag extends React.Component {
	render () {
		return (
			const name = this.props.name;
			<li>{name}
				<button>X</button>
			</li>
		)
	}
}

class TagList extends React.Component {
	render() {
		return (
		<ul>
		
		</ul>
		);
	}
}

class TagApp extends React.Component {           
	render() {
		return (
			<div className = "tagComponent">
				<h2>Tag It</h2>
				<div className = "tagBox">
					<TagInput  />
					<TagList />
				</div>
			</div>
		)
	}
}

ReactDOM.render(<TagApp />, document.getElementById("app"));
```

The code above will create the simple user interface with no interactivity at all. 

The next step is to identify the kind of interactions that will take place between these components. The relationships between these components will determine the way the interactions will take place. So let's state what each component will do.

1. The `Tag` component receives its name via `props` from the parent component which is the `TagList` component. The `Tag` component should be able to delete itself thereby updating the state of `TagList`. The relationship between `Tag` and `TagList` is that of a child and parent where `Tag` is the child and `TagList` is the parent.

2. The `TagInput` should be able to update the `TagList` component whenever a new input is submitted. Since they both have the same parent, i.e. they are both subcomponents of a component, the `TagApp` component, they are siblings. The way they interact is different from that of a parent and child.

So how can a child component update/change a parent component? The answer is through the use of `state` and `props`.Remember though, that a state is internal to a component and can only be changed by the component itself. So how does can a child update its parent's state? I'll use an analogy to explain this.

Imagine that a parent makes a room inaccessible to the children because he keeps important items in that room. The children know what kind of items are kept in the room but are not allowed to go in there to keep or take anything. Since the parent knows that the child might need to take or keep items in that room sometimes, he provides a box in the children's room where the children can keep stuff they want to be kept in the room or write a note requesting for a particular item they need from the room. This box will be used to take these items to the room or from the room. 

This is similar to what happens to the `child` and `parent` component. The `child` has no direct access to the state(room in our analogy) of the `parent`. But since there is a need for the child to change the state of the `parent`, the parent has to provide a method (the box in our analogy) that is accessible to the `child`. This method is passed to child as a property and the child can access it by using that property. 

Now that we have explained the way parent and child interact, let's understand how siblings interact. Another illustration will be appropriate. 

Let's say a parent makes a rule, a quite abnormal rule in the house. The rule is that no child should  give his/her sibling any book without his consent. So if a child wants to give her sibling a book, she has to first give it to her parent, who then gives this book to her sibling. Very abnormal rule indeed but it will help us to understand how components that are siblings pass data to themselves.

Siblings cannot directly pass data to themselves. If a `child` component wants to update the state of a `sibling` component, it will first have to send this change to its parent and the parent will then pass this update via props to the sibling that is to be updated. Having this relationships in mind, let's continue with our app. 

    
The `Tag` uses `this.props.name` for its innertext and changes the state of the its parent (`TagList`) when the delete button is clicked. Let's add these features to the `Tag`.

```javascript
class Tag extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	//uses this.props.onClick to update the state of its parent when clicked.
	handleClick () {
		const tagName = this.props.name;
		this.props.onClick(tagName);
	}

	render () {
		return (
			<li>{this.props.name}
			<button onClick = {this.handleClick}>X</button>
			</li>
		)
	}
}
```

How does clicking of the button work? When the button is clicked, `handleClick` simply gets the `name` of the Tag and passes the value to the `onCl ick` property which is a method defined in its parent component, `TagList` Component. 

In the `TagList` Component, we create a method that is used by the `Tag` component to remove a tag that was deleted. This method is then passed to each `Tag` component through the `onClick` property.

```javascript
class TagList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {list : this.props.value};
		this.handleClick = this.handleClick.bind(this);
	}
	
	//This is the method that is used by the Tag component
	handleClick(tag) {
		let list = this.state.list;
		for (let i = 0; i < list.length; i++) {
			if (list[i] == tag) {
			list.splice(i, 1);
			}
		}
		const newList = list; 
		this.setState({list : newList});
	}

	render() {
		const displayList = this.state.list;
		let tagList = displayList.map((tags, i) => 
			<Tag key={'item' + i} name = {tags} onClick = {this.handleClick} />
		);
		return (
			<ul>
				{tagList}
			</ul>
		);
	}
}
```

The `TagList` also depends on the state of its parent component, which is the `TagApp` component. The state of the `list` was initialized to `this.props.value`. `this.props.value` is a `props` that will be passed on this `TagList` by the `TagApp`. Before we go further on this, let's discuss the interactions of the `TagInput`.

```javascript
class TagInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value : ""};
		this.handleInput = this.handleInput.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit() {
		event.preventDefault();
		const input = this.state.value;
		if (input == "") {
			return;
		}
		this.setState({value : ""});
		this.props.onChange(input);
	}

	render () {
		return (
			<form onSubmit = {this.handleSubmit}  >
			<input value = {this.state.value} onChange = {this.handleChange} placeholder = "Add a tag"/>
			</form>
		);
	}
}
```
First the `TagInput` sets initializes a state for value. This will be updated by the `handleChange` method as the value in the input field is changed. When the form is submitted, the `handleSubmit()` method takes the value of `this.state.value`, checks if it's a valid input and then passes this input to the method `this.props.onChange` which is a method that is passed on to it by the parent component `TagApp` that will be used to update the state of `TagApp`.

The final component we will work on is the `TagApp` component, which contains and interacts with its children components, `TagList` and `TagInput` components. It is this `TagApp` that `TagInput` uses to update the `TagList`.

```javascript
class TagApp extends React.Component {
	constructor (props) {
		super(props);
		this.state = {display : [], error : ""};
		this.handleChange = this.handleChange.bind(this);
	}
	
	//checks if newInput is already on the list, if not, adds newInput to list.
	handleChange(newInput) {
		const isTag =(array, tag) => {
			for (let a = 0; a < array.length; a++) {
				if (array[a] == tag) {
				return true;
				}
			}
		}
		const tagsArray = this.state.display;
		if (!isTag(tagsArray, newInput)) { 
			tagsArray.push(newInput);
			this.setState({display : tagsArray, error : ""});
		}
		else {
			this.setState({error :"You've already added that tag"})
		}
	}
						
	render() {
		return (
			<div className = "tagComponent">
				<h2>Tag It</h2>
				<div className = "tagBox">
					<TagInput onChange = {this.handleChange} />
					<p>{this.state.error}</p>
					<TagList value = {this.state.display}/>
				</div>
			</div>
		)
	}
}
```

The `TagApp` sets initializes state for `display`. This state is passed down to the value property of the `TagList` and determines what will be displayed by the `TagList`. This `handleChange` method is passed to the `TagInput` component and is used by this component to update `this.state.display` of the `TagApp`. 

Here's a [Codepen](https://codepen.io/sayrah901/full/eGXvzz/) where you can see the result.

And that's how we created a simple app that can be used for adding tags. If you've read this far, you are a champ. 

Got any question or addition, please leave a comment.

Thank you for reading :)