---
title: React Fragments
date: "2019-03-06"
description: Learn what React modals are and how they can be used
tags: ["es6", "javascript", "react"]
---

Part of the JSX expression syntax is that it must have only one outer element. Adhering to this rule might mean adding an extra DOM node even when we do not need to. Thanks to React Fragments, we do not need to do this. Let me explain this problem further using an example.

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

Notice how we had to wrap the label and the input field in a div. This is to adhere to the JSX syntax. The problem however is that it introduces an unneccessary node into the DOM. This is the output of this in the DOM.

```html
<form>
    <div>
        <label>Name</label>
        <input placeholder="Name">
    </div>
    <button>Submit</button>
</form>
```

Imagine having to do this for a lot of other components, it means that there will be so many unncessary nodes added to the DOM. React fragments solves this problem. Let us see how.

<h3>Meet Fragments Officially </h3>

Fragments let you group a list of children without adding extra nodes to the DOM. The cool thing is that it used exactly we use the div to wrap the elements in the `InputField` element. Let's do this. 

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

To use it without referencing the React object, you can import `Fragment` using object destructuring from react and use it directly.

```js
import React, {Component, Fragment} from 'react'

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

This heading should rather read "The Attribute of the Fragment" because Fragments support only one attribute - the `key` attribute. This is especially useful for lists where keys are required for each list item. An example is the description list below:

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

A newer shorter syntax for writing fragments is declaring Fragments. It is by using `<>` and `</>` instead of `Fragment`. Yeah, they look like empty tags.

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

This syntax however does not support keys or attributes and it is not supported by many tools, so you might want to write out the `Fragments` explicitly.


<h4>Conclusion</h4>
React Fragments are cool and you should use them.

Thank you for reading.😊