---
title: "Implementing a Linked List in JavaScript"
date: "2020-05-27"
description: "An introduction to Linked Lists and how to implement them in JavaScript"
featuredImage: https://res.cloudinary.com/dvj2hbywq/image/upload/v1590664431/Screen_Shot_2020-05-28_at_12.13.09_PM_c6tcdn.png
tags: ["javascript", "algorithms", "dataStructures"]
---

If you are learning data structures, a linked list is one data structure you should know. If you do not really understand it or how it is implemented in JavaScript, this article is here to help you. In this article, we will discuss what a linked list is,  how it is different from an array and how to implement in JavaScript. Let's get started.

## What is a Linked List?

A linked list is a linear data structure similar to an array. However, unlike arrays, elements are not stored in a particular memory location or index. Rather each element is a separate object that contains a pointer or a link to the next object in that list. 

Each element(which are commonly called nodes) contains two items: the data stored and a link to the next node. 
The data can be any valid data type. You can see this illustrated in the diagram below.

![Image of a linked list](https://res.cloudinary.com/dvj2hbywq/image/upload/v1590572188/Group_14_5_bvpwu0.png)

The entry point to a linked list is called the head. The head is a reference to the first node in the linked list. The last node on the list points to null. If a list is empty, the head is a null reference.

In JavaScript, a linked list looks like this:

```js
const list = {
    head: {
        value: 6
        next: {
            value: 10                                             
            next: {
                value: 12
                next: {
                    value: 3
                    next: null	
                    }
                }
            }
        }
    }
};
```

## An advantage of Linked Lists
 - Nodes can easily be removed or added from a linked list without reorganizing the entire data structure. This is one advantage it has over arrays.
 
## Disadvantages of Linked Lists
 - Search operations are slow in linked lists. Unlike arrays, random access of data elements is not allowed. Nodes are accessed sequentually starting from the first node. 
 - It uses more memory than arrays because of the storage of the pointers.

## Types of Linked Lists
There are three types of linked lists:
 - <b>Singly Linked Lists</b> : Each node contains only one pointer to the next node. This is what we have been talking about so far.
 - <b>Doubly Linked Lists</b> : Each node contains two pointers, a pointer to the next node and a pointer to the previous node.
 - <b>Circular Linked Lists</b> : Circular linked list is a variation of a linked list in which the last node points to the first node or any other node before it thereby forming a loop.

## Implementing a List Node in JavaScript
As stated earlier, a list node contains two items: the data and the pointer to the next node. We can implement a list node in JavaScript as follows:

```js
class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}
```

## Implementing a Linked List in JavaScript
The code below shows the implementation of a linked list class with a constructor. Notice that if the head node is not passed, the head is initialized to null.
```js
class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}
```
##Putting it all together
Let's create a linked list with the class we just created. First, we create two list nodes, `node1` and `node2` and a pointer from node 1 to node 2. 

```js
let node1 = new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2
```

Next, we'll create a Linked list with the `node1`.

```js
let list = new LinkedList(node1)
```

Let's try to access the nodes in the list we just created. 

```js
console.log(list.head.next.data) //returns 5
```

##Some LinkedList methods
Next up, we will implement four helper methods for the linked list. They are:
1. size()
2. clear()
3. getLast()
4. getFirst()

### 1. size()
This method return the number of nodes present in the linked list. 

```js
    size() {
        let count = 0; 
        while (this.head) {
            count++;
            this.head = this.head.next
        }
        return count;
    }
```

### 2. clear()
This method empties out the list.

```js
    clear() {
        this.head = null;
    }
```

### 3. getLast()
This method returns the last node of the linked list.

```js
    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }
```

### 4. getFirst()
This method returns the first node of the linked list.

```js
    getFirst() {
        return this.head;
    }
```

### Summary

In this article, we discussed what a linked list is and how it can be implemented in JavaScript. We also discussed the different types of linked lists and its advantages and disadvantages. 

I hope you enjoyed reading it.