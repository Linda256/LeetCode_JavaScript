/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*
 let res =[];
 if nums.length<3 return res
 */
var threeSum = function (nums) {
  let res = [];
  if (nums.length < 3) return res;
  nums.sort((a, b) => a - b);
  //console.log(nums);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (nums[i] === nums[i - 1] && i > 0) continue;
    let left = i + 1;
    let right = nums.length - 1;
    let target = -nums[i];
    while (left < right) {
      if (nums[left] + nums[right] === target) {
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (nums[left] + nums[right] < target) left++;
      else right--;
    }
  }
  return res;
};

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let results = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    while (i < nums.length && nums[i] === nums[i - 1]) {
      i++;
    }
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        results.push([nums[i], nums[j], nums[k]]);
        while (j < k && nums[j] === nums[j + 1]) {
          j++;
        }
        while (j < k && nums[k] === nums[k - 1]) {
          k--;
        }
        j++;
        k--;
      } else if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
      } else {
        k--;
      }
    }
  }

  return results;
};

let nums = [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6];
console.log(threeSum(nums));
