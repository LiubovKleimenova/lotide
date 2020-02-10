# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @liubovk/lotide`

**Require it:**

`const _ = require('@liubovk/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: takes 2 arrays and asserts if they are equals
* `assertEqual`: takes 2 primitives and asserts if they are equal
* `assertObjectsEqual`: takes 2 objects and asserts if they are equal
* `countLetters`: takes string and count number of letters
* `countOnly`: takes arrays of items and array of items to count and return objet with items and frequency
* `eqArrays`: compare if arrays are equal
* `eqObjects`: compare if objects are equal
* `findKey`: return key according to cd fn
* `findKeyByValue`: return key by value
* `flatten`: return flat array from nested arrays
* `head`: return 1st element of array
* `letterPosition`: return object with letters as keys and  arrays of their positions as value
* `findKeyByValue`: return key by value
* `map`: takes an array and transform each element according to cb fn
* `middle`: return element or array of two elements in the middle of the given array
* `tail`: return array without the first element
* `takeUntil`: return an array of elements of given array until the cb function returns true
* `without`: remove unwanted element from the array
