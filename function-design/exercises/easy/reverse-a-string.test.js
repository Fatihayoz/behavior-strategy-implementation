'use strict';

/**
 * reverses a string
 * @param {string} [toReverse=''] - the string to reverse
 * @returns {string} the reversed argument
 */
const stub = (toReverse='') => {
  let reversed = '';
  for (let i = toReverse.length-1; i >= 0; i--) {
    reversed += toReverse [i];
  } return reversed;
};

/*
  your strategy goes here
*/

for (const solution of [
  secretSolution,
  stub
]) {
  // the main test suite for the function
  describe(solution.name + ': reverses a string', () => {
    it('default parameter is an empty string', () => {
      expect(solution()).toEqual('');
    });
    it('an empty string', () => {
      expect(solution('')).toEqual('');
    });
    it('all capital letters', () => {
      expect(solution('ASDF')).toEqual('FDSA');
    });
    // write at least 5 more tests ...
    it ('all non-capital letters', () => {
      expect(solution('asdf')).toEqual('fdsa');
    });
    it ('capital and non-capital mixed letters', () => {
      expect(solution('AsDf')).toEqual('fDsA');
    });
    it('non-letter characters', () => {
      expect(solution('!/=):')).toEqual(':)=/!');
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join("") }
