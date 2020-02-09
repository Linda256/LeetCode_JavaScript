/*
Given two equal-size strings s and t. In one step you can choose any character of t and replace it with another character.

Return the minimum number of steps to make t an anagram of s.

An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

Example 1:

Input: s = "bab", t = "aba"
Output: 1
Explanation: Replace the first 'a' in t with b, t = "bba" which is anagram of s.
Example 2:

Input: s = "leetcode", t = "practice"
Output: 5
Explanation: Replace 'p', 'r', 'a', 'i' and 'c' from t with proper characters to make t anagram of s.
Example 3:

Input: s = "anagram", t = "mangaar"
Output: 0
Explanation: "anagram" and "mangaar" are anagrams. 
Example 4:

Input: s = "xxyyzz", t = "xxyyzz"
Output: 0
Example 5:

Input: s = "friend", t = "family"
Output: 4
*/

let minSteps = function(s, t) {
    let count=0
    //make sLetters object to count letters in s
    //make tLetters object to count letters in t
    //for each k in sLetters get the value in tLetters
        // if not found, count=count+sLetter[k]
        // else if(sLetter[k]-tLetter[k]>0)
                //count=sLetter[k]-tLetter[k]
    let sLetters ={};
    let tLetters = {};
    for(let i=0;i<s.length;i++){
        if(sLetters[s[i]]===undefined){
            sLetters[s[i]]=1
        }else{
            sLetters[s[i]]=sLetters[s[i]]+1
        }
    }
    for(let i=0;i<t.length;i++){
        if(tLetters[t[i]]===undefined){
            tLetters[t[i]]=1
        }else{
            tLetters[t[i]]=tLetters[t[i]]+1
        }
    }

    console.log("sLetters",sLetters);
    console.log("tLetter", tLetters);
    let keysArr= Object.keys(sLetters);
    for(let i=0;i<keysArr.length;i++){
        let letter=keysArr[i];
        if(tLetters[letter]===undefined){
            count=count+sLetters[letter];
        }else{
            if(sLetters[letter]-tLetters[letter]>0){
                count=count + (sLetters[letter]-tLetters[letter])
            }
        }
    }
    return count;
}

// let s = "friend";
// let t = "family";
//let s="leetcode";
//let t="practice"
let s="anagram";
let t="mangaar"

console.log(minSteps(s,t));