/*
945 Minumum Increment To Make Array Unique

Given an array of integers A, a move consists of choosing any A[i], and incrementing it by 1.

Return the least number of moves to make every value in A unique.



Example 1:

Input: [1,2,2]
Output: 1
Explanation:  After 1 move, the array could be [1, 2, 3].
Example 2:

Input: [3,2,1,2,1,7]
Output: 6
Explanation:  After 6 moves, the array could be [3, 4, 1, 2, 5, 7].
It can be shown with 5 or less moves that it is impossible for the array to have all unique values.
*/
var minIncrementForUnique = function(A) {
    //move=0;
    //sort A
    //loop through A start from postion 1
    //  if (A[i-1]>=A[i]) A[i]=A[i-1]+1 move+=A[i-1]-A[i]+1;
    let move=0;
    A.sort((a,b)=>(a-b));
    console.log(A);
    for(let i=1;i<A.length;i++){
      if (A[i-1]>=A[i]){
        move+=A[i-1]-A[i]+1;
        A[i]=A[i-1]+1;
      }
    }
    return move

};

let A=[3,2,1,2,1,7];

console.log(minIncrementForUnique(A));