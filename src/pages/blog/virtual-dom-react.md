---
title: The Virtual DOM in React
date: "2017-10-18"
description: How the virtual DOM works
featuredImage: https://res.cloudinary.com/dvj2hbywq/image/upload/v1550930072/potrait.jpg
tags: ["react", "javascript"]
---


React is fast!!! One major reason is because it makes use of the virtual DOM. The virtual DOM was not created by React but React's use of it made it popular. Before we consider what the virtual DOM is, I think a brief explanation of the DOM is necessary.

<h4>The Document Object Model (DOM) </h4>

The DOM is a programming interface for HTML and XML documents. It represents these documents as nodes and objects. It makes it possible for programs to access and manipulate the structure, style and content of these documents. So with the DOM, anything found on an HTML/XML document can be accessed, changed, deleted or added.

<h4> The Problem with DOM manipulation </h4>

The problem with the DOM is that its manipulation by the browser is slow. It was not optimized for creating dynamic user interface and so its performance is not so good. While JavaScript and many frameworks make it possible to access and manipulate the DOM in elegant ways, they do little to improve its performance. 

Let me use an example to illustrate this problem. You have a Todo list with different Todo items and you decide to check one off as completed. This change has to be reflected on the screen. How do most frameworks handle this change?

The list will be rebuilt. Wow!! So a change in one item affects all other items on the list even though they were not checked off. Now imagine if there are about 100 items on the list, they all have to be rebuilt. The major issue is not in the rebuilding of the list by the DOM which might happen quite fast. It is in the other processes that comes with it like the recalculation of the CSS for this list and updating the layout of the page. These other processes use complex algorithms which are not so fast and thereby affect the performance.

Here, we are talking about a simple app, a Todo list. Most web pages are much more complex than this and have a lot of interactions going on a single page. We can imagine the number of DOM manipulations that go on a web page like a Facebook page. So this process is inefficient and overtime reduces the performance of the pages. 

This is where the Virtual DOM comes to the rescue. What is the Virtual DOM?

<h4>The Virtual DOM </h4>

The virtual DOM is a lightweight copy of the DOM. It contains all objects and nodes of the DOM object but it lacks the power to directly change what appears on the screen.

<h5><b>So how does React use the virtual DOM?</b></h5>

Let's use our the example of the Todo list above to explain this. When an event occurs like the a list item is checked as done, React creates a copy of the DOM - <b>the virtual DOM</b>. This process occurs pretty fast so it does not affect the performance. React keeps a snapshot of this virtual DOM...like an unchanged virtual DOM. The virtual DOM is updated with the change that has occurred, i.e. all objects(the list items) get updated. Remember, during this process, the real DOM has not been updated.

Next, React compares both virtual DOMs (the snapshot of the virtual DOM before updating it and the updated virtual DOM)  through a method called <b>diffing</b> to check the exact objects that have changed. This diffing also calculates the minimum number of steps it will take to update the real DOM. It then updates these objects and these objects alone on the real DOM. In our case, it updates just the list item that was on the Real DOM and this change is seen on the screen.

Just to be sure you get the flow, here's an ordered list of what happens.

1.   List Item is checked as completed.
2.   React creates virtual DOM by building a copy of the real DOM.
3.   Keeps a snapshot of this virtual DOM (i.e the other virtual DOM), then updates it.
4.   Compare both virtual DOMs using diffing to get the exact object that has been changed.
5. Update the real DOM with this change and this change only.

React only updates the necessary parts of the DOM. It is clear that this process is more efficient and faster. The use of virtual DOM in React highly improves the performance of an application built in React. This is why React is Fast. 

Have something further to say about the Virtual DOM, feel free to leave a comment.

Thanks for reading :)
