---
title: Object Destructuring in ES6
date: "2017-10-31"
description: 
tags: ["es6", "javascript"]
---

This is a follow up article to my previous article on <a href="https://sarahchima.com/blog/destructuring-assignment-es6-arrays">Array Destructuring</a>. Except you have an idea of destructuring, you should read it. 

First, let's see why there is a need for object destructuring. We want to extract data from an object and assign to new variables. Prior to ES6, how will this be done?

```Javascript
    var person = {name: "Sarah", country: "Nigeria", job: "Developer"};
    
    var name = person.name;
    var country = person.country;
    var job = person.job;

    console.log(name);//"Sarah"
    console.log(country);//"Nigeria"
    console.log(job);//Developer"
```

See how tedious it is to extract such data. We have to repeatedly do the same thing. ES6 comes with destructuring to save the day. Let's jump right into it.

<b>Basic Destructuring</b>

Let us repeat the above example with ES6. Instead of assigning it one by one, we can use an object on the left to extract the data.

```Javascript
    
    var person = {name: "Sarah", country: "Nigeria", job: "Developer"};
    
    var {name, country, job} = person;

    console.log(name);//"Sarah"
    console.log(country);//"Nigeria"
    console.log(job);//Developer"
```
You'll get the same results. It is also valid to assign variables to an object that is not declared.

```Javascript
    var {name, country, job} = {name: "Sarah", country: "Nigeria", job: "Developer"};

    console.log(name);//"Sarah"
    console.log(country);//"Nigeria"
    console.log(job);//Developer"
```

<b>Variables declared before being assigned</b>
Variables in objects can be declared before being assigned with destructuring. Let's try that.


```Javascript
    var person = {name: "Sarah", country: "Nigeria", job: "Developer"}; 
    var name, country, job;

    {name, country, job} = person;

    console.log(name);// Error : "Unexpected token ="
    
```
Wait!!  What just happened? Ooh, we forgot to add `()` before the curly brackets. 
The `( )` around the assignment statement is required syntax when using object literal destructuring assignment without a declaration. This is because the `{}` on the left hand side is considered as a block and not an object literal. So let us get this right now.


```Javascript
    var person = {name: "Sarah", country: "Nigeria", job: "Developer"};
    var name, country, job;

    ({name, country, job} = person);

    console.log(name);//"Sarah"
    console.log(job);//"Developer"
    
```

It is also important to note that when using this syntax, the `()` should be preceded by a semi-colon. Else, it might be used to execute a function from the previous line.

Note that the variables in the object on the left hand side should have the same name as a property key in the object `person`. If the names are different, we'll get `undefined`. Look at this.

```Javascript
    var person = {name: "Sarah", country: "Nigeria", job: "Developer"};

    var {name, friends, job} = person;

    console.log(name);//"Sarah"
    console.log(friends);//undefined
```

If we want to use a new variable name... well, we can.

<b>Using a new Variable Name </b>

If we want to assign values of a object to a new variable instead of using the name of the property, we'll do this. 


```Javascript
    var person = {name: "Sarah", country: "Nigeria", job: "Developer"};
    
    var {name: foo, job: bar} = person;

    console.log(foo);//"Sarah"
    console.log(bar);//"Developer"
```
So the values extracted are passed to the new variables `foo` and `bar`.
<b>Using Default Values</b>

Default values can also be used in object destructuring, just in case a variable is `undefined` in an object it wants to extract data from.


```Javascript
    var person = {name: "Sarah", country: "Nigeria", job: "Developer"};
    
    var {name = "myName", friend = "Annie"} = person;

    console.log(name);//"Sarah"
    console.log(friend);//"Annie"
```
So if the value is not undefined, the variable stores the value extracted from the object as in the case of `name`. Else, it used the default value as it did for `friend`. 

We can also set default values when we assigning values to a new variable.

```Javascript
    var person = {name: "Sarah", country: "Nigeria", job: "Developer"};
    
    var {name:foo = "myName", friend: bar = "Annie"} = person;

    console.log(foo);//"Sarah"
    console.log(bar);//"Annie"
```
So  `name` was extracted from `person` and assigned to a different variable. `friend` on the other hand was `undefined` in `person`, so the new variable `bar`  was assigned the default value.

<b>Computed Property Name</b>

Computed property name is another object literal feature that also works for destructuring. You can specify the name of a property via an expression, if you put it in square brackets.

```Javascript
    var prop = "name";

    var {[prop] : foo} = {name: "Sarah", country: "Nigeria", job: "Developer"};

    console.log(foo);//"Sarah"
  
```

<b>Combining Arrays with Objects</b>

Arrays can also be used with objects in object destructuring.  An example is given below.

```Javascript
    var person = {name: "Sarah", country: "Nigeria", friends: ["Annie", "Becky"]};
    
    var {name:foo, friends: bar} = person;

    console.log(foo);//"Sarah"
    console.log(bar);//["Annie", "Becky"]
```
<b>Nesting in Object Destructuring</b>

Objects can also be nested when destructuring.

```Javascript
    var person = {
        name: "Sarah",
        place: {
            country: "Nigeria", 
            city: "Lagos" }, 
        friends : ["Annie", "Becky"]
        };
    
    var {name:foo,
         place: {
             country : bar,
             city : x}
          } = person;

    console.log(foo);//"Sarah"
    console.log(bar);//"Nigeria"
```


<b>Rest in Object Destructuring</b>

The rest syntax can also be used to pick up property keys that are not already picked up by the destructuring pattern. Those keys and their values are copied onto a new object. Look at the example below.


```Javascript
    var person = {name: "Sarah", country: "Nigeria", job: "Developer" friends: ["Annie", "Becky"]};
    
    var {name, friends, ...others} = person;

    console.log(name);//"Sarah"
    console.log(friends);//["Annie", "Becky"]
    console.log(others);// {country: "Nigeria", job: "Developer"}
```

Here, the remaining properties whose keys where not part of the variable names listed where assigned to the variable `others`. The rest syntax here is `...others`. `others` can be renamed to whatever variable you want.

One last thing, let's see how Object Destructing can be used in functions.

<b>Object Destructuring and Functions</b>

Object Destructuring can be used to assign parameters to functions. We can use an example here.

```Javascript
    function person({name: x, job: y} = {}) {
        console.log(x);
    }

    person({name: "Michelle"});//"Michelle"
    person();//undefined
    person(friend);//Error : friend is not defined
    
```
Notice the `{}` on the right hand side of the parameters object. It makes it possible for us to call a function without passing arguments. That is why we got `undefined`. If we remove it, we'll get an error message. 
We can also assign default values to the parameters.

```Javascript
    function person({name: x = "Sarah", job: y = "Developer"} = {}) {
        console.log(x);
    }

    person({name});//"Sarah"
```
We can do a whole lot of things with Object Destructuring as we have seen in the examples above. 

Got any question or addition? Leave a comment.

Thank you for reading. :)
   