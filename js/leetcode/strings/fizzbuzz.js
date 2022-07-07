//https://leetcode.com/problems/fizz-buzz/
/*
straightforward implementation problem

but even though it's the popular fizzbuzz problem, it's a tagged string problem on leetcode because of the asked return type. had to learn JS .toString() function because of this 
*/
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      arr.push('FizzBuzz');
    } else if (i % 3 == 0) {
      arr.push('Fizz');
    } else if (i % 5 == 0) {
      arr.push('Buzz');
    } else {
      arr.push(i.toString());
    }
  }
  return arr;
};
//-----------------------------
//ignore, this just for my test
console.log(fizzBuzz(5)); //expected output: ["1","2","Fizz","4","Buzz"]
