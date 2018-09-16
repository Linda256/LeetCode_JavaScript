/*
Let's say a positive integer is a superpalindrome if it is a palindrome, and it is also the square of a palindrome.

Now, given two positive integers L and R (represented as strings), return the number of superpalindromes in the inclusive range [L, R].



Example 1:

Input: L = "4", R = "1000"
Output: 4
Explanation: 4, 9, 121, and 484 are superpalindromes.
Note that 676 is not a superpalindrome: 26 * 26 = 676, but 26 is not a palindrome.


Note:

1 <= len(L) <= 18
1 <= len(R) <= 18
L and R are strings representing integers in the range [1, 10^18).
int(L) <= int(R)
*/

var superpalindromesInRange = function(L, R) {
    let r=Math.floor(Math.sqrt(Number(R)));
    let l=Math.floor(Math.sqrt(Number(L)));
    let count=0
    let result=[];
    for (let n=l;n<=r;n++){
        if (isPalindrome(n)===true){
            nsqr=n*n;
            if (isPalindrome(nsqr)===true){
            count++;
            result.push(nsqr);
            }
        }
    }

    //return count;
    return result;

};

var isPalindrome=function(n){
    if (n<10) return true;
    let s=n.toString();
    let i=0;
    let j=s.length-1;
    while(i<=j){
        if (s[i]===s[j]){
            i++;
            j--;
        }else return false;
    }
    return true;
}

let L="38455498359";
let R="999999999999999999";

// let L="38";
// let R="999999";

// let L="38455498";
// let R="999999999";
console.log(superpalindromesInRange(L,R));