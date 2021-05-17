'use strict';

/**
 * lets you know if you are tall enough to ride the roller coaster
 * @param {number} [height=0] - the rider's height in centimeters
 * @returns {string} a message to display to the possible passenger
 */
const rollerCoasterPermission = (height = 0) => {
  if (typeof height !== 'number') {
    return 'height is not a number';
  } else if (height < 100) {
    return 'too short, sorry  :(';
  } else if (height > 100) {
    return 'hop on the roller coaster!';
  } else {
    return 'just right, hop on!';
  }
};

describe('a function that tells you are tall enough', () => {
  describe('when height is not a number', () => {
    it('passing true', () => {
      const actual = rollerCoasterPermission(true);
      const expected = 'height is not a number';
      expect(actual).toEqual(expected);
    });
    it('passing "tall"', () => {
      const expected = 'height is not a number';
      const actual = rollerCoasterPermission('tall');
      expect(actual).toEqual(expected);
    });
    // more tests?
    it('passing "NaN"', () => {
      const expected = 'height is not a number';
      const actual = rollerCoasterPermission(NaN);
      // failed the test, but if it was a prompt, it will return string => 
      // const a = prompt ('Enter NaN'); console.log(typeof a);
      expect(actual).toEqual(expected);
    });
  });
  describe('when height is a number', () => {
    it('less than 100', () => {
      const expected = 'too short, sorry  :(';
      const actual = rollerCoasterPermission(99);
      expect(actual).toEqual(expected);
    });
    it('exactly 100', () => {
      const expected = 'just right, hop on!';
      const actual = rollerCoasterPermission(100);
      expect(actual).toEqual(expected);
    });
    it('greater than 100', () => {
      const expected = 'hop on the roller coaster!';
      const actual = rollerCoasterPermission(101);
      expect(actual).toEqual(expected);
    });
    // more tests?
    it('negative number', () => {
      const expected = 'too short, sorry  :(';
      const actual = rollerCoasterPermission(-5);
      expect(actual).toEqual(expected);
    });
    it('decimal number greater than 100', () => {
      const expected = 'hop on the roller coaster!';
      const actual = rollerCoasterPermission(102.6);
      expect(actual).toEqual(expected);
    });
  });
  // more tests?
});
