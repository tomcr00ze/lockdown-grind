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
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const newArray = new Array(nums.length).fill(0);
  let l = 0;
  let r = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    const l_squared = nums[l] ** 2;
    const r_squared = nums[r] ** 2;
    if (l_squared > r_squared) {
      newArray[i] = l_squared;
      l++;
    } else {
      newArray[i] = r_squared;
      r--;
    }
  }
  return newArray;
};
