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
compare the numbers at both side of the num
if they are not equal
return false;
*/
//method 1
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

//method 2: use object to improve performance
const isStrobogrammatic2 = (num) => {
    let dict = {}
    dict['6'] = '9'
    dict['9'] = '6'
    dict['0'] = '0'
    dict['1'] = '1'
    dict['8'] = '8'

    let l = 0, r = num.length - 1

    while (l <= r) {
        if (!dict[num[l]]) {
            return false
        } else if (dict[num[l]] !== num[r]) {
            return false
        }

        l++
        r--
    }

    return true
};

let num='1001';
let result = isStrobogrammatic2(num);
console.log(result);