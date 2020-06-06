function binarySearch1(arr, target) {
  let min = 0;
  let max = arr.length - 1;
  if (arr[0] > target || arr[arr.length - 1] < target) {
    return -1;
  }
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    console.log("mid", mid);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return -1;
}

function binarySearch(arr, target) {
  let min = 0;
  let max = arr.length - 1;
  let res = binary(arr, target, min, max);
  return res;
}

function binary(arr, target, min, max) {
  if (min > max) {
    return -1;
  }
  let mid = Math.floor((min + max) / 2);
  if (arr[mid] === target) {
    return mid;
  }
  if (arr[mid] > target) {
    max = mid - 1;
    return binary(arr, target, min, max);
  } else {
    min = mid + 1;
    return binary(arr, target, min, max);
  }
}

const arr = [0, 3, 4, 6];
let target = 4;
const res = binarySearch(arr, target);
console.log(res);
