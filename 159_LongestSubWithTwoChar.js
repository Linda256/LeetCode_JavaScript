/*
159. Longest Substring with at Most two distinct characters
Given a string s , find the length of the longest substring t  that contains at most 2 distinct characters.

Example 1:

Input: "eceba"
Output: 3
Explanation: t is "ece" which its length is 3.
Example 2:

Input: "ccaabbb"
Output: 5
Explanation: t is "aabbb" which its length is 5.

*/
/**
 * @param {string} s
 * @return {number}
 */
//start at 0,
var lengthOfLongestSubstringTwoDistinct = function(s) {
    if (s.length<3) return s.length;
    let maxLen=1;
    // let maxi=0;
    // let maxj=0;
    let i=0;
    let second=-1;
    while(i<s.length-1){
        for (let j=i+1;j<s.length;j++) {
            while (j<s.length&&s[i]===s[j]){
                j++;
            }
            if(j<s.length){
                second = j;
                while(j<s.length && (s[j]===s[i]||s[j]===s[second])){
                    j++;
                }
            }
        //check if it is the greater than maxLen
            let currLen=j-i;
            if (currLen>maxLen){
                // maxi=i;
                // maxj=j;
                maxLen=currLen;
            }
            i=j-1;
            while(second !==-1 && i>0 && s[i]===s[i-1]){
                i--;
            }
            second=-1;
            console.log('i',i);
            break;
        }
    }
    return maxLen;
};