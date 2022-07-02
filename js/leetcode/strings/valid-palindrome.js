//https://leetcode.com/problems/valid-palindrome/
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
