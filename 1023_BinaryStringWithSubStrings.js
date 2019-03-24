/*
1023 Binary string with substrings representing 1 to N

Given a binary string S (a string consisting only of '0' and '1's) and a positive integer N, return true if and only if for every integer X from 1 to N, the binary representation of X is a substring of S.
*/

/**
 * @param {string} S
 * @param {number} N
 * @return {boolean}
 */
var queryString = function(S, N) {
  let i=1;
  while(i<=N){
    let iBinary=toBinary(i);
    if(S.indexOf(iBinary)===-1) return false;
    i++;
  }
  return true;
};

function toBinary(n){
  let res=[];
  while(n>1){
    res.push(n%2);
    n=Math.floor(n/2);
  }
  res.push(1);
  return res.reverse().join('');
}

//let n=3;
// let n=8;
// console.log(toBinary(n));
//let S = "0110", N = 3;
let S = "0110", N = 4;
console.log(queryString(S,N));

