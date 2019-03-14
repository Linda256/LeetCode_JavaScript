/*
1007_Minimum Domino Rotations for Equal Row

In a row of dominoes, A[i] and B[i] represent the top and bottom halves of the i-th domino.  (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

We may rotate the i-th domino, so that A[i] and B[i] swap values.

Return the minimum number of rotations so that all the values in A are the same, or all the values in B are the same.

If it cannot be done, return -1.



Example 1:



Input: A = [2,1,2,4,2,2], B = [5,2,6,2,3,2]
Output: 2
Explanation:
The first figure represents the dominoes as given by A and B: before we do any rotations.
If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by the second figure.
Example 2:

Input: A = [3,5,1,2,3], B = [3,6,3,3,4]
Output: -1
Explanation:
In this case, it is not possible to rotate the dominoes to make one row of values equal.


Note:

1 <= A[i], B[i] <= 6
2 <= A.length == B.length <= 20000

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */

var minDominoRotations = function(A, B) {
     if(A.length==1&&B.length==1 && A[0]!=B[0]) return 0;
     let repeatA={};
     let repeatB={};
     let repeat={};
     A.forEach(n=>{
         repeatA[n]=repeatA.hasOwnProperty(n)?repeatA[n]+1:1;
         repeat[n]=repeat.hasOwnProperty(n)?repeat[n]+1:1;
     })
     B.forEach(n=>{
         repeatB[n]=repeatB.hasOwnProperty(n)?repeatB[n]+1:1;
         repeat[n]=repeat.hasOwnProperty(n)?repeat[n]+1:1;
     })

    let candidate=null;
    for (let k in repeat){
        if(repeat[k]>=A.length) candidate=k;
    }
    if (candidate===null) return -1;

    let target = repeatA[candidate]>repeatB[candidate] ? A:B;
    let source = target===A ? B:A;

    let count=0;
    for(let i=0;i<A.length;i++){
        if (target[i]!=candidate && source[i]!=candidate) return -1;
        if (target[i]!=candidate && source[i]==candidate) count++;

    }
    return count;
};