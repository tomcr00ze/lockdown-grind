//https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
//double the integer and return it.
function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i * 2;
}
//tests
/*
describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(doubleInteger(2), 4);
    });
  });
*/

//other people's solutions, things to learn from
//=============================================================
//double with +
function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i + i;
}
//another alternative
const doubleInteger = (i) => i * 2;
//this guy uses bit shift
function doubleInteger(i) {
  return i << 1;
}
