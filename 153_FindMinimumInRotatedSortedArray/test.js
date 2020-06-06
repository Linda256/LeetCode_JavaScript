const findMin = require("./index");

test("findMin function is defined", () => {
  expect(findMin).toBeDefined();
});

test("[3,4,5,1,2] minimum is 1", () => {
  let arr = [3, 4, 5, 1, 2];
  expect(findMin(arr)).toEqual(1);
});

test(" array of two items ", () => {
  let arr = [2, 1];
  expect(findMin(arr)).toEqual(1);
});
test(" minium is the last of item ", () => {
  let arr = [2, 5, 1];
  expect(findMin(arr)).toEqual(1);
});

test("empty array return null", () => {
  let arr = [];
  expect(findMin(arr)).toEqual(null);
});
