'use strict';

/**
 * reverses a string and sets all the characters to upper or lower case
 * @param {string} [text=''] - the text to reverse and casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the reversed text in all lower or upper case
 */
const stub = (text = '', lowerCase = true) => {
  let reversed = '';
  for (let i = text.length-1; i >= 0; i--) {
    reversed += text[i];
  }
  if (lowerCase) {
    return reversed.toLowerCase();
  } else {
    return reversed.toUpperCase();
  } 
};

/*
  your strategy goes here
*/

for (const solution of [
  secretSolution,
  stub
]) {
  describe(
    solution.name + ': reverses a string then sets to lower or upper case',
    () => {
      describe("the function's default parameters", () => {
        it('second parameter defaults to true', () => {
          expect(solution('asdf')).toEqual('fdsa');
        });
        it('first parameter defaults to an empty string', () => {
          expect(solution()).toEqual('');
        });
      });
      // write the tests indicated by the comments
      describe('when set to lower case', () => {
        // when the text is an empty string
        it('when the text is an empty string', () => {
          expect(solution('', true)).toEqual('');
        });
        // when the text is all upper case
        it('when the text is all upper case', () => {
          expect(solution('ASDF', true)).toEqual('fdsa');
        });
        // when the text is all lower case
        it('when the text is all lower case', () => {
          expect(solution ('asdf', true)).toEqual('fdsa');
        });
        // when the text is mixed upper and lower case
        it('when the text is mixed upper and lower case', () => {
          expect(solution ('aSdF', true)).toEqual('fdsa');
        });
        // when the text contains punctuation
        it('when the text contains punctuation', () => {
          expect(solution ('=aSdF!', true)).toEqual('!fdsa=');
        });
        // when the text contains numbers
        it('when the text contains numbers', () => {
          expect(solution ('1=aSdF!2', true)).toEqual('2!fdsa=1');
        });
      });
      describe('when set to upper case', () => {
        // when the text is an empty string
        it('when the text is an empty string', () => {
          expect(solution('', false)).toEqual('');
        });
        // when the text is all upper case
        it('when the text is all upper case', () => {
          expect(solution('ASDF', false)).toEqual('FDSA');
        });
        // when the text is all lower case
        it('when the text is all lower case', () => {
          expect(solution ('asdf', false)).toEqual('FDSA');
        });        
        // when the text is mixed upper and lower case
        it('when the text is mixed upper and lower case', () => {
          expect(solution ('aSdF', false)).toEqual('FDSA');
        });        
        // when the text contains punctuation
        it('when the text contains punctuation', () => {
          expect(solution ('=aSdF!', false)).toEqual('!FDSA=');
        });        
        // when the text contains numbers
        it('when the text contains numbers', () => {
          expect(solution ('1=aSdF!2', false)).toEqual('2!FDSA=1');
        });
      });
    }
  );
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; for (let d = a.length - 1; 0 <= d; d--)c += a[d]; let d = ""; return d = b ? c.toLowerCase() : c.toUpperCase(), d }
