/**
Example 1:

Input: [1,2,0]
Output: 3
Example 2:

Input: [3,4,-1,1]
Output: 2
Example 3:

Input: [7,8,9,11,12]
Output: 1
Note:

Your algorithm should run in O(n) time and uses constant extra space.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

/**
I: array
O: int
C: O(n)
E: all numbers are negative or 0

// loop through the arr nums
// put the positive item at the position based on their value ( e.g  5 should at position 4 (5-1=4), if not, swap the item at position 4 with 5)
// loop through the sorted arr
//     if nums[i] !== i-1
//        return i+1
*/
var firstMissingPositive = function(nums) {
  for (let i =0; i<nums.length; i++){
    while (nums[i]>0 && i !== nums[i]-1 && nums[i]< nums.length && nums[i] !== nums[nums[i]-1]){
    swap(nums,i,nums[i]-1);
    }
  }

  for(let j=0; j< nums.length; j++ ){
    if (nums[j] != j+1){
      return j+1;
    }
  }
  return nums.length+1;
};

var swap = function(nums, i, j) {
  let temp = nums[i];
  nums[i]= nums[j];
  nums[j]= temp;
}

//let nums = [7,8,9,11,12];
//let nums = [3,4,-1,1];
//let nums =[1,2,0];
let nums=[1,1];
var result =  firstMissingPositive(nums);
console.log(result);

