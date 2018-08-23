/**
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
Example:

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.

Given target = 20, return false.
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for (let i=0;i<matrix.length;i++){
      if(binarySearch(matrix[i],target)) return true;
    }
    return false;
};

var binarySearch = function(arr,target){
    let lo=0;
    let hi=arr.length-1;
    if (target<arr[lo] || target>arr[hi]) return false;
    while (lo<=hi){
        let mid = Math.floor((lo+hi)/2);
        if (target===arr[mid]) {
            return true;
        }else if (target>arr[mid]){
            lo=mid+1;
        } else {
             hi=mid-1;
        }
    }
    return false
}

let arr=[2,   5,  8, 12, 19]
let matrix = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]

//console.log(binarySearch(arr,5));
//console.log(searchMatrix(matrix,24));


