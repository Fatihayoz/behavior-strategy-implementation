'use strict';

/**
 * this function reverses a string
 * @param {string} [text=''] - the string to reverse
 * @returns {string} the reversed text
 */
const reverse = (text = '') => {
  if (typeof text !== 'string') {
    return 'text is not a string';
  }

  let reversed = '';
  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }
  return reversed;
};

describe('it should reverse strings', () => {
  describe('when no argument is passed', () => {
    it('default parameter is an empty string', () => {
      expect(reverse()).toEqual('');
    });
  });
  describe('when argument is a string', () => {
    it('empty string', () => {
      expect(reverse('')).toEqual('');
    });
    it('"toads"', () => {
      expect(reverse('toads')).toEqual('sdaot');
    });
    // write at least 5 more tests
    it('13579', () => {
      expect(reverse('13579')).toEqual('97531');
    });
    it('true', () => {
      expect(reverse('true')).toEqual('eurt');
    });
    it('ANTWERPEN', () => {
      expect(reverse('ANTWERPEN')).toEqual('NEPREWTNA');
    });
    it('BelGIe', () => {
      expect(reverse('BelGIe')).toEqual('eIGleB');
    });
    it(':)=!<!=(:', () => {
      expect(reverse(':)=!<!=(:')).toEqual(':(=!<!=):');
    });
  });
  describe('when argument is not a string', () => {
    it('true', () => {
      expect(reverse(true)).toEqual('text is not a string');
    });
    // write at least 3 more tests
    it('true', () => {
      expect(reverse(NaN)).toEqual('text is not a string');
    });
    it('true', () => {
      expect(reverse([1,2,3])).toEqual('text is not a string');
    });
    it('true', () => {
      expect(reverse(null)).toEqual('text is not a string');
    });
  });
});
