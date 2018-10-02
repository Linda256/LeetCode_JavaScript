/*
916. Word Subsets
We are given two arrays A and B of words.  Each word is a string of lowercase letters.

Now, say that word b is a subset of word a if every letter in b occurs in a, including multiplicity.  For example, "wrr" is a subset of "warrior", but is not a subset of "world".

Now say a word a from A is universal if for every b in B, b is a subset of a.

Return a list of all universal words in A.  You can return the words in any order.



Example 1:

Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["e","o"]
Output: ["facebook","google","leetcode"]
Example 2:

Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["l","e"]
Output: ["apple","google","leetcode"]
Example 3:

Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["e","oo"]
Output: ["facebook","google"]
Example 4:

Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["lo","eo"]
Output: ["google","leetcode"]
Example 5:

Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["ec","oc","ceo"]
Output: ["facebook","leetcode"]


Note:

1 <= A.length, B.length <= 10000
1 <= A[i].length, B[i].length <= 10
A[i] and B[i] consist only of lowercase letters.
All words in A[i] are unique: there isn't i != j with A[i] == A[j].
*/



 //initiate array result, object subCharFreq, Array itemFreq

    //loop through B
    //    call countChar for each element str in B to convert str to object obj(key: character, value: frequency)
    //    put the obj into itemFeq array
    //for each item in itemFeq,
    //    if key is not in subCharFreq
    //      put key, value into subCharFreq
    //    else compare the value of that key in subCharFreq and itemFeq, update key to the bigger value;


    // loop through A,
    //    call countChar for each element str in A to convert str to object obj(key: character, value: frequency)
        // for each key in subCharFreq
        //    if obj does not has the key, break
        //    else if (value of the key > the value in subCharFreq), push the A[i] into result
        //    else break;
    //return result;

//help function countChar
    //to put requency of char to obj char as value, char as key;
var wordSubsets = function(A, B) {
    let result=[],subCharsFreq={},itemFreq=[];
    B.forEach( str=>{
        let obj=countChar(str);
        for (let k in obj){
            if(!subCharsFreq.hasOwnProperty(k)){
                subCharsFreq[k]=obj[k];
            } else {
                subCharsFreq[k]=Math.max(subCharsFreq[k],obj[k])
            }
        }
    })

    const size=Object.keys(subCharsFreq).length;
    for(let i=0;i<A.length;i++){
        let obj=countChar(A[i]);
        let count=0;
        for (let k in subCharsFreq){
            if(!obj.hasOwnProperty(k)) break;
            else if(obj[k]<subCharsFreq[k]) break;
            count++;
        }
        if (count===size) result.push(A[i]);
    }
    return result;
}

var countChar = function(word){
    let obj={};
    for (let i=0;i<word.length;i++){
        if(obj.hasOwnProperty(word[i])){
            obj[word[i]]++;
        }else{
            obj[word[i]]=1;
        }
    }
    return obj;
}

// let A = ["amazon","apple","facebook","google","leetcode"];
// let B = ["e","oo"];
// let A=["abbac","aabac","bbacb","aacac","bcabb"];
// let B=["c","bc","aa"]
let A=["dcbddbbbeb","edeabaedbc","beecbdbabe","bacadddbda","ecbdebddbb","abeabbcaaa","eabbdbadbb","aacabeacde","bcceeaccae","ebbdebbcad"];
let B=["add","b","ba","ada","dcd"]
//let B =  ["ec","oc","ceo"]
let result=wordSubsets(A,B);
console.log('result',result);
// let char=['o','l','o']
// console.log(isRepeat(char))
//console.log(countChar(A[0]));
