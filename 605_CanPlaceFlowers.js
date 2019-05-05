/*
Suppose you have a long flowerbed in which some of the plots are planted and some are not. However, flowers cannot be planted in adjacent plots - they would compete for water and both would die.

Given a flowerbed (represented as an array containing 0 and 1, where 0 means empty and 1 means not empty), and a number n, return if n new flowers can be planted in it without violating the no-adjacent-flowers rule.

Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: True
Example 2:
Input: flowerbed = [1,0,0,0,1], n = 2
Output: False
Note:
The input array won't violate no-adjacent-flowers rule.
The input array size is in the range of [1, 20000].
n is a non-negative integer which won't exceed the input array size.
*/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
/**
I: array, int
O: boolean
C: O(n)
E: n  > flowerbed.length/2+1? ;  n=0 ; flowerbed = [0] n=1

*/

var canPlaceFlowers2 = function(flowerbed, n) {
    if(n===0){
        return true;
      }
    flowerbed.unshift(0);
    flowerbed.push(0)
    let i=1;
    while(n>0 &&i<flowerbed.length-1){
      if (flowerbed[i-1]===0 && flowerbed[i+1]===0 && flowerbed[i]!==1){
        n--;
        flowerbed[i]=1;
        i=i++;
       } 
      if(n===0){
        return true;
      }
      i++;
    }   
    return false;    
};

var canPlaceFlowers = function(flowerbed, n) {
    if (n===0 || (flowerbed[0]===0 && n===1 && flowerbed.length===1) ) return true;
    if (n>flowerbed.length/2+1) return false;
    let i=0
    while (n > 0 && i< flowerbed.length ){
        //loop through flowerbed i
        if ( (i===0 && flowerbed[i] === 0 && flowerbed[i+1] === 0) || (flowerbed[i]===0 && flowerbed[i-1] === 0 && flowerbed[i+1] === 0 ) || (i===flowerbed.length-1 && flowerbed[i]===0 && flowerbed[i-1]===0) ){
            flowerbed[i]=1;
            n--;
            if (n===0) return true;
        }
        i++
    }
    return false;
};
