/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let first = nums.slice(0, n);
  let second = nums.slice(n);
  let k = 0;
  let i = 0;

  while (i < nums.length) {
    nums[i] = first[k];
    nums[i + 1] = second[k];
    k++;
    i = i + 2;
  }
  return nums;
};

// let arr = [2, 5, 1, 3, 4, 7];
// let n = 3;
// console.log(shuffle(arr, n));

let arr = [1, 2, 3, 4, 4, 3, 2, 1];
let n = 4;
console.log(shuffle(arr, n));

module.exports = shuffle;
