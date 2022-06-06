//https://www.codewars.com/kata/515e271a311df0350d00000f/javascript
function squareSum(numbers) {
  let square = 0;
  for (i = 0; i < numbers.length; i++) {
    square += numbers[i] * numbers[i];
  }
  return square;
}

//tests
/*
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(squareSum([1,2]), 5)
Test.assertEquals(squareSum([0, 3, 4, 5]), 50)
Test.assertEquals(squareSum([]), 0)
});
});
*/

//other people's solutions, things to learn from
//=============================================================

//i need to learn reduce()
/*
function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}
*/

//pretty readable
/*
function squareSum(numbers){
  return numbers.map(square).reduce(sum);
}

function square(number) {
  return number * number;
}

function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
*/
