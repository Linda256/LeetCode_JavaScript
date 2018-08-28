/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 17,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

var twoSum=function(nums,target){
  let  result = [];
  let visited ={};
  //loop through nums,
    // if num is not in visited, put it into visited. value as the key, position as value
    // if target-num is in visited
           //push value of visited[target-num] and index of current num into result
           // return result;
  // return result;
  for(let i=0;i<nums.length;i++){
    if(visited.hasOwnProperty([target-nums[i]])){
      result.push(visited[target-nums[i]],i);
      return result;
    }
    if (!visited.hasOwnProperty([nums[i]])) visited[nums[i]]=i;
  }
}

let nums= [2, 7, 11, 15];
let target=17;

console.log(twoSum(nums,target));