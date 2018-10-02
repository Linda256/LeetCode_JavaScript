/*
915. Partition Array into Disjoint Intervals
User Accepted: 1501
User Tried: 1874
Total Accepted: 1525
Total Submissions: 4281
Difficulty: Medium
Given an array A, partition it into two (contiguous) subarrays left and right so that:

Every element in left is less than or equal to every element in right.
left and right are non-empty.
left has the smallest possible size.
Return the length of left after such a partitioning.  It is guaranteed that such a partitioning exists.



Example 1:

Input: [5,0,3,8,6]
Output: 3
Explanation: left = [5,0,3], right = [8,6]
Example 2:

Input: [1,1,1,0,6,12]
Output: 4
Explanation: left = [1,1,1,0], right = [6,12]


Note:

2 <= A.length <= 30000
0 <= A[i] <= 10^6
It is guaranteed there is at least one way to partition A as described.
*/
// var partitionDisjoint = function(A) {
//     let left = [], temp = [];

//     for(let i=0; i<A.length; i++) {
//         const cur = A[i];
//         if(i==0) {
//             left.push(cur);
//             continue;
//         }
//         const last = Math.max.apply(this, left) // top elem

//         if(cur < last && i!==A.length-1) {
//             left.push(cur);
//                 if(temp.length > 0) {
//                     while(temp.length) left.push(temp.shift());
//                 }
//             } else {
//             temp.push(cur);
//         }

//     }
//     return left.length;
// };

//method 1
var partitionDisjoint = function(A) {
    let hi=A.length-1;
    let currMax=A[0];
    let currMin=A[hi];
    let lmax=[];
    let rmin=[];
    for (let i=0;i<=hi;i++){
        currMax=Math.max(currMax,A[i]);
        lmax.push(currMax);
        //console.log('lmax',lmax);
    }

    for (let i=hi;i>=0;i--){
        currMin=Math.min(currMin,A[i]);
        rmin[i]=currMin;
        //console.log('rmin',rmin);
    }
    for (let i=1;i<=hi;i++){
        if (lmax[i-1]<=rmin[i]) return i
    }
    return null;

};

//method 2
var partitionDisjoint2 = function(A) {
    let left = [], temp = [];

    for(let i=0; i<A.length; i++) {
        const cur = A[i];
        if(i==0) {
            left.push(cur);
            continue;
        }
        const last = Math.max.apply(this, left) // top elem

        if(cur < last && i!==A.length-1) {
            left.push(cur);
                if(temp.length > 0) {
                    while(temp.length) left.push(temp.shift());
                }
            } else {
            temp.push(cur);
        }

    }
    return left.length;
}

//let arr=[1,1,1,0,6,12];
//let arr=[5,0,3,8,6];
let arr=[1,1]
console.log(partitionDisjoint2(arr))