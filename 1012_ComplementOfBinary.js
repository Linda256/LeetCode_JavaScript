/*
1012 Complement of Base 10 Integer

Every non-negative integer N has a binary representation.  For example, 5 can be represented as "101" in binary, 11 as "1011" in binary, and so on.  Note that except for N = 0, there are no leading zeroes in any binary representation.

The complement of a binary representation is the number in binary you get when changing every 1 to a 0 and 0 to a 1.  For example, the complement of "101" in binary is "010" in binary.

For a given number N in base-10, return the complement of it's binary representation as a base-10 integer.

 

Example 1:

Input: 5
Output: 2
Explanation: 5 is "101" in binary, with complement "010" in binary, which is 2 in base-10.
Example 2:

Input: 7
Output: 0
Explanation: 7 is "111" in binary, with complement "000" in binary, which is 0 in base-10.
Example 3:

Input: 10
Output: 5
Explanation: 10 is "1010" in binary, with complement "0101" in binary, which is 5 in base-10.
 

Note:

0 <= N < 10^9

*/

/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
    //convert N to binary array arr;
    
    let arr = convertToBinary(N);
    let firstZero=arr.indexOf(0);
    if(firstZero===-1) return 0;
    let complementArr=[];
    let res=0;

    for (let i=firstZero;i<arr.length;i++){
        if(arr[i]===0){
            complementArr.push(1);
        }else{
            complementArr.push(0);
        }
    }
    //convert M to number
    //console.log('complementArr', complementArr)
    let len=complementArr.length;
    let m=0;
    while(len>0){
        res=res+complementArr[len-1]*Math.pow(2,m);
        m++;
        len--;
    }
    return res;
};

function convertToBinary(N){
    let bin=[];
    if(N===0){ 
        return [0];
    }
    while(N>1){
        let temp=Math.floor(N/2);
        let reminder=N%2;
        bin.push(reminder);
        N=temp;
    }
    bin.push(1);
    return bin.reverse();
}

//let N=5;
let N=7;
//let N=10;
console.log(convertToBinary(N));
console.log("complement:",bitwiseComplement(N));

