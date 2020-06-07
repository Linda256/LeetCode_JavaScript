/**
 * Given an array of integers arr and an integer k.

A value arr[i] is said to be stronger than a value arr[j] if |arr[i] - m| > |arr[j] - m| where m is the median of the array.
If |arr[i] - m| == |arr[j] - m|, then arr[i] is said to be stronger than arr[j] if arr[i] > arr[j].

Return a list of the strongest k values in the array. return the answer in any arbitrary order.

Median is the middle value in an ordered integer list. More formally, if the length of the list is n, the median is the element in position ((n - 1) / 2) in the sorted list (0-indexed).

For arr = [6, -3, 7, 2, 11], n = 5 and the median is obtained by sorting the array arr = [-3, 2, 6, 7, 11] and the median is arr[m] where m = ((5 - 1) / 2) = 2. The median is 6.
For arr = [-7, 22, 17, 3], n = 4 and the median is obtained by sorting the array arr = [-7, 3, 17, 22] and the median is arr[m] where m = ((4 - 1) / 2) = 1. The median is 3.
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest = function (arr, k) {
  //find mIndex, mean;
  //loop through the arr from left(i) and right(j) simulataneously
  //get the |arr[i]-m| and arr[j]-m|,
  // if |arr[i]-m| > arr[j]-m| res.push(arr[i]) i++
  //  else res.push(arr[j]) j++
  if (arr.length === 1) {
    return arr[0];
  }
  let length = arr.length;
  if (k > length) {
    k = length;
  }
  let res = [];
  let mIndex = Math.floor((length - 1) / 2);

  arr.sort((a, b) => a - b);
  let m = arr[mIndex];
  let i = 0;
  let j = length - 1;
  while (i <= j) {
    let left = Math.abs(arr[i] - m);
    let right = Math.abs(arr[j] - m);
    if (left > right) {
      res.push(arr[i]);
      i++;
    } else {
      res.push(arr[j]);
      j--;
    }
  }
  return res.slice(0, k);
};

let arr = [1, 1, 3, 5, 5],
  k = 2;
// let arr = [6, 7, 11, 7, 6, 8],
//   k = 5;
// let arr = [513],
//   k = 1;

// let arr = [-493, 598, -262, -918, -76, -532, 521],
//   k = 7;
console.log(getStrongest(arr, k));
