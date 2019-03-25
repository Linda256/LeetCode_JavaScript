//use recursion to calculate kth power of Number N

var exponent=function(k,N){
  if(k===0) return 1;
  return N*exponent(k-1,N)
}

let k=3;
let N=3;
console.log(exponent(k,N));