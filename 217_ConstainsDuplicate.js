/**
 Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true
Example 2:

Input: [1,2,3,4]
Output: false
Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
 */

/**
 *
 * @param {Array[Number]} arr
 * @return {Boolean}
 */
//Set
const containsDuplicate = (arr) => {
  return new Set(arr).size !== arr.length;
};

//some method
const containsDuplicate2 = (arr) => {
  return arr.sort((a, b) => a - b).some((a, i) => a === arr[i - 1]);
};

//obj
const containsDuplicate3 = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] === undefined ? false : true;
    if (obj[arr[i]] === true) return true;
  }

  return false;
};

let arr = [1, 2, 3, 1];
//let arr = [1, 2, 3, 4];
console.log(containsDuplicate3(arr));
