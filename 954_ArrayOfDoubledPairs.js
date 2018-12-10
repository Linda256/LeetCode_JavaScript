/*
Given an array of integers A with even length, return true if and only if it is possible to reorder it such that A[2 * i + 1] = 2 * A[2 * i] for every 0 <= i < len(A) / 2.



Example 1:

Input: [3,1,3,6]
Output: false
Example 2:

Input: [2,1,2,6]
Output: false
Example 3:

Input: [4,-2,2,-4]
Output: true
Explanation: We can take two groups, [-2,-4] and [2,4] to form [-2,-4,2,4] or [2,4,-2,-4].
Example 4:

Input: [1,2,4,16,8,4]
Output: false
*/
        //copy a into A;
        // sort A
        //i=0;
        //loop through A (while i< A.length)
            //if A[i]<0,
                 // index = A.indexOf(A[i]/2)
                // if index = -1 ; return false;
                // else, remove A[i] and A[index] from A. (A.splice(i,1),
            //else if A[i]>0,
                // index = A.indexOf(2*A[i])
                // if index = -1 ; return false;
                // else, remove A[i] and A[index] from A. (A.splice(i,1), A.splice(index-1,1))
            //else
                //if (A[i+1]!==0) return false;
                // remove A[i] and A[index]

var canReorderDoubled = function(a) {
        let A=[...a];
        A.sort((a,b)=>a-b);
        //console.log(A);
        let i=0;
        while (i< A.length){
            if (A[i]===0){
                if (A[i+1]!==0) return false;
                A.splice(i,1);
                A.splice(i,1);
            }else{
                let index = A[i]<0 ? A.indexOf(A[i]/2) : A.indexOf(2*A[i]);
                //console.log('index:',index);
                if (index === -1) return false;
                A.splice(i,1);
                A.splice(index-1,1);
                //console.log('after splice: ',A);
            }
        }
        return true;
};