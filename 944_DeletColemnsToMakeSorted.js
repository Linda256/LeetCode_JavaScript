/*
944 Delete Colemns To Make Sorted
We are given an array A of N lowercase letter strings, all of the same length.

Now, we may choose any set of deletion indices, and for each string, we delete all the characters in those indices.

For example, if we have a string "abcdef" and deletion indices {0, 2, 3}, then the final string after deletion is "bef".

Suppose we chose a set of deletion indices D such that after deletions, each remaining column in A is in non-decreasing sorted order.

Formally, the c-th column is [A[0][c], A[1][c], ..., A[A.length-1][c]]

Return the minimum possible value of D.length.


*/

/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    //col=A[0].length
    //row=A.length
    //total=0
    // for (c=0;c<col;c++)
        // for (r=0;r<row;r++)
                //A[r][c]>A[r+1][c] total++ break
    let col=A[0].length;
    let row=A.length;
    let total=0;
    for (c=0;c<col;c++){
        for (r=0;r<row-1;r++){
          if(A[r][c]>A[r+1][c]){
            total++;
            break;
          }
        }
    }
    return total
}

//let input=["cba","daf","ghi"];
let input=["zyx","wvu","tsr"];
let res=minDeletionSize(input);
console.log(res);
