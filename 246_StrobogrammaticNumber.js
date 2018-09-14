/*
Write a function to determine if a number is strobogrammatic. The number is represented as a string.

Example 1:

Input:  "69"
Output: true
Example 2:

Input:  "88"
Output: true
Example 3:

Input:  "962"
Output: false
*/

/**
 * @param {string} num
 * @return {boolean}
 */
/*
possible number: 1,6,8,9,0
convert num to string nStr

let newStr=''
check from position 0 to num length
    if '23457' contains num[i] return false
    if num[i] is 1,8,0 newStr += num[i];
    else if num[i] is 6 newStr += '9';
    else if num[i] is 9 newStr += '6';

return newStr === num
*/
var isStrobogrammatic = function(num) {
    let f = '23457';
    let same = '180';
    let l=0;
    let r=num.length-1;
    while(l<=r) {
        if (f.indexOf(num[l])!== -1) return false;
        else if ((same.indexOf(num[l]) !== -1 && num[l]===num[r])
          || (num[l]==='6' && num[r]==='9') || (num[l]==='9' && num[r]==='6') ){
          l++;
          r--;
        } else return false;
    }
    return true;
};

let num='0';
let result = isStrobogrammatic(num);
console.log(result);