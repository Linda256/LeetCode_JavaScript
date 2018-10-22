/*
926 Flip String to Monotone increasing

A string of '0's and '1's is monotone increasing if it consists of some number of '0's (possibly 0), followed by some number of '1's (also possibly 0.)

We are given a string S of '0's and '1's, and we may flip any '0' to a '1' or a '1' to a '0'.

Return the minimum number of flips to make S monotone increasing.



Example 1:

Input: "00110"
Output: 1
Explanation: We flip the last digit to get 00111.
Example 2:

Input: "010110"
Output: 2
Explanation: We flip to get 011111, or alternatively 000111.
Example 3:

Input: "00011000"
Output: 2
Explanation: We flip to get 00000000.


Note:

1 <= S.length <= 20000
S only consists of '0' and '1' characters.
*/
var minFlipsMonoIncr = function(S) {
    //initiate int countOne, countFlip
    //Find the position of first '1' as start index(skip all 0 before first 1, and count 1 start with first 1).
    // loop through S from start
        // if '1' countOne++;
        // if '0' countFlip++;
        // if countOne < countFlip, countFlip=countOne;
    // return countFlip
    let countOne=0,countFlip=0;
    let start=S.indexOf('1');
    if (start === -1) return 1;
    for (let i=start;i<S.length;i++){
        if (S[i]==='1') countOne++;
        if (S[i]==='0') countFlip++;
        if (countOne<countFlip) countFlip=countOne;
    }
    return countFlip;
};

let S= '01110001011'
let result=minFlipsMonoIncr(S);
console.log(result);