/*
941. Valid Mountain Array
User Accepted: 0
User Tried: 0
Total Accepted: 0
Total Submissions: 0
Difficulty: Easy
Given an array A of integers, return true if and only if it is a valid mountain array.

Recall that A is a mountain array if and only if:

A.length >= 3
There exists some i with 0 < i < A.length - 1 such that:
A[0] < A[1] < ... A[i-1] < A[i]
A[i] > A[i+1] > ... > A[B.length - 1]


Example 1:

Input: [2,1]
Output: false
Example 2:

Input: [3,5,5]
Output: false
Example 3:

Input: [0,3,2,1]
Output: true
*/

var validMountainArray = function(A) {
    //let len = A.length();
    // if (len<3) return false;
    //loop thought A
        //if A[0] > A[1] return false
        //if A[i+1]<A[i] peak = i;
    //loop through A start at peak(i=peak)
        //if A[i+1] > A[i] return false
  let len = A.length, peak=0;
  if (len<3) return false;
  for (let i=0;i<len-1;i++){
    if(A[0] > A[1])  return false
    if(A[i+1]<A[i]){
      peak = i;
      break;
    }
  }
  if (peak===0) return false;
  for (let i=peak; i<len;i++){
    if(A[i+1] >= A[i])  return false
    console.log('i',i);
  }

  return true

};

//let input=[0,3,2,1];
//let input = [3,5];
//let input = [3,7,6,4,3,0,1,0];
let input = [14,82,89,84,79,70,70,68,67,66,63,60,58,54,44,43,32,28,26,25,22,15,13,12,10,8,7,5,4,3];
let res=validMountainArray(input);
console.log(res);