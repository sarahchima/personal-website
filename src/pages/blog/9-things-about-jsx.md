---
title: 9 Things you should know about JSX
date: "2017-10-17"
description: JSX is a syntax extension that is now popular. This article works you through nine facts about JSX that you should know.
tags: ["react", "javascript"]
---
```js
const hello = <h1>Hello World</h1>
```
The line of code above is written in JSX. JS what??

You might have come across the term JSX before but don't know what it is. You probably have even used it or are creating applications with it. In any case, this article should interest you. It discusses 9 things you should know about JSX. This includes what JSX is and how it can be used. Let's get started already.

<h3> What JSX is </h3>
<p>JSX is a syntax extension for JavaScript. Basically, it extends JavaScript so that HTML/XML like structures can be used with JavaScript. It allows developers to use HTML syntax to compose JavaScript components. This makes it possible to have a clear and familiar syntax for defining DOM tree structures with attributes.</p>

Although it looks a lot like HTML, it actually belongs to a JS file. Since it's an extension for JavaScript, your browser will not understand it unless it is compiled into plain JavaScript. So you need to use a JSX compiler such as Babel for it.

<h3>JSX is a JavaScript Expression</h3>
JSX expressions are JavaScript expressions too. When compiled, they actually become regular JavaScript objects. For instance, the code below:

```js
const hello = <h1 className = "greet"> Hello World </h1>
```

will be compiled to
```js
const hello = React.createElement {
	type: "h1",
	props: {
	className: "greet",  
	children: "Hello World" 
	}
}
```
Notice that `className` was used instead of `class`. I'll explain that shortly.

Since they are compiled to objects, JSX can be used wherever a regular JavaScript expression can be used. It can be saved in variables just like we did above, used in loops, passed as arguments to functions, can be returned from functions, stored in arrays and objects... wherever JavaScript expressions can be used. 

<h3> Nesting in JSX </h3>
Just like HTML you can nest several lines of JSX within one element. To do that though, you need to nest all of them in brackets () like the example below.

```js        
(
	<div>
		<h1> Hello World!!! </h1>
		<p> I am a human </p>
	</div>
)       
```

<h3>One outermost element please</h3>
A JSX expression must have only one outer element. Therefore, while this will work

```js
const headings = (
	<div id = "outermost-element">
		<h1>I am a heading </h1>
		<h2>I am also a heading</h1> 
	</div>
);
```

this will not work

```js   
const headings = (
	<h1>I am a heading </h1>
	<h2>I am also a heading</h1>
);
```

<h3> For the love of camelCase </h3>

Since JSX is closer to JavaScript than HTML, JSX properties make use of camelCase naming convention instead of HTML attribute names. That was why in point 2, `className` was used and `tabIndex` is used instead of `tabindex`. This is also true of event listeners in JSX. While lowercase is used for event listeners in HTML, camelCase is used in JSX.
        

This will work in JSX

```js
<button onClick = {handleClick}>Click Me</button>
```
        
This will not work in JSX

```js
<button onclick = {handleClick}>Click Me</button>
```


<h3>JavaScript in JSX</h3>
You can embed JavaScript in JSX, but to do this, you need to make use of curly braces. For instance if you want to add `2+3` in a JSX expression, you'll do this like this. 

```html
<p> 2+3 = {2+3} </p>
```

will result to 

```js
2+3 = 5
```

<h3>Displaying JSX</h3>

For JSX to appear on the screen of a browser, it has to be rendered. `ReactDOM.render()` is the most common way to render JSX. `ReactDOM` is a JavaScript library which contains several methods that deal with the DOM in some way.

`ReactDOM.render()` takes the JSX expression, creates corresponding tree nodes and adds it to the DOM. That way your JSX expression appears on the screen. To get your JSX to appear onscreen, you pass two arguments to the `ReactDOM.render()`. The first argument is the JSX you want to render, which could the raw JSX itself or the name of a variable which contains JSX. The second argument is the target element in the html file where you want the JSX to be appended to.

To understand better, look at the following example.
```js
const names = (
	<ul>
		<li>Sarah</li>
		<li>Annabel</li>
	</ul>
);

ReactDOM.render(names , document.getElementById("app"));
```
[Try it on Codepen](https://codepen.io/sayrah901/pen/dVwbzX)


<h3>Self Closing Tags in JSX</h3>

For HTML elements that have self closing tags such as `<img>`, `<hr>`, `<input>` and `br`, the forward slash before the closing angle bracket should be included in JSX. While this is optional in HTML, it is <b>compulsory</b> in JSX.

while this is good in JSX
```js
<hr />
```

this is not good in JSX

```js
<hr>
```

<h3>Don't forget the Keys</h3>

When making a list in JSX, your list should include a JSX attribute called `Keys`. `Keys` are similar to `id` and they are used internally by React to keep track of the list items. Without this, React might scramble the order of the list. So if the order of your list is important, the `key` attribute is important. Below is how you use keys.

```js
const toDO = (
	<ul>
		<li key = "todo-1"> Design </li>
		<li key = "todo-2"> Develop </li>
		<li key = "todo-3"> Be Awesome </li>
	</ul>
);
```

And there you have it, 9 things you should know about JSX. Did I miss anything? I'll love to know about it.