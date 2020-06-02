/**
 152. Maximum Product Subarray
 Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let maxP = nums[0];
  let currMax = nums[0];
  let currMin = nums[0];
  let prevMax = nums[0];
  let prevMin = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currMin = Math.min(prevMin * nums[i], prevMax * nums[i], nums[i]);
    currMax = Math.max(prevMin * nums[i], prevMax * nums[i], nums[i]);
    maxP = Math.max(currMax, currMin, maxP);
    prevMin = currMin;
    prevMax = currMax;
  }
  return maxP;
};
