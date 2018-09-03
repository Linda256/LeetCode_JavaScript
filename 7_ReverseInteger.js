/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/
/**
 * @param {number} x
 * @return {number}
 */
/*
I:number
O:number
E: negative number, 0
*/
var reverse = function(x) {
    let s=x.toString();
    let negative = false;
    if (x<0) {
        negative = true;
        s=s.slice(1);
        console.log(s);
    }
    let chArr = s.split('');
    let result='';
    let len=s.length-1;
    chArr.forEach((c) =>{
        while(len>=0){
        result=result+chArr[len];
        len--;
        }
    })
    let temp = negative===true ? -Number(result) : Number(result);
    return temp<Math.pow(2,31)-1 && temp>Math.pow(-2,31) ? temp : 0;
};