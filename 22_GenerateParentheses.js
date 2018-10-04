/*
22. Generate Parentheses
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

/*
@param {number} n
@param {string[]}
*/

/*
use backtrack
*/
//initiate int left and right to n, parenthesis array parenArr [], str""
//call generateP(str,parenArr,left,right)
// return parenArr

//help function generateP(str,parenArr,left,right)
    //if left>right return
    //if still '(' left,
        //add left'(' (str=str+'(') number of left decrease by 1
        // recursively call generateP(str,parenArr,left,right)
    //if still ')' left,
        //add right'(' (str=str+')') number of right decrease by 1
        // recursively call generateP(str,parenArr,left,right)
    //if number of left and right ==0 add str to parentArr return


var generateParenthesis=function(n){
  let left=n,right=n;
  let parenArr=[];
  let str="";
  generateP(str,parenArr,left,right);
  return parenArr;
}

var generateP=function(str,parenArr,left,right){
  if (left>right) return
  if (left>0) generateP(str+"(",parenArr,left-1,right);
  if (right>0) generateP(str+")",parenArr,left,right-1);
  if (left===0 && right===0) {
    parenArr.push(str);
    return;
  }
}

let result=generateParenthesis(5);
console.log(result);