'use strict';

/**
 * Sorts an array of numbers from smallest to largest.
 * Returns a new array without modifying the original array.
 * Does not need to support: NaN, Infinity, -Infinity.
 *
 * @param {number[]} [arrOfNumbers=[]] - The array of numbers to sort.
 * @returns {number[]} A new array with the same numbers, but sorted.
 * @example
 *
 * sortNumbers([1.5, 1, -1.5, 0, -1]);
 * // -> [-1.5, -1, 0, 1, 1.5]
 *
 * @example
 * sortNumbers([-1, 0, 1]);
 * // -> [-1, 0, 1]
 */
const sortNumbers = (arrOfNumbers = []) => {
  // create a copy of the argument to avoid side-effects
  const copiedAndSorted = [...arrOfNumbers];

  // sort the elements in the copied array
  copiedAndSorted.sort((a, b) => a - b);

  // return the copied & sorted array of numbers
  return copiedAndSorted;
};

describe('sortNumbers sorts an array of numbers', () => {
  // test positive numbers
  describe('', () => {
    it ('test for positive numbers', () => {
      const actual = sortNumbers ([3, 5, 1]);
      const expected = [1, 3, 5];
      expect(actual).toEqual(expected);
    })
  });
  // test negative numbers
  describe('', () => {
    it ('test for negative numbers', () => {
      const actual = sortNumbers ([-3, -5, -1]);
      const expected = [-1, -3, -5];
      // failed the test 
      // copiedAndSorted.sort((a, b) => b - a) for negative numbers
      expect(actual).toEqual(expected); 
    })
  });
  // test decimal numbers
  describe('', () => {
    it ('test for decimal numbers', () => {
      const actual = sortNumbers ([0.3, 0.5, 0.1]);
      const expected = [0.1, 0.3, 0.5];
      expect(actual).toEqual(expected);
    })
  });
  // test everything all together
  describe('', () => {
    it ('test everything all together', () => {
      const actual = sortNumbers ([0.3, -0.5, 1]);
      const expected = [-0.5, 0.3, 1];
      expect(actual).toEqual(expected);
    })
  });
  // test for side-effects
  describe('', () => {
    it('it does not modify the argument array', () => {
      const argArr = [1, 5, 3];
      sortNumbers(argArr);
      expect(argArr).toEqual([1, 5, 3]);
    })
  });
});
