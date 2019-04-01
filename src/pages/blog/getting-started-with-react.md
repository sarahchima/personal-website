---
title: Getting Started With React in Super Easy Steps.
date: "2017-10-17"
description: Getting started with React is simple and this article shows you how to do that in easy steps.
tags: ["javascript", "es6", "react"]
featuredImage: https://res.cloudinary.com/dvj2hbywq/image/upload/v1550930072/potrait.jpg
---

React recently got relicensed under MIT license. React 16 with its awesome new features was released a few weeks back. What a wonderful time to start learning and building cool projects with React! But to get started, you need to set up a development environment for React. This article will show you two easy ways you can do that. First of all though, let’s get a brief understanding of what React is.

React is a JavaScript library for building user interface.  It was developed and is maintained by Facebook and it’s MIT licensed meaning you can freely use it in any project. For you to use React though, it is important you have a good understanding of HTML and Javascript(ES6). 

So let's get started. Two super easy ways you can start building apps with React are by:

1.	Using Codepen.
2.	Using Create React App to create a new application.

Other ways include using a CDN and adding it to an existing project which you might need to work with compiler such as Babel and a bundler such as Webpack or Browserify. But we want easy ways here right? 

<h4>Using CODEPEN</h4>

I love codepen and if you are like me, you might want to get started in React using Codepen. It very easy to do so. Here are the steps to follow:

1.	Create a new pen or go to an existing pen.

2.	Click on <b>Settings</b> at the top right hand corner of the pen.

3.	At the bottom of the page, there’s a dropdown for <b>Quick-add</b>, click on this and select React, do the same for ReactDOM. This will add the CDNs of React and ReactDOM to the pen.

4.	The last step is to add a JavaScript <b>preprocessor</b> to the pen. Why is this important? React uses ES6 and JSX and for the browser to understand them, it needs a preprocessor, in this case, a compiler to convert them to the plain javascript it understands. Don’t worry if you are not familiar with these terms, you can easily understand them. For React, Babel is a great choice.
So navigate to the dropdown for JavaScript preprocessor and select Babel and yeah, you have just created a pen that uses React.

<h4>Using Create React App</h4>

Create React App is a super easy way to start building with React. It sets up your development environment and comes with preinstalled packages that makes you start building React apps right away. These packages include Babel, webpack, EsLint, Autoprefixer, Jest and others.

For you to use it, you need to have Node version 6 or higher on your machine. So if your version of Node is less than that, you have to update it.
Follow these steps to set it up:

Install Create React App once globally so that you can use it to create React Apps anywhere on your machine. 

```
npm install -g create-react-app
```

Once this is done, you can start creating awesome React Apps. So the next step is to actually create an app. You can do this by running

```
create-react-app name-of-your-project
```

This might take a while to complete but when it is done, you will have a directory called `name-of-your-project` in the present folder.
Remember to change the name-of-your-project to whatever you want to call your project. 

The next thing to do is to cd into your folder
```
cd name-of-your-project
```
then

`npm start` or `yarn start`

This will run the app in development mode. To view this open localhost:3000 in your browser and there you have you react app all set up.

If you go to the directory that was created by this process, you will notice a number of files comes with it. Two files you'll need to create your applications are `index.js` in the `src` folder and the `index.html` in the `public` folder.

Also, Create React App doesn't assume a node backend, you can use whatever backend technology you want with it. Nice! I know right.

So there you have it, two easy ways to get started with React.  