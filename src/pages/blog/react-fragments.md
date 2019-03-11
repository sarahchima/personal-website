---
title: React Fragments
date: "2019-03-11"
description:  Learn what React modals are and how you can use them.
tags: ["es6", "javascript", "react"]
---

Part of the JSX syntax is that adjacent JSX elements are wrapped in an enclosing tag. That is, a JSX expression must have only one outermost element. Adhering to this rule might mean adding an extra DOM node even when it is not necessary. Thanks to React Fragments, we do not need to do this. 

Let me explain this problem further using an example.

<h3>The Problem</h3>

Let us assume that we have a form and we want to the input field to be custom components with labels. 

```js
class Form extends Component {
    render() {
        return (
            <form>
                <InputField name="Name"/>
                <button>Submit</button>
            </form>
        )
    }
}
```

Then for the `InputField` component, we have the following:

```js
class InputField extends Component {
    render() {
        return (
            <div>
                <label>{this.props.name}</label>
                <input placeholder={this.props.name} />
            </div>
        )
    }
}
```

Notice how we had to wrap the `label` and the `input` field in a `div`. We did this to adhere to the JSX syntax. This is the output of the above in the DOM.

```html
<form>
    <div>
        <label>Name</label>
        <input placeholder="Name">
    </div>
    <button>Submit</button>
</form>
```

Here are some issues related with this addition:

1. Introducing an extra and unnecessary node into the DOM leads to more DOM clutter.  If we do this for a lot of other components, we will have so many extra nodes in the DOM. This might have very little impact in small applications. But in very large applications, performance is important. Adding extra DOM nodes lead to increased memory usage.  

2. It makes the use of CSS mechanisms like FlexBox and CSS Grid more complicated. These mechanisms depend on the relationship that exist between parent and child elements. So breaking such relationship by introducing an extra `div` makes styling more complicated.

The good news is that React fragments solves this problem. Let us see how.

<h3>Meet Fragments Officially </h3>

Fragments let you group a list of children without adding extra nodes to the DOM. We use it exactly the same way we use the `div` to wrap the elements in the `InputField` element. Let's do this. 

```js
class InputField extends Component {
    render() {
        return (
            <React.Fragment>
                <label>{this.props.name}</label>
                <input placeholder={this.props.name} />
            </React.Fragment>
        )
    }
}

```

This will be transpiled to

```html

<form>
    <label>Name</label>
    <input placeholder="Name">
    <button>Submit</button>
</form>

```
Yay!! No extra `div` added.

We can use it without referencing the React object by importing it from react using object destructuring.

```js
import React, { Component, Fragment } from 'react'

class InputField extends Component {
    render() {
        return (
            <Fragment>
                <label>{this.props.name}</label>
                <input placeholder={this.props.name} />
            </Fragment>
        )
    }
}
```

<h3>Attributes of the Fragment</h3>

Or rather, the attribute of the fragments. Fragments support only one attribute - the `key` attribute. This is especially useful for lists where keys are required for each list item. An example is the description list below:

```js

class TodoList extend Component {
    render() {
        return (
            <dl>
            ${props.todos.map(todo =>
                <React.Fragment key={todo.id}>
                    <dt>{todo.name}</dt>
                    <dd>{todo.description}</dd>
                </React.Fragment>
            )
            </dl>
        )
    }
}

```

<h3>Newer Shorter Syntax </h3>

A newer shorter syntax for writing fragments is declaring Fragments. It is by using `<>` and `</>` instead of `Fragment`. Yeah I know, they look like empty tags.

```js
class InputField extends Component {
    render() {
        return (
            <>
                <label>{this.props.name}</label>
                <input placeholder={this.props.name} />
            </>
        )
    }
}
```

A drawback of this syntax is that it does not support keys or attributes. It is also not supported by many tools, so you might want to write out the `Fragments` explicitly.


<h4>Conclusion</h4>
React Fragments are cool and you should use them.

Thank you for reading.😊