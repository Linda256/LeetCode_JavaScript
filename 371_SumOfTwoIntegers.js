/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  let carry;

  while (b) {
    carry = a & b;
    console.log("carry:", carry);
    a ^= b;
    console.log("a:", a);
    b = carry << 1;
    console.log("b:", b);
  }

  return a;
};

let a = -1,
  b = 1;
console.log(getSum(a, b));
