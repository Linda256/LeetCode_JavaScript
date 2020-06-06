//iterary
const fibonacci1 = (n) => {
  if (n === 0 || n === 1) {
    return n;
  }
  let first = 0;
  let second = 1;
  let res = first + second;
  for (let i = 2; i <= n; i++) {
    res = first + second;
    first = second;
    second = res;
  }
  return res;
};

const fibonacci = (n) => {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const n = 5;

console.log(fibonacci1(n));
