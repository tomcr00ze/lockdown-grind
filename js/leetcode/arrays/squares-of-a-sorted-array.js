//https://leetcode.com/problems/squares-of-a-sorted-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */

//brute force approach
//square everything then sort
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
//make use of the fact that the array is sorted in ascending order. in this case the numbers in both end whether it be positive or negative, when squared, would have a higher value than the middle. this makes opposite directional 2 pointer approach optimal
//we do 2 pointer approach, comparing each pointer to see who's larger, then "sort" them accordingly.
//by "sort" we mean copy that value to its appropriate order in the new array, thus a for loop where start at the nums.length-1 and decrementing it to 0, suits best to keep the order in place
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
