
/*
264 Ugly Number II
Write a program to find the n-th ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

Example:

Input: n = 10
Output: 12
Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
*/
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let ugly=[1];
    let i2=0;
    let i3=0;
    let i5=0;
    for (let k=1;k<n;k++){
        let n2=ugly[i2]*2;
        let n3=ugly[i3]*3;
        let n5=ugly[i5]*5;


        let currUgly=Math.min(n2,n3,n5);
        console.log(currUgly);
        console.log('n2,n3,n5:', n2,n3,n5)
        if(currUgly===n2) i2++;
        if(currUgly===n3) i3++;
        if(currUgly===n5) i5++;

        ugly[k]=currUgly;

    }

    return ugly[ugly.length-1];

};

console.log(nthUglyNumber(10));