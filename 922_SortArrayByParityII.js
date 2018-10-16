/*
922 Sort Array By Parity II
Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

You may return any answer array that satisfies this condition.



Example 1:

Input: [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
*/

/**
 * @param {number[]} A
 * @return {number[]}
 */
//initate even=[]; odd=[];
//loop through A,
    // if A[i] is even push A[i] into even array
    // else push A[i] into odd array
//merge even and odd into result array
// return result;
var sortArrayByParityII = function(A) {
    let even=[],odd=[], result=[];
    A.forEach(n=>{
        if (n%2===0) even.push(n);
        else odd.push(n);
    })
    let j=0,k=0;
    while (j<odd.length||k<even.length){
        result.push(even[k]);
        k++;
        result.push(odd[j]);
        j++;
    }
    return result;
};
