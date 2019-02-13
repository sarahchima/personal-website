---
title: ES6 classes
date: "2017-10-27"
description: ES6's new syntax for creating classes.
tags: ["es6", "JavaScript"]
---


Prior to ES6, classes have been in use in Javascript. ES6 just comes with a clean, nice-looking syntax for defining classes. It's good to note that JavaScript's class is just a more convenient way of creating constructor functions, which are very different from traditional classes. In this article, we will focus on:

1. How to define a class
2. How to define an instance of a class
3. Methods in classes
4. Creating a subclass of a class.

<h3>Defining a Class in ES6</h3>

As said above, ES6 class is just a more convenient way of doing something that has already been in existence. For instance, let's say we want to define a class for `Person` and a method `sayName` for the class. How will this be done in ES5?

```Javascript
    //ES5
    function Person (name, height) {
        this.name = name;
        this.height = height;
    }

    Person.prototype.sayName = function() {
        this.console.log(this.name);
    }
```

or 

```Javascript
    //ES5
    function Person (name, height) {
        this.name = name;
        this.height = height;
        this.sayName = function() {
           console.log(this.name);
        }
    }
```

Notice first, we had to use a function to define this class. In the first example above, the methods were defined by adding the method to `prototype`. The second example is another way where methods are added internally.

ES6 came with a new and beautiful way of defining classes using the `class` keyword. This method comes with other cool features as we will discuss in this article. First though, let's see how our `Person` class will be written in ES6.

```Javascript
    //ES6
    class Person {
        constructor() {
            this.name = "Person";
            this.height = 150;
        }
        
        sayName() {
            console.log(this.name);
        }
    }
```
More elegant right? Sure but wait a minute, what's going on here? What's the `constructor` doing there? 
First, the body of a class refers to the part between the `{}`. This is where you define methods and properties. The `constructor` method is a special method that is used to define and initialize an object created with a class. In the above example, we just initialized the value of `this.name` and `this.height`. So, even an instance of the class is created without setting this values, a default value will be available for use. If a `constructor` method is not added to a class, it's okay. An empty `constructor` method will just be added.

<b>Note</b>: There can only be one method with the name "constructor" in a class. A `SyntaxError` will be thrown if the class contains more than one occurrence of a constructor method. 
The above example was written as a class declaration. It's important to note that unlike their function counterparts, class declarations are not hoisted. Hence, you cannot use a class before it is defined.

A class can also be written as an expression. So the `Person` example can be written as:

```Javascript
    //unnamed
    var Person = class {
        constructor() {
            this.name = "Person";
            this.height = 150;
        }
        
        sayName() {
            console.log(this.name);
        }
    }
```
or 


```Javascript
    //named
    var Person = class Person{
        constructor() {
            this.name = "Person";
            this.height = 150;
        }
        
        sayName() {
            console.log(Person.name);
        }
    }
```
A named `class` acts the same way as a named function expression. Any variable created with a named `class` will have `name` property. This `name` doesn't change even if it is assigned to a variable. The name of the `class` always refers to the name used to create it. You can read [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function) for further reference. Class expressions are also not hoisted.

<h3>Creating an Instance of a Class</h3>
How can an instance of a class be created and used? It is the same ol' way. Let's create an instance of the above class just created.

```Javascript
   var Sarah = new Person();
   Sarah.sayName();//"Person"
   
   Sarah.name = "Sarah";
   Sarah.sayName(); //"Sarah"
    
```
An instance of a class is created using the `new` keyword. Since a class is basically an object, we call its methods same way we will do to the methods of an object. Can you see the `constructor` method in action? If the `name` of an instance of `Person` is not set, the `name` of the instance created is set to `Person`.

When you create an instance of a class in JavaScript, a new object is created but it's still dependent on its parent class. Rather, an object that is linked to a prototype is created. Therefore, any change made to that prototype affects the new object, even after creating the instance.

<h3>Methods in Classes</h3>

There are two types of methods that can be created using `class`: The prototype methods and static methods. 

<b>Prototype Methods</b>

The method `sayName` used in our example above is a prototype method. Prototype methods can be called by an instance of a class. Prototype methods also include getters and setters.


```Javascript
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        
        get fullName() {
            return this.computeFullName; 
        }
        
        computeFullName() {
            return this.firstName +" "+ this.lastName;
        }
    }

    var Sarah = new Person("Sarah", "Chima");
    console.log(Sarah.fullName());//Sarah Chima
    
```

<b>Static Methods</b>

Static methods cannot be called by instances of a class. They are only available to a class that is called without creating an instance of it. If you call a `static` method from an instance, you will get an error

```Javascript
    class Person {
        constructor() {
            this.name = "Person";
            this.height = 150;
        }

        static sayName(name) {
            console.log(name);
        }
    }

    Person.sayName("Sarah");//"Sarah"

    var Chima = new Person();
    Chima.sayName("Chima");//error : Chima.sayName is not a function
```

<h3>SubClassing Classes</h3>

A subclass of a `class` can created using the `extends` keyword. When you create a subclass of a `class`, the `class` becomes a base class. Let's create a subclass of `Person`. 


```Javascript
    //Base class
    class Person {
        constructor() {
            this.name = "Person";
            this.height = 150;
        }
        
        sayName() {
            console.log(this.name);
        }
    }
    
    //subclass
    class Developer extends Person {
        constructor(name, height) {
            super(name, height); 
            this.name = "Developer"    
        }
           
    }

    var Jessy = new Developer ();
    Jessy.sayName();//"Developer"
``` 

`Developer` is a subclass of `Person`. Notice that in the `constructor` of the subclass there is a call to `super()`. It is for making super-constructor calls and allows access to parent methods i.e. a constructor uses the `super` keyword to call the constructor of a parent class. This is really important because in derived classes, super() must be called before you can use `this`. Leaving this out will cause a reference error.

```Javascript
    //Base class
    class Person {
        constructor() {
            this.name = "Person";
            this.height = 150;
        }
        
        sayName() {
            console.log(this.name);
        }
    }

    class Developer extends Person {
        constructor(name, height) {
            this.name = "Developer"    
        }
           
    }

    var Jessy = new Developer ();
    Jessy.sayName();//Must call super constructor in derived class before accessing 'this' or returning from derived constructor
``` 

One last thing. In a subclass, we can create our own methods. We can even create a method with the same name as the base class' method. The method of the subclass will override that of the base class. Let's add more methods to our subclass `Developer` then.

```Javascript
    //Base class
    class Person {
        constructor(name, height) {
            this.name = "Person";
            this.height = 150;
        }
        
        sayName() {
            console.log(this.name);
        }
    }

    class Developer extends Person {
        constructor(name, height) {
            super(name, height);         
        }

        sayName(name) {
            console.log("I am an awesome Developer and my name is " +name)
        }
        
        sayHeight () {
            console.log("This is my height: " +this.height+ "cm");
        }
        sayTools(tool1, tool2) {
            console.log("I love " +tool1 + " and " +tool2 );

        }
    }

    var Sarah = new Developer ();
    Sarah.sayName("Sarah");//"I am an awesome Developer and my name is Sarah"

    Sarah.sayHeight();//"This is my height: 150cm"

    Sarah.sayTools("JavaScript", "CSS");//"I love JavaScript and CSS"
``` 
And it's a wrap.

<b>Disclaimer</b>: My height is not 150cm. Haha!! :)

Got any question or addition? Please leave a comment.

Thank you for reading :)