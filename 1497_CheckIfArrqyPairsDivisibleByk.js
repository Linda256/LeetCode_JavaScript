/**
1497. Check If Array Pairs Are Divisible by k
User Accepted:1981
User Tried:2955
Total Accepted:2034
Total Submissions:5604
Difficulty:Medium
Given an array of integers arr of even length n and an integer k.

We want to divide the array into exactly n / 2 pairs such that the sum of each pair is divisible by k.

Return True If you can find a way to do that or False otherwise.

 

Example 1:

Input: arr = [1,2,3,4,5,10,6,7,8,9], k = 5
Output: true
Explanation: Pairs are (1,9),(2,8),(3,7),(4,6) and (5,10).
Example 2:

Input: arr = [1,2,3,4,5,6], k = 7
Output: true
Explanation: Pairs are (1,6),(2,5) and(3,4).
Example 3:

Input: arr = [1,2,3,4,5,6], k = 10
Output: false
Explanation: You can try all possible pairs to see that there is no way to divide arr into 3 pairs each with sum divisible by 10.
Example 4:

Input: arr = [-10,10], k = 2
Output: true
Example 5:

Input: arr = [-1,1,-2,2,-3,3,-4,4], k = 3
Output: true 

 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function (arr, k) {
  let sum = 0;

  arr.forEach((n) => {
    sum += n;
  });
  if (sum % k !== 0) {
    return false;
  }
  let visited = [];
  let divided = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % k === 0) {
      divided.push(arr[i]);
    } else {
      for (let k = 0; k < visited.length; k++) {
        if ((visited[k] + arr[i]) % k === 0) {
          visited.splice(k, 1);
        } else {
          visited.push(arr[i]);
        }
      }
    }
  }
  //console.log("visited", visited, "divided", divided);
  if (visited.length === 0 && divided.length % 2 === 0) {
    return true;
  }
  return false;
};

// let arr = [1, 2, 3, 4, 5, 6],
//   k = 10;
let arr = [1, 2, 3, 4, 5, 6],
  k = 7;
// let arr = [1, 2, 3, 4, 5, 10, 6, 7, 8, 9],
//   k = 5;
console.log(canArrange(arr, k));
