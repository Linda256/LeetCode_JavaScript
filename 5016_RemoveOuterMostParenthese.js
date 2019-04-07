
/*
A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.  For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A+B, with A and B nonempty valid parentheses strings.

Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.

Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.



Example 1:

Input: "(()())(())"
Output: "()()()"
Explanation:
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
Example 2:

Input: "(()())(())(()(()))"
Output: "()()()()(())"
Explanation:
The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
Example 3:

Input: "()()"
Output: ""
Explanation:
The input string is "()()", with primitive decomposition "()" + "()".
After removing outer parentheses of each part, this is "" + "" = "".


Note:

S.length <= 10000
S[i] is "(" or ")"
S is a valid parentheses string
*/

/**
 * @param {string} S
 * @return {string}
 */



var removeOuterParentheses = function(S) {
      //loop through S
        //if S[start]==='(', push ")" to stack
        // else if S[i]===")", stack pop ")";
        // if (stack.length===0){
            //temp.push(S.subString(start,i));
            //start=i
        //}
    //loop through temp, remove item[0], removeitem[item.length]
    //join temp
    let stack=[];
    let temp=[];
    let start=0;
       for (let i=0;i<S.length;i++){
           if (S[i]==='('){
               stack.push(')')
           } else if (S[i]===")"){
               stack.pop ();
           }
           if (stack.length===0){
              temp.push(S.substring(start,i+1));
              start=i+1;
          }
        }
        temp=temp.map(item=>{
            item=item.substring(1,item.length-1);
            return item;
        })
        return temp.join('');

};

let S="(()())(())";
//let S="()()";
console.log(removeOuterParentheses(S));