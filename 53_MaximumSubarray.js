/*
53.Maximum Subarray
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

/*
@param {number[]} nums
@return {number}
*/
/*
****   Method 1: naive method. ****
       time complexity O(n*n)
*/
var maxSubArray4 = function (nums) {
  let maxSum = nums[0];
  for (let i = 0; i < nums.length - 1; i++) {
    let currSum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      currSum = currSum + nums[j];
      maxSum = Math.max(maxSum, Math.max(currSum, nums[j]));
    }
  }
  return maxSum;
};

/****    Method 2 ***********/
/*Time Complexity O(n)*/

//choose the bigger of current item and the previous max ending here + current item as current maxEndingHere
// update maxSum if current maxEndingHere > maxSum
var maxSubArrayTotal1 = function (A) {
  let maxSum = A[0],
    maxEndingHere = A[0];
  for (let i = 1; i < A.length; i++) {
    maxEndingHere = Math.max(maxEndingHere + A[i], A[i]);
    maxSum = Math.max(maxSum, maxEndingHere);
  }
  return maxSum;
};

/**** Method 3 ***********/
/* O(n) */
//check if the current sum have negative value, set the current sum to 0;
var maxSubArrayTotal = function (A) {
  let maxSum = Number.NEGATIVE_INFINITY;
  let currSum = 0;
  for (let i = 0; i < A.length; i++) {
    currSum += A[i];
    maxSum = Math.max(maxSum, currSum);
    if (currSum < 0) currSum = 0;
  }
  return maxSum;
};

const maxSubArrayIndex = (arr) => {
  let maxTotal = Number.NEGATIVE_INFINITY;
  let currTotal = 0;
  let maxStartIndex = 0;
  let maxEndIndex = 0;
  let currStartIndex = 0;
  let currEndIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    currTotal += arr[i];
    if (currTotal > maxTotal) {
      maxTotal = currTotal;
      maxEndIndex = i;
      maxStartIndex = currStartIndex;
      currEndIndex = i;
    }
    if (currTotal < 0) {
      currTotal = 0;
      currStartIndex = i + 1;
      currEndIndex = i + 1;
    }
  }
  return [maxStartIndex, maxEndIndex];
};
//let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
//let nums = [-2, 1];
let nums = [10, -2, -3, -2];
//console.log(maxSubArray(nums));
console.log(maxSubArrayTotal(nums));
console.log(maxSubArrayIndex(nums));

// console.log(maxSubArray3(nums));
