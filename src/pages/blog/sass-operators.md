---
title: SASS Operators
date: "2017-11-24"
description: Arithmetic, conditional and logical operators in Sass
tags: ["sass", "css"]
---

The more of Sass features you learn and use, the more you fall in love with Sass. Another awesome feature of Sass is the ability to use arithmetic operators and other operators in many interesting ways. We will discuss all of these in this article. Let's get started right away.

<h3> The Assignment Operator </h3>
The colon `:` is the assignment operator. It is used to define and assign values to variables. Here's an example.

```SCSS
    $font-size: 24px;
```

<h3>Arithmetic Operators</h3>

These are the normal arithmetic operators we know. They are:

<table>
    <thead>
        <th>Operator</th>
        <th>Description</th>
    </thead>
    <tr>
        <td> + </td>
        <td> Addition</td>
    </tr>    
    <tr>
        <td> - </td>
        <td> Subtraction </td>
    </tr>
    <tr>
        <td> / </td>
        <td> Division </td>
    </tr>
    <tr>
        <td> * </td>
        <td> Multiplication </td>
    </tr>
    <tr>
        <td> % </td>
        <td> Remainder </td>
    </tr>

</table>

These operators function the same way as they do in normal arithmetics.  However, it is important to note that you cannot perform arithmetic operations on values with different units. We'll use examples to explain this. Let's start with addition `+` and subtraction`-`.

<b>Addition and Subtraction</b>
The following are valid operations for addition and subtraction.

```SCSS

   .header-small {
       /*addition*/
       font-size:  24px + 2px; 
       width: 4em + 2; 

       /*subtraction*/        
       height: 12% - 2%;
       margin: 4rem - 1;
   }

```

This is compiled to 

```CSS

    .box-small {
        /*addition*/
        font-size: 26px;
        width: 6em;

        /*subtraction*/
        height: 10%;
        margin: 3rem; }

```

Notice that the values either have the same units or one has no unit at all. The value that has a unit should be on the left-hand side of the operator i.e. it should come first. Let's try to use different units and see the result.

```SCSS

    .box-big {
        font-size:  22px + 4em; // Error: Incompatible units: 'em' and 'px'.
        width: 30% - 20px; // Error: Incompatible units: 'px' and '%'.
    }
```
We'll get errors in both cases. It is also possible to add and subtract colors. Here's an example.

```SCSS
    $primaryColor: #202020;
    
    .box {
        background-color: $primaryColor + #123456;
        color: $primaryColor - #100110;
    }
    
```
This is compiled to 

```CSS
   .box {
       background-color: #325476;
       color: #101f10; }
    
```
How does this work? Sass performs operations on each corresponding part of the RGB color code. So in the addition part of our code above, here's what happened.

```
    20+12=32(red color) 20+34=54(green color) 20+56=76(blue color)
```
If you add two color values and it's more than the color range, the result will be the last value on the color range which is `#FFFFFF`. Similarly, if you subtract more than the color range, you'll get `#000000`. I think Sass is kind enough not to throw an error. :) The `+` can also be used for concatenation as we'll see soon.

<b>Multiplication</b>
In Sass, the multiplication operator is used in the same way as the addition and subtraction only that one value must not have a unit. So here, the code below results to valid CSS when compiled.

```SCSS
    
    .box-small {
        height: 16px * 4;
    }
```
Its CSS is

```CSS
   .box-small {
       height: 64px; }

```
While this one results in an error.

```SCSS
    .box-small {
        height: 16px * 4px; //Error: 64px*px isn't a valid CSS value.
    }
```
<b>Division</b>

If we use the `/` operator without putting the values in brackets, it is taken as the normal use of the forward slash in CSS and no operation is carried out. Look at the example below.

```SCSS
   .box-medium {
        font-size: 30px / 5px;
        width:  24px/ 4;
        
    }
```
This is compiled to

```CSS

   .box-medium {
       font-size: 30px / 5px;
       width: 24px/ 4; }
    
```
No difference because it is taken as normal CSS. So to make SCSS do the calculations, we put our values in brackets.

```SCSS

    .box-medium {
        font-size: (30px / 5px);
        width:  (24px/ 4);
        
    }
``` 
This will compile to 

```CSS
   .box-medium {
       font-size: 6;
       width: 6px; }
```
The operations are carried out. Note that if you are using the `/` without putting the values in brackets, you can use different units but when they are in brackets, you can only use similar units or no unit on one value.

The remainder operator is used in the same way as the addition and subtraction operators. Next, let's consider another use of the `+` operator.

<h3>String Operations </h3>

The `+` operator can be used to concatenate strings i.e join two strings together. Some things to note are:

1. If a string with quotes comes before a string without quotes, the resulting string is quoted. 
2. If a string without quotes comes before a string with quotes, the result is a string without quotes.

Let's use examples to prove this.

```SCSS
   p:before {
       content: "I am a string with" +quotes;
       font: Arial + ", sans-serif";
   }
``` 
This is compiled to

```CSS
   p:before {
       content: "I am a string withquotes";
       font: Arial, sans-serif; }
  
```
When used with Mixins, it is quite interesting. Here's an example.

```SCSS
    @mixin introduction($name) {
        &:before {
            content: "I'm a supercool person called " +$name;
        }
    } 

    p {
        @include introduction(Sarah);
    }
```
This is compiled to

```CSS
   p:before {
       content: "I'm a supercool person called Sarah"; }  
```

Just like you can do with other programming languages. Let's consider other operators next.

<h3>Comparison Operators</h3>

There are operators that can be used to compare one value to another in Sass. They are:

<table>
    <thead>
        <th>Operator</th>
        <th>Conditions</th>
        <th>Description</th>
    </thead>
    <tr>
        <td> == </td>
        <td> x == y</td>
        <td> returns true if x and y are equal</td>
    </tr>
    <tr>
        <td> != </td>
        <td> x != y</td>
        <td> returns true if x and y are not equal</td>
    </tr>
    <tr>
        <td> > </td>
        <td> x > y</td>
        <td> returns true if x is greater than y</td>
    </tr>
    <tr>
        <td> < </td>
        <td> x < y</td>
        <td> returns true if x is less than y</td>
    </tr>
    <tr>
        <td> >= </td>
        <td> x >= y</td>
        <td> returns true if x is greater than or equal to y</td>
    </tr>
    <tr>
        <td> <= </td>
        <td> x <= y</td>
        <td> returns true if x is less than or equal to y</td>
    </tr>
</table>


This comparison can be used to help Sass make decisions. Here's an example.

```SCSS

    @mixin spacing($padding, $margin) {
        @if ($padding > $margin) {
            padding: $padding;
        } @else {
            padding: $margin;
        }  
    }

    .box {
        @include spacing(10px, 20px);
    }
```
This is compiled to

```CSS
    .box {
        padding: 20px; }
```
In the above example, we used the `>` operator to test if the given padding is greater than the margin. The value of the padding is then set based on the return value. The other comparison operators can be used in the same way. Let's move to the final set of operators.

<h3>Logical Operators</h3>
The logical operators are:

<table>
    <thead>
        <th>Operator</th>
        <th>Conditions</th>
        <th>Description</th>
    </thead>
    <tr>
        <td> and</td>
        <td> x and y</td>
        <td> returns true if x and y are true</td>
    </tr>
    <tr>
        <td> or</td>
        <td> x or y</td>
        <td> returns true if x or y is true</td>
    </tr>
    <tr>
        <td> not</td>
        <td> not x</td>
        <td> returns true if x is not true</td>
    </tr>
</table>

Let's use an example to explain how they can be used. We are going to use a logical operator to decide which background color should be applied to a button. 

```SCSS
    @mixin button-color($height, $width) {
        @if(($height < $width) and ($width >=35px)) {
            background-color: blue;
        } @else {
            background-color: green;
        }       
    }

    .button {
        @include button-color(20px, 30px)
    }
    
```
This is compiled to

```CSS
   .button {
       background-color: green; }
```
The `background-color` is set to `green` because both conditions are not met. If `or` was used, it would have been set to blue because at least one condition is met. 

These operators are all valuable and when used properly, can make CSS a lot of fun to work with. 

Got any question or addition? Please leave a comment.

Thank you for reading. :) 