const shuffle = require("./index");

test("shuffle function is defined", () => {
  expect(shuffle).toBeDefined();
});

test("[2,5,1,3,4,7] ", () => {
  let arr = [2, 5, 1, 3, 4, 7];
  let n = 3;
  console.log(shuffle(arr, n));
  expect(shuffle(arr, n))[2].toEqual(5);
});

test(" [1,2,3,4,4,3,2,1] ", () => {
  let arr = [1, 2, 3, 4, 4, 3, 2, 1];
  let n = 4;
  console.log(shuffle(arr, n));
  expect(shuffle(arr, n))[2].toEqual(2);
});
test(" [1, 1, 2, 2] ", () => {
  let arr = [1, 1, 2, 2];
  let n = 2;
  expect(shuffle(arr, n))[2].toEqual(1);
});
