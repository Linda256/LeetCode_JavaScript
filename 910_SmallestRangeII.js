/*
910. Smallest Range II
Given an array A of integers, for each integer A[i] we need to choose either x = -K or x = K, and add x to A[i] (only once).

After this process, we have some array B.

Return the smallest possible difference between the maximum value of B and the minimum value of B.



Example 1:

Input: A = [1], K = 0
Output: 0
Explanation: B = [1]
Example 2:

Input: A = [0,10], K = 2
Output: 6
Explanation: B = [2,8]
Example 3:

Input: A = [1,3,6], K = 3
Output: 3
Explanation: B = [4,6,3]


Note:

1 <= A.length <= 10000
0 <= A[i] <= 10000
0 <= K <= 10000
*/
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeII = function(A, K) {
  /*
  Basic Idea:to get the smallest range, smaller item will choose to go up, bigger item will choose to go down
  */
  // sort A
  // high is the last item, low is the first item, current smallest range, sRange, is high-low
  //loop through A
      //current item, curr, goes up by K, the item after current, next, goes down by K
      //choose lower of low+K and next-K
      //choose bigger of hi-K and curr+K;
      //update smallest range (smallest of sRange and current difference of current high and low)
  //return sRange
  A.sort((a,b)=>a-b);
  let len=A.length-1;
  let high = A[len];
  let low = A[0];
  let sRange=high-low;
  for (let i=0;i<len;i++){
    let curr=A[i],next=A[i+1];
    let currMin = Math.min(low+K,next-K);
    let currMax = Math.max(high-K,curr+K);
    sRange=Math.min(sRange,currMax-currMin);
  }
  return sRange;
}

let A=[3,1,10,8,11];
let K=7;
let result=smallestRangeII(A,K);
console.log(result);



