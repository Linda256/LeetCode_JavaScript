/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const pivotIndex = getPivotIndex(nums);
  if (nums[pivotIndex] === target) {
    return pivotIndex;
  }
  if (pivotIndex === 0) {
    return binarySearch(nums, target);
  }
  if (target > nums[nums.length - 1]) {
    let arr = nums.slice(0, pivotIndex);
    return binarySearch(arr, target);
  } else {
    let arr = nums.slice(pivotIndex);
    let i = binarySearch(arr, target);
    return i === -1 ? -1 : i + pivotIndex;
  }
};

const getPivotIndex = (arr) => {
  let lo = 0;
  let hi = arr.length - 1;
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (arr[mid - 1] > arr[mid]) {
      return mid;
    }
    if (arr[mid] > arr[hi]) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return 0;
};

const binarySearch = (arr, target) => {
  let lo = 0;
  let hi = arr.length - 1;
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return -1;
};
