//https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
function getCount(str) {
  let vowelsCount = 0;

  // enter your magic here
  let index = 0;
  while (index < str.length) {
    switch (str.charAt(index)) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        vowelsCount++;
    }
    index++;
  }

  return vowelsCount;
}
//tests
/*
const { assert } = require('chai');

describe('Vowels Count Tests', function () {
  it("should return 5 for 'abracadabra'", function () {
    assert.strictEqual(getCount('abracadabra'), 5);
  });
});
*/

//other people's solutions
//=======================

//
//man, i need to learn .match()
/*
function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }
*/

//lol this was first thing i thought
/*
function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      for(var j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
  }
*/
