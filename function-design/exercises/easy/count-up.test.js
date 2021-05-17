'use strict';

/**
 * builds an array counting up from 0 to `max`
 * @param {number} [max=0] - the number to count up to
 *  max must be an integer that is greater than 0
 * @returns {number[]} an array of all numbers from 0 to `max`
 */
const stub = (num=0) => {
  let arr = [];
  for (let i = 0; i <= num; i++) {
    arr.push(i);
  } return arr;
};



/*
  Iteration:
  1) Create an empty array to store the result.
  2) Iterate from zero to the given parameter.
  Return: accumulated result. 
*/

for (const solution of [
  secretSolution,
  stub
]) {
  // the main test suite for the function
  describe(solution.name + ': counts up from 0', () => {
    it('default parameter', () => {
      const actual = solution();
      expect(actual).toEqual([0]);
    });
    it('0', () => {
      expect(solution(0)).toEqual([0]);
    });
    it('1', () => {
      expect(solution(1)).toEqual([0, 1]);
    });
    // write at least 5 more tests ...
    it('3', () => {
      expect(solution(1)).toEqual([0, 1, 2, 3]);
    });
    it('5.9', () => {
      expect(solution(1)).toEqual([0, 1, 2, 3, 4, 5]);
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = 0) { if ("number" != typeof a) throw new TypeError("max is not a number"); if (!Number.isInteger(a)) throw new Error("max is not an integer"); if (0 > a) throw new RangeError("max is less than 0"); const b = []; for (let c = 0; c <= a; c++)b.push(c); return b }
