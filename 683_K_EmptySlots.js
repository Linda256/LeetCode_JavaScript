/*
683. K Empty Slots

There is a garden with N slots. In each slot, there is a flower. The N flowers will bloom one by one in N days. In each day, there will be exactly one flower blooming and it will be in the status of blooming since then.

Given an array flowers consists of number from 1 to N. Each number in the array represents the place where the flower will open in that day.

For example, flowers[i] = x means that the unique flower that blooms at day i will be at position x, where i and x will be in the range from 1 to N.

Also given an integer k, you need to output in which day there exists two flowers in the status of blooming, and also the number of flowers between them is k and these flowers are not blooming.

If there isn't such day, output -1.

Example 1:
Input:
flowers: [1,3,2]
k: 1
Output: 2
Explanation: In the second day, the first and the third flower have become blooming.
Example 2:
Input:
flowers: [1,2,3]
k: 1
Output: -1
Note:
The given array will be in the range [1, 20000].

*/

/**
 * @param {number[]} flowers
 * @param {number} k
 * @return {number}
 */

var kEmptySlots = function(flowers, k) {
    let position = [];
    let len = flowers.length;
    for (let i=0;i<len+1;i++){
        position[i]=0;
    }
    for (let j=0;j<len;j++){
        position[flowers[j]]=flowers[j];
        let l = flowers[j];
        if (k===0 && (position[l-1] !== 0 || position[l+1] !==0)) return j+1;
        let r = flowers[j];
        let countl=0;
        let countr=0

        // checkLeft:
        while (l>1 && position[l-1] ===0 )  {
            l--;
            countl++;
            if (countl===k && position[l-1]!==0) return j+1;
        }

        // checkRight
        while (r<len && position[r+1] ===0 )  {
            r++;
            countr++;
            if (countr===k && position[r+1] && position[r+1]!==0) return j+1;
        }
    }
    return -1;
};

let flowers=[6,5,8,9,7,1,10,2,3,4];
let k=2;
console.log(kEmptySlots(flowers,k));