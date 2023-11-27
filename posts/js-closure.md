---
title: 'Javascript: Closure And Factory Pattern'
excerpt: 'Closure is important for data encapsulation, and it is how the factory pattern is implemented. This short article provides simple language to understand the concept.'
coverImage: '/blog/closure.png'
date: '2023-11-09'
ogImage:
  url: '/blog/closure.png'
---

A basic example:
```
function outerFunction() {
  const outer = "Outer function.";

  function innerFunction() {
    console.log(outer)
  }

  return innerFunction
}
const outer = outerFunction() // outerFunction executes, and it returns the innerFunction
outer() // Prints out "Outer function." - innerFunction still has access to the outer variable
```

There are two nested functions in this example: an `outerFunction` and an `innerFunction`. Closure happens when the `innerFunction` remembers and has access to the variables from the `outerFunction`'s scope(in this case, it is the `outer` variable), even after the `outerFunction` executed.

This is useful to create private variables and data capsulation. One usage is in the factory pattern, the factory function returns an object that contains the public accessible interface, while encapsulate private data. 

Factory pattern example:
```
function counterFactory() {
  let counter = 0;

  function increment() {
    counter++
    console.log(counter)
  }

  function decrement() {
    counter--
    console.log(counter)
  }

  return {
    inc: increment,
    dec: decrement
  }
}
// usage
const counter = counterFactory()
counter.inc() // 1
counter.inc() // 2
counter.dec() // 1

```
In this example, the `counter` variable is private. From outside, we can only see and call the data `counterFactory()` returns. (`inc` and `dec` methods from the returned `counter` object, in this case)