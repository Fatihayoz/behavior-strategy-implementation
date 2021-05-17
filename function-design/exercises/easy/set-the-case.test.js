'use strict';

/**
 * sets all the characters in a string to upper or lower case
 * @param {string} [text=''] - the text to casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the text in all lower or upper case
 */
const stub = (text = '', lowerCase = true) => {
  if (lowerCase = true) {
    return text.toLowerCase();
  } else {
    return text.toUpperCase();
  }
};

/*
  your strategy goes here
*/

for (const solution of [
  secretSolution,
  stub
]) {
  describe(solution.name + ': sets a text to lower or upper case', () => {
    describe("the function's default parameters", () => {
      it('second parameter defaults to true', () => {
        expect(solution('asdf')).toEqual('asdf');
      });
      it('first parameter defaults to an empty string', () => {
        expect(solution()).toEqual('');
      });
    });
    // write the tests indicated by the comments
    describe('when set to lower case', () => {
      // when the text is an empty string
      it('first parameter is to an empty string', () => {
        expect(solution('', true)).toEqual('');
      });
      // when the text is all upper case
      it('first parameter is all upper case', () => {
        expect(solution('ASDF', true)).toEqual('asdf');
      });
      // when the text is all lower case
      it('first parameter is all lower case', () => {
        expect(solution('asdf', true)).toEqual('asdf');
      });      
      // when the text is mixed upper and lower case
      it('first parameter is mixed lower and upper case', () => {
        expect(solution('AsDf', true)).toEqual('asdf');
      });        
      // when the text contains punctuation
      it('first parameter contains punctuation', () => {
        expect(solution('!AsDf=', true)).toEqual('!asdf=');
      });           
      // when the text contains numbers
      it('first parameter contains numbers', () => {
        expect(solution('1AsDf2', true)).toEqual('1asdf2');
      });       
    });
    describe('when set to upper case', () => {
      // when the text is an empty string
      it('first parameter is to an empty string', () => {
        expect(solution('', false)).toEqual('');
      });      
      // when the text is all upper case
      it('first parameter is all upper case', () => {
        expect(solution('ASDF', false)).toEqual('ASDF');
      });      
      // when the text is all lower case
      it('first parameter is all lower case', () => {
        expect(solution('asdf', false)).toEqual('ASDF');
      });        
      // when the text is mixed upper and lower case
      it('first parameter is mixed lower and upper case', () => {
        expect(solution('AsDf', false)).toEqual('ASDF');      
      // when the text contains punctuation
      it('first parameter contains punctuation', () => {
        expect(solution('!AsDf=', false)).toEqual('!ASDF=');
      });          
      // when the text contains numbers
      it('first parameter contains numbers', () => {
        expect(solution('1AsDf2', false)).toEqual('1ASDF2');
      }); 
    });
  });
});

// minified solution for testing your tests
// prettier-ignore
function secretSolution (a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; return c = b ? a.toLowerCase() : a.toUpperCase(), c }