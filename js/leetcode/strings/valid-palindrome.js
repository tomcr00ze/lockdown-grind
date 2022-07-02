//https://leetcode.com/problems/valid-palindrome/
/*
 s = s.toLowerCase().replace(/[\W_:]/g,"");
 time - O(n) 
 space - O(1), just the pointers
 APPROACH: Two pointer
 kind of like th 2 pointer approahc for reverse string except we dont do the swap, we just compare.

 also since it's comparison, cleaning the string to make them easy to compare with (removing case sensitivity and other characters like "_" underscores and more) is a must
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[\W_:]/g, '');
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l] == s[r]) {
      l++;
      r--;
    } else {
      return false;
    }
  }
  return true;
};
