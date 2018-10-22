/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
/**
 * @param {string} s
 * @return {string}


*/
/********** Method 1  ****************/
    //initiate maxP="", lo=0, hi=0;
    //loop through s
        // largest odd number palindrome oddP at position i is makePalindrome(s,i,i,maxP)
        // update maxP if oddP>maxP
        // largest even number palindrome evenP at position i is makePalindrome(s,i,i+1,maxP)
        // update maxP if evenP>maxP
    //return maxP

var longestPalindrome = function(s) {
    let maxP="";
    if (s.length==1) return s;
    for (let i=0;i<s.length-1;i++){
        let oddP=makePalindrome(s,i,i);
        if (oddP.length>maxP.length) maxP=oddP;
        let evenP=makePalindrome(s,i,i+1);
        if (evenP.length>maxP.length) maxP=evenP;
    }
    return maxP;
}

    // while left>=0 and right < s.length
    //      if (s[left]===s[right]) left--, right++
    // currPalindrome is s.substring(left+1,right).
function makePalindrome(s,left,right,maxP){
    while (left>=0 && right < s.length && s[left]===s[right]){
             left--;
             right++;
    }
    let currP=s.substring(left+1,right);
    return currP;
}

/********** Method 2  ****************/
var longestPalindrome = function(s) {
    var lo=0;
    var maxlen=0;
    if (s.length===0 || s.length===1) return s;

    for (let i=0; i< s.length-1; i++){
        extendPalindrome(s,i,i);
        extendPalindrome(s,i,i+1);
    }

    function extendPalindrome(s,j,k){
        while(j>=0 && k<s.length && s[j]===s[k]){
            j--;
            k++;
        }
        if (maxlen<k-j-1){
           lo=j+1;
           maxlen= k-j-1;
        }
    };
    return s.substring(lo,maxlen+lo);
}