---
title: Using the local storage
date: "2019-06-03"
description: In this article, we will discuss ways browser events can be handled, default browser actions and event propagation.
tags: ["javascript", "HTML"]
featuredImage: https://res.cloudinary.com/dvj2hbywq/image/upload/c_scale,w_800/v1555007526/ambitious-creative-co-rick-barrett-110145-unsplash-compressor_hzty02.jpg
---

This article discusses what the local storage is. We will also discuss JavaScript methods that we can use to manipulate it.

I have always known about the local storage but I never got to use it on any project. So I decided to build a note app because I want to be able to use the local storage to store and manipulate data. I decided to share what I learnt while using it. First, let us understand what the local storage is.

##What is Local Storage?

Local storage is a web storage object that is available in a user's browser. It allows JavaScript browsers store and access data right in the browser.  Basic CRUD operations (create, read, update and delete) can be done on data in the local storage. Data stored in the local storage persists even when the browser window has been closed.

Another form of web storage is  Session Storage. This is similar to local storage. The difference is that the data stored in the session storage gets cleared after the session ends, ie. the browser window is closed.

##Local Storage Methods
Local Storage methods are the methods that help you manipulate the local storage. That is to save and access data stored in the local storage. These methods include:

1. setItem()
2. getItem()
3. removeItem()
4. clear()

Let us discuss each of them. 

###setItem()
We use this method to add new data items to the local storage object or update existing values if the data exists. It takes two arguments, the key of the item to create or update and the value to store. For example, if we want to store a name in the local storage, here is what we will do

```js
    localStorage.setItem('name', 'Sarah');
```

In the example above, `name` is the key and `Sarah` is the value.

This is a simple example. What if you want to store something a little more complex like an array or an object in the local storage? For example, store the notes of the note app in the local storage. It is important to note that local storage stores values as strings. We need to convert the arrays or objects to strings before passing it to the local storage.

We can use the `JSON.stringify()` method to convert an object or array to strings before passing it the `setItem()` method.

```js
    const notes = [
        {  
            title: 'A note',
            text: 'First Note'
        },
        {
            title: 'Another note',
            text: 'Second Note'
        }
    ]

    localStorage.setItem('notes', JSON.stringify(notes))
```

###getItem()
This method is used to access data stored in the local storage. It accepts one argument: the key of the item you want to get the value of. It returns the value as a string. 

Let us get the name we stored in the local storage.

```js
    const name = localStorage.getItem('name');
    console.log(name) // 'Sarah'
```

What if we want to get the notes we stored in the local storage. we do the same thing, pass the key to the getItem method. However, to get our value as array, we need to parse it. Otherwise, it returns strings.

```js
    JSON.parse(localStorage.getItem('notes'))
```

###removeItem()
The removeItem() method removes data from the local storage. It receives a key and removes the data item stored with that key from the local storage. If that key does not exist in the local storage, it does nothing.

```js
    localStorage.removeItem('name')

    console.log(localStorage.getItem('name')) //null
```

###clear()
The `clear()` method clears the entire local storage of all data stored in it. It does not receive any argument.

```js
    localStorage.clear()
```

Those are the methods available to store and retrieve data from the local storage. Next, let us see how we can listen to storage change events.

###Event Listener for Storage Change
To listen to changes in the local storage, we add an event listener for storage. 

```js
    // When local storage changes, execute the doSomething function
    window.addEventListener('storage', doSomething())
```
The storage event fires when either the local storage or the session has been modified in the context of another document. This means that the storage event is not fired on the page that is making changes to the local storage. Rather it is fired in another tab or window if the same page is open there. The assumption is that your page already knows all changes that happen on it. That it will only need notification if the change happens on another page.

I encountered this challenge when building the note app. I was trying to update the part that displays the notes based on changes in the local storage. However, I noticed that when I add a new note, it does not update the notes. Rather it updates the same page opened in another tab. To solve this, I used a state object. After storing to the local storage, I stored or updated a new note in this state. The display of the notes depends on the changes to the state.

###Important Things to Note about the Local Storage
One last thing before we go, there are important things about the local storage that we should know.

1. The local storage is limited to 5MB across all major browsers.
2. It can easily be accessed from the browser so it should not be used to store any sensitive data or user information.
3. Operations on the local storage are synchronous. Therefore, they are executed one after another.

Want to see the note app I built? Here's a [link to the live app](https://sarahchima.github.io/NoteApp/) and a [link to Github](https://github.com/sarahchima/NoteApp). Have any question on any part of this article or the app, feel free to ask.

You can follow me on [Instagram](https://www.instagram.com/sarah_codes_/) where I post regularly on my tech journey. I also share short notes on things I have learnt.



