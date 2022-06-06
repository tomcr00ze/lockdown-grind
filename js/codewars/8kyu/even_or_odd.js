//https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/javascript
function even_or_odd(number) {
  if (number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}
//tests
/*
const chai = require('chai');
const assert = chai.assert;

describe('Sample tests', () => {
  it('2 is even', () => {
    assert.strictEqual(even_or_odd(2), 'Even');
  });
  it('7 is odd', () => {
    assert.strictEqual(even_or_odd(7), 'Odd');
  });
  it('-42 is even', () => {
    assert.strictEqual(even_or_odd(-42), 'Even');
  });
  it('-7 is odd', () => {
    assert.strictEqual(even_or_odd(-7), 'Odd');
  });
  it('0 is even', () => {
    assert.strictEqual(even_or_odd(0), 'Even');
  });
});
*/

//other people's solutions to learn
/*
function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}
*/
