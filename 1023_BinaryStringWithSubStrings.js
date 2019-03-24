/*
1023 Binary string with substrings representing 1 to N

Given a binary string S (a string consisting only of '0' and '1's) and a positive integer N, return true if and only if for every integer X from 1 to N, the binary representation of X is a substring of S.

Example 1:

Input: S = "0110", N = 3
Output: true
Example 2:

Input: S = "0110", N = 4
Output: false


Note:

1 <= S.length <= 1000
1 <= N <= 10^9
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


//Methd2 using toString(2) method to conver a number to a binary string

var queryString2=function(S,N){
  for (let i=1;i<=N;i++){
    if(S.indexOf(i.toString(2))===-1) return false;
  }
  return true;
}
//let n=3;
// let n=8;
// console.log(toBinary(n));
//let S = "0110", N = 3;
let S = "0110", N = 4;
console.log(queryString(S,N));

