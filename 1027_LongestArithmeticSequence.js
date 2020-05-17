/*
1027 Longest Arightmetic Sequence
Given an array A of integers, return the length of the longest arithmetic subsequence in A.

Recall that a subsequence of A is a list A[i_1], A[i_2], ..., A[i_k] with 0 <= i_1 < i_2 < ... < i_k <= A.length - 1, and that a sequence B is arithmetic if B[i+1] - B[i] are all the same value (for 0 <= i < B.length - 1).

 

Example 1:

Input: [3,6,9,12]
Output: 4
Explanation: 
The whole array is an arithmetic sequence with steps of length = 3.
Example 2:

Input: [9,4,7,2,10]
Output: 3
Explanation: 
The longest arithmetic subsequence is [4,7,10].
Example 3:

Input: [20,1,15,3,10,5,8]
Output: 4
Explanation: 
The longest arithmetic subsequence is [20,15,10,5].
 

Note:

2 <= A.length <= 2000
0 <= A[i] <= 10000
*/

var longestArithSeqLength = function(A) {
    let longestSeq=0;
    for(let i=0;i<A.length-1;i++){
      if(longestSeq>A.length-i) break;
      for(let j=i+1;j<A.length;j++){
        let diff = A[j]-A[i];
        let currSeq=2;
        let k=j+1;
        let curr=A[j];
        while(k<A.length){
          let start=A.indexOf(diff+curr,k);
          if(start===-1){
            break;
          }else{
            currSeq++;
            curr=curr+diff;
            k=start+1;
          }
        }
        longestSeq=Math.max(currSeq,longestSeq)
      }
      
    }
    return longestSeq;
};

//let A=[3,6,9,12];
//let A=[20,1,15,3,10,5,8];
//let A=[9,4,7,2,10];
let A=[0,8,45,88,48,68,28,55,17,24]
console.log(longestArithSeqLength(A));