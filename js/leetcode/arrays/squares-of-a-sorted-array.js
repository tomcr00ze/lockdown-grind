//https://leetcode.com/problems/squares-of-a-sorted-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */

//brute force approach
var sortedSquares = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i];
  }
  //.sort() alone is shit and thinks 100 is less than 16 because JS sort is ALPHABETICAL:
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  //thus, we have to do a comparefunction
  return nums.sort(function (a, b) {
    return a - b;
  });
};
