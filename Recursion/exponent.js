//use recursion to calculate kth power of Number N

// var exponent=function(k,N){
//   if(k===0) return 1;
//   return N*exponent(k-1,N)
// }

const exponent = (k, N) => {
  if (k === 0) return 1;
  k--;
  return N * exponent(k, N);
};
let k = 3;
let N = 2;
console.log(exponent(k, N));

// for (let i = 1; i < 5; i++) {
//   console.log("i in i++", i);
// }
// console.log("************");
// for (let i = 1; i < 5; ++i) {
//   console.log("i in ++i", i);
// }

let i = 0,
  j = 0;

console.log("++i", ++i); //  1
console.log("j++", j++); //0

/*
One thing to note though is that even though i++ returns the value before incrementing, 
it still returns the value after it has been converted to a number.
*/

let s = "1";
console.log("typeof s++", typeof s++); // alerts "number"
console.log("s", s); // alerts 2, not "11" as if by ("1" + 1)
