/*
9. Palindrome Number
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

*/
/*
I: number
O: boolean

if input x <0 return false;
reverse the number rev
if rev === x return true
*/
const reverse = require('./7_ReverseInteger.js');
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x<0) return false;
  let rev = reverse.reverse(x);
  return rev === x ? true : false;
};

let x = 1001;
let result = isPalindrome(x);
console.log(result);