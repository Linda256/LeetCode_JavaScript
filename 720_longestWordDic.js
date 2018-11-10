/*720 longest Word in Dictionary
Given a list of strings words representing an English Dictionary, find the longest word in words that can be built one character at a time by other words in words. If there is more than one possible answer, return the longest word with the smallest lexicographical order.

If there is no answer, return the empty string.
Example 1:
Input:
words = ["w","wo","wor","worl", "world"]
Output: "world"
Explanation:
The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".
Example 2:
Input:
words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
Output: "apple"
Explanation:
Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".
Note:

All the strings in the input will only contain lowercase letters.
The length of words will be in the range [1, 1000].
The length of words[i] will be in the range [1, 30].
*/

var longestWord = function(words) {
    //sort words
    //initiate a set makeWords, longestStr="";
    //loop through words
        //if word is one letter or word.substring(0,length-1) is in the set makeWords,
            //add word into set
            //if word.length>longestStr.length                      //longestStr=word;
    words.sort();
    let makeWords = new Set();
    let longestStr="";
    words.forEach( word => {
        if (word.length===1 || makeWords.has(word.substring(0,word.length-1))){
            makeWords.add(word);
            longestStr = word.length>longestStr.length ? word : longestStr;
        }

    })
    return longestStr;
};

let words = ["a", "banana", "app", "appl", "ap", "apply", "apple"];
console.log(longestWord(words));