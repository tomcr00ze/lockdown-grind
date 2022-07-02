//https://leetcode.com/problems/reverse-string/
var reverseString = function (s) {
  let l = 0; //left pointer
  let r = s.length - 1; //right pointer
  while (l < r) {
    let i = s[l];
    //i = temporary var
    //temporary var is needed to hold value during swapping kind of like
    //Swapping Two Numbers Using Third Variable: https://www.edureka.co/blog/swapping-of-two-numbers-in-c/
    s[l] = s[r];
    s[r] = i;
    l = l + 1;
    r = r - 1;
  }
};
