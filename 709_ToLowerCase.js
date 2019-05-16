/*
Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

 

Example 1:

Input: "Hello"
Output: "hello"
Example 2:

Input: "here"
Output: "here"
Example 3:

Input: "LOVELY"
Output: "lovely"
*/

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    //A-Z 65-90
    //a-z 97-122
    //97-65=32 lowerCase=capitalCase+32 
    let strArr=str.split('');
    for(let i=0;i<strArr.length;i++){
        let code=strArr[i].charCodeAt(0);
        if(code>=65&&code<=90){
            let newStr=String.fromCharCode(code+32);
            strArr[i]=newStr;
        }
    }
    return strArr.join('');
};