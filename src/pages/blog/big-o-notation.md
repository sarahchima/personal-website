---
title: "The Big 'O' Notation - An Introduction"
date: "2019-08-05"
description: "Learn about the Big O notation and common runtime complexities."
featuredImage: https://thepracticaldev.s3.amazonaws.com/i/izrxfarmp1gemu04nmh7.jpg
tags: ["algorithm", "webdev"]
---

![](https://thepracticaldev.s3.amazonaws.com/i/izrxfarmp1gemu04nmh7.jpg)
You might wonder why I added a picture of a blue alien as my cover image. It's a character from one of my favourite movies "Home" and his name is Oh. Oh like Big "Oh" notation. Get it 😂?
Let us get serious now.

A long time ago, before the emergence of 10x engineers, software engineers sought ways to solve real-world problems with their programming skills. Different engineers came up with different solutions/algorithms to solve these problems. There was a need to compare these solutions based on their complexity and efficiency. This need gave birth to the Big O notation. What is the Big O notation then?

### What is the Big O notation? 

Big O notation is used in computer science to describe the performance or complexity of an algorithm.

Algorithms are to computer programs what recipes are to dishes. Different recipes can help you to make a particular meal but they don't always yield the same results. They don't always have the same steps, ingredients nor take the same amount of time to follow. Some recipes are faster and produce better results than others.

In the same way,  different algorithms can achieve a particular computer program. However, they are not all equally efficient or take the same amount of time to run. We use Big O to measure the efficiency of an algorithm.

For example, let's consider sorting. There are many sorting algorithms e.g. mergeSort, bubble sort, quicksort, and insertion sort. How do you know which is more efficient or less complex? This is why the Big O notation exists.

You might wonder, why do we need a notation? Why don't we just consider the time it takes to run the algorithm? Here are two of many reasons: 

1. Different computers have different processors and thus some computers will spend less time running an algorithm than others.

2. Some programming languages are faster than others. 

It will be stressful taking all these factors into consideration when trying to analyze an algorithm. Rather than do that, the Big O notation uses something more standard - the input. It considers how the runtime of the algorithm grows in relation to the size of the input. It is also good to note that the Big O notation considers the worst-case scenario for its analysis.

Hopefully, you get the sense of it now. Next question that might come to your mind is "Why should I know this?"

###The Why? 
1. For a  small app that processes little data, such analysis might be unnecessary. This is because the difference in the runtime of algorithms might have little impact on your app. For large applications that manipulate a large amount of data, this analysis is crucial.  Because inefficient algorithms will create a significant impact on the processing time. With a good knowledge of Big-O notation, you can design algorithms for efficiency. Thus, you'll build apps that scale and save yourself a lot of potential headaches.

2. For your coding interviews. Yeah, you heard me right. You are likely to get asked by an interviewer the runtime complexity of your solution. So it's good to have an understanding of the Big O notation.

Let look at some common examples of Big O Notation

###Common Runtime complexities

![](https://thepracticaldev.s3.amazonaws.com/i/r38ytuycnzi6hd8dnevh.png)

<figcaption>Source: https://www.bigocheatsheet.com</figcaption>

####1. O(1) - Constant Runtime

In this case, your algorithm runs the same time, regardless of the given input data set. 

An example of this is returning the first element in the given data like in the example below.

```js
function returnFirst(elements) {
   return elements[0]
}

```

The runtime is constant no matter the size of the input given.

####2. O(n) - Linear Runtime

Linear runtime occurs when the runtime grows in proportion with the size of the input data set. n is the size of the input data set.

A good example of this is searching for a particular value in a data set using an iteration like in the example below.

```js
function constainsValue(elements, value) {
  for (let element in elements) {
    if (element === value) return true;
  }
  return false
}
```

We see that the time taken to loop through all elements in the array grows with an increase in the size of the array. But what if the element is found before it reaches the last element in the array? Does the runtime complexity change?

Remember that the Big O notation considers the worst-case scenario. In this instance, it's the case where the loops run through all elements in the array. So that is what determines the runtime complexity of the algorithm.

####3. O(n^2 ) - Quadratic Runtime

O(n^2 ) denotes an algorithm whose runtime is directly proportional to the square of the size of the input data set. 
An example of this is a nested iteration or loop to check if the data set contains duplicates.

```js
function constainsDuplicate(elements) {
  for (let element in elements) {
     for (let item in elements){
       if (element === item) return true;
     }
  }
  return false
}
```

Deeper nested iterations will produce runtime complexities of O(n^3 ), O(n^4 ) etc

####4. O(log n) - Logarithmic runtime
In this case, the runtime it takes for the algorithm to run will plateau no matter the size of the input data set. 

A common example of this is a search algorithm like the binary search. The idea of a binary search is not to work with the entire data. Rather, reduce the amount of work done by half with each iteration.
The number of operations required to arrive at the desired result will be log base 2 of the input size.

For further information on this runtime complexity, you can check some of the resources at the end of the article.

####5. O(n log n) - Linearithmic runtime 
Here, the runtime of the algorithm depends on running a logarithm operation n times. 

Most sorting algorithms have a runtime complexity of O(n log n)

####6. O(2^n ) - Exponential runtime
This occurs in algorithms where for each increase in the size of the data set, the runtime is doubled. For a small data set, this might not look bad. But as the size of the data increase, the time taken to execute this algorithm increases rapidly. 

A common example of this is a recursive solution for finding Fibonacci numbers.

```js
      function fibonacci(num) {
      if (num <= 1) return 1;
     
      return fibonacci(num - 2) + fibonacci(num - 1)
   }
```

####7 O(n!) - Factorial runtime
In this case, the algorithm runs in factorial time. The factorial of a non-negative integer (n!) is the product of all positive integers less than or equal to n. This is a pretty terrible runtime.

Any algorithm that performs permutation on a given data set is an example of O(n!)

###Conclusion
Hopefully, this article has helped you to grasp the concept of Big O notation. 

Here are some resources where you can find more info on this topic.

1. [Big-O Notation: A primer for beginning devs](https://blog.educative.io/a-big-o-primer-for-beginning-devs/)
2. [A beginner's guide to Big O notation](https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/)
3. [A Simplified Explanation of the Big O Notation](https://medium.com/karuna-sehgal/a-simplified-explanation-of-the-big-o-notation-82523585e835)
4. [All you need to know about “Big O Notation” to crack your next coding interview](https://www.freecodecamp.org/news/all-you-need-to-know-about-big-o-notation-to-crack-your-next-coding-interview-9d575e7eec4/)
5. [A story of Big O](https://medium.com/@deadcookies/a-story-of-big-o-453471a35e62)
6. [Big O cheat sheet](https://www.bigocheatsheet.com/)

Got any addition or question? Please leave a comment. 

Thanks for reading😊.