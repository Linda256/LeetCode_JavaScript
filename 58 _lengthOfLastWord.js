/*
58 length of Last Word
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

Example:

Input: "Hello World"
Output: 5

*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let sArr= s.trim().split(/ +/);
    return sArr[sArr.length-1].length;

};

var lengthOfLastWord2 = function(s) {
    let sTrim=s.trim();
    let start= sTrim.lastIndexOf(' ');
    if (start===-1) return sTrim.length;
    return sTrim.length-1-start;
};

var lengthOfLastWord3 = function(s) {
  let words = s.match(/\w+/g);
  return words ? words[words.length - 1].length : 0
};

//let input= "Hello World";
let input= "a     ";
let res = lengthOfLastWord(input);
console.log(res);