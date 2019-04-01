---
title: SASS - Getting Started
date: "2017-11-08"
description: 
tags: ["css", "sass"]
featuredImage: https://res.cloudinary.com/dvj2hbywq/image/upload/v1550930072/potrait.jpg
---


Have you ever wondered what SASS is? Or maybe you know what it is but have not really taken time to learn and use it? Or you might just want to remind yourself of what you already know. In any case, this article is for you.

<b>What's SASS?</b>

SASS is a CSS preprocessor. It is an extension of CSS that adds power and elegance to CSS.  It allows you to use variables, nested rules, mixins, inline imports, and other cool kinds of stuff, all with a fully CSS-compatible syntax. All these help to reduce repetition with CSS and saves time. It helps to keep large stylesheets well-organized and maintainable. 


<b>SASS and SCSS - what's the difference?</b>
Sass is basically an older version of SCSS. Its syntax is quite different from conventional CSS and was not quite accepted by many people. For instance, it used indentation instead of braces and didn't require semi-colons. In its version 3, Sass changed its main syntax to `.scss`. SCSS is a superset of CSS and is basically written the exact same as SCSS. So we can write SCSS like CSS and still get the best of Sass features. 
You can still make use of the Sass syntax but in this and subsequent articles, we will be using SCSS.


<b>Using SASS</b>
For you to start using Sass, you need to set it up for your project. There are several ways this can be done but these are two options:
1. Install using Ruby as can be seen on [SASS website](http://sass-lang.com/install).
2. Install [node-sass](https://www.npmjs.com/package/node-sass). Install node, if you've not done so on your local machine. Then `cd` into the project you want to use sass and run:

```
npm install node-sass
```
<b>Compiling SASS</b> 
Since Sass is an extension of CSS, it has to be compiled into pure CSS for your browser to understand it. After installation, the basic way to do this is by running the following code in your command prompt.

```
sass input.scss output.css
``` 
Where `input.scss` is the input file and `output.css` is where you want the sass file to be compiled to, the destination file. Both of these files can be renamed to whatever you want and if they will be in different folders, you need to specify the path.

If you followed any of the installation processes, here's a quick way to test what we installed. Create a file named test.scss in your project where you installed Sass. To that file add the code below. Don't worry if you don't understand the code, just use it as a test. You'll understand it soon.

```css
$primaryColor : blue;

.test {
    color : $primaryColor;
}
```
Then on your command prompt run

```
sass test.scss output.css
```
This will create two files, `output.css` and `output.css.map`. In the `output.css` you should see this:

```css
.test {
    color: blue; }
```
If you've seen that, congrats, you have Sass all set up.

Do you have run that line of code everytime you write new sass? Only if you want to. You can watch the files instead

```css
sass --watch input.scss:output.css
```
What this does is to automatically compile every sass you write in `input.scss` to `output.css` whenever any change is made. You can watch a directory too.

```css
sass --watch app/sass:public/css
```

This is the first of a series of articles I've written on SASS. Here are links to other articles on Sass by me:

[Variables](https://dev.to/sarah_chima/sass-variables-2pb)
[Nesting](https://dev.to/sarah_chima/nesting-in-sass-bme)
[Partials](https://dev.to/sarah_chima/using-sass-partials-7mh)
[Import](https://dev.to/sarah_chima/using-sass-partials-7mh)
[Mixins](https://dev.to/sarah_chima/sass-mixins-19a)
[Inheritance](https://dev.to/sarah_chima/the-goodness-of-sass-inheritance-5hm)
[Operators](https://dev.to/sarah_chima/sass-operators-56f)
[Control Directives](https://dev.to/sarah_chima/sass-control-directives-6hk)


Got any question or addition? Leave a comment.

Thanks for reading. :)