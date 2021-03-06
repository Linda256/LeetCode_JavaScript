/**
 * 153. Find Minimum in Rotated Sorted Array

 * Suppose an array sorted in ascending order is rotated at some pivot 
 unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

You may assume no duplicate exists in the array.

Example 1:

Input: [3,4,5,1,2] 
Output: 1
Example 2:

Input: [4,5,6,7,0,1,2]
Output: 0
 * 
 * @param {Array} nums 
 * @return {Number}
 */
/* Time Complexity O(n) */
var findMin1 = function (nums) {
  if (nums.length < 1) {
    return null;
  }
  let min = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
  }
  return min;
};

const findMin = (nums) => {
  if (nums.length < 1) {
    return null;
  }
  if (nums.length === 1) return nums[0];
  let lo = 0;
  let hi = nums.length - 1;
  while (lo <= hi) {
    let mid = Math.floor((hi + lo) / 2);
    if (nums[mid - 1] > nums[mid]) {
      return nums[mid];
    } else if (nums[hi] < nums[mid]) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return nums[0];
};

/**
 * binary search to find the item n that the  the left of n is bigger than n
 */

module.exports = findMin;
