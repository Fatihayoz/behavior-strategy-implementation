'use strict';

/**
 * returns true if the value is truthy
 * returns false if the value is falsy
 * @param {any} value
 * @returns {boolean}
 */
const stub = (value) => {
  if (value) {
    return true;
  } else {
    return false;
  }
};

/*

*/

for (const solution of [
  secretSolution,
  stub,
]) {
  /* Execution Paths
      when testing conditionals, you need to be test all paths
  */
  describe(solution.name + ': determines if a value is truthy', () => {
    // the if path
    describe('solution can identify truthy values', () => {
      it('strings', () => {
        const actual = solution(true);
        expect(actual).toEqual(true);
      });
      it('numbers', () => {
        const actual = solution(1);
        expect(actual).toEqual(true);
      });
      it('booleans', () => {
        expect(solution(true)).toEqual(true);
      });
    });
    // the else path
    describe('solution can identify falsy values', () => {
      it('strings', () => {
        expect(solution()).toEqual(false);
      });
      it('numbers', () => {
        const actual = solution(0);
        expect(actual).toEqual(false);
      });
      it('booleans', () => {
        expect(solution(false)).toEqual(false);
      });
      it('undefined', () => {
        expect(solution(undefined)).toEqual(false);
      });
      it('null', () => {
        expect(solution(null)).toEqual(false);
      });
    });
  });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(value) { return value ? true : false; }
