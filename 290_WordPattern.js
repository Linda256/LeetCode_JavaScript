/*Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Example 1:

Input: pattern = "abba", str = "dog cat cat dog"
Output: true
Example 2:

Input:pattern = "abba", str = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false
Example 4:

Input: pattern = "abba", str = "dog dog dog dog"
Output: false
*/
var wordPattern = function(pattern, str) {
    let patternArr = pattern.split('');
    let wordArr= str.split(/ +/);
    if(patternArr.length!==wordArr.length) return false;
    let mapP={};
    let mapW={};
    for (let i=0;i<wordArr.length;i++){
        if (mapW.hasOwnProperty(wordArr[i])){
             if (mapW[wordArr[i]] != patternArr[i]) return false
        }
        if (mapP.hasOwnProperty(patternArr[i])){
             if (mapP[patternArr[i]] !=  wordArr[i]) return false
        }
        else {
            mapW[wordArr[i]] = patternArr[i];
            mapP[patternArr[i]]= wordArr[i];
        }
    }

    return true;

};