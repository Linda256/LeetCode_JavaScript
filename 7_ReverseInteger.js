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
  if (Math.abs(x)>=0 & Math.abs(x)<10) return x;
    let s=x.toString();
    let negative = false;
    if (x<0) {
        negative = true;
        s=s.slice(1);
    }

    let result='';
    let len=s.length-1;
    for (let i=len;i>=0;i--){
        result=result+s[i];
    }

    let temp = negative===true ? -Number(result) : Number(result);
    return temp<Math.pow(2,31)-1 && temp>Math.pow(-2,31) ? temp : 0;
};

var reverse2 = function(x) {
  /*
  if |x| between 0 and 9 return x
  if x<0 x=|x| negative = true
  let result = 0;
  let remain = x;
  while (remain>10)
      get each digit d by mod x by 10;
      remain = Math.floor(result/10)
      result=result*10+d;
  if negative = true return -result;
  return result
  */
  if (Math.abs(x)>=0 & Math.abs(x)<10) return x;
  let negative = false;
  if (x<0){
    negative = true;
    x=-x;
  }
  let result = 0;
  let remain = x;
  while (remain>0){
    let d = remain % 10;
    remain= Math.floor(remain/10);
    result=result*10+d;
  }
  let temp = negative===true ? -result : result;
  return temp<Math.pow(2,31)-1 && temp>Math.pow(-2,31) ? temp : 0;
};

console.log(reverse2(-134569999999999));


