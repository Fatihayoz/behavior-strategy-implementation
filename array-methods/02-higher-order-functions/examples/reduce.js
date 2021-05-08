'use strict';

/* reducing with a callback
  you might have noticed that these loops strategies are repetitive
  higher order functions will help you write more reusable code
*/

/**
 * executes the callback with each item of the array
 * combines each value in the array using your callback
 * does not modify the parameter
 * @param {Array} arr - an array of items to reduce
 * @param {Function} callback - how to reduce each item
 * @param {any} [initialValue=arr[0]] - the initial value
 * @returns {Array} a new array with the reduceped items
 */
const reduce = (arr, callback, initialValue) => {
  let accumulator = initialValue;
  for (const currentValue of arr) {
    accumulator = callback(accumulator, currentValue);
  }
  return accumulator;
};

const numbersArray = [0, 1, 2, 3, 4];

const addNumbers = (sum, nextNumber) => {
  return sum + nextNumber;
};

const _1_expect = 10;
const _1_actual = reduce(numbersArray, addNumbers);
console.assert(_1_actual === _1_expect, 'Test 1: add numbers'); 
// initialValue is undefined. So the addNumbers function returns NaN and it makes the accumulator NaN.

// with initial value argument
const _2_expect = 15;
const _2_actual = reduce(numbersArray, addNumbers, 5);
console.assert(
  _2_actual === _2_expect,
  'Test 3: add numbers, with initial value'
); // when the intialValue argument is given, the function works and returns 15.

const multiplyNumbers = (product, nextNumber) => {
  return product * nextNumber;
};

const _3_expect = 24;
const _3_actual = reduce(numbersArray, castToNumber); 
// castToNumber is not defined. If it is multiplyNumbers it returns NaN. Because of the intialValue argument.
console.assert(_3_actual === _3_expect, 'Test 3: multiply numbers');

const stringsArray = ['a', 'b', 'c'];

const concatenateStrings = (fullString, nextString) => {
  return `${fullString}-${nextString}`;
};

// Function returns "undefined-a-b-c" as actual.
const _4_expect = 'a-b-c';
const _4_actual = reduce(stringsArray, concatenateStrings);
console.assert(_4_actual === _4_expect, 'Test 4: concatenate strings');

// with initial value argument
const _5_expect = 'hi-a-b-c';
const _5_actual = reduce(stringsArray, concatenateStrings, 'hi');
console.assert(
  _5_actual === _5_expect,
  'Test 5: concatenate strings, with initial value'
);
// // when the intialValue argument is given, the function works and returns hi-a-b-c.
