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

//optimal approach
//make use of the fact that the array is sorted in ascending order
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    if (nums[l] * nums[l] < nums[r] * nums[r]) {
      nums[r] = nums[r] * nums[r];
      nums[r--];
    } else {
      nums[l] = nums[l] * nums[l];
      l--;
    }
  }
};
