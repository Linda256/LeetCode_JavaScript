/*
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:

Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/*
E:nums.length<4 return nums


*/
var threeSumClosest = function(nums, target) {
    if (nums.length<4) {
        let closest = 0;
        nums.forEach( (n)=> closest= closest+n);
        return closest;
    }
    nums.sort((a,b) => a-b);
    let closest = nums[0]+nums[1]+ nums[3];
    for (let i=0;i<nums.length-2;i++){
        let twoSum = target - nums[i];
        let hi = nums.length-1;
        let lo = i+1;
        while (lo<hi){
            if (Math.abs(nums[i]+nums[lo]+ nums[hi]-target) < Math.abs(closest - target)) closest = nums[i]+nums[lo]+ nums[hi];
            if (nums[lo]+ nums[hi]=== twoSum) return target;
            else if (nums[lo]+ nums[hi] > twoSum) hi--;
            else lo++;
        }

    }
    return closest;
};