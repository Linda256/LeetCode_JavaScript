/**
You need to construct a string consists of parenthesis and integers from a binary tree with the preorder traversing way.

The null node needs to be represented by empty parenthesis pair "()". And you need to omit all the empty parenthesis pairs that don't affect the one-to-one mapping relationship between the string and the original binary tree.

Example 1:
Input: Binary tree: [1,2,3,4]
       1
     /   \
    2     3
   /
  4

Output: "1(2(4))(3)"

Explanation: Originallay it needs to be "1(2(4)())(3()())",
but you need to omit all the unnecessary empty parenthesis pairs.
And it will be "1(2(4))(3)".
Example 2:
Input: Binary tree: [1,2,3,null,4]
       1
     /   \
    2     3
     \
      4

Output: "1(2()(4))(3)"

Explanation: Almost the same as the first example,
except we can't omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output.

*/

/**
I: binary tree
O: string
C: O(n)
E: []

if currNode is null return "";
if currNode does not have any children return currNode.val + ""
if currNode has a left child, but no right child, recursively put left child into result;
others : recusively put both right and left child into result

*/

function TreeNode(val){
  let val = val;
  let this.left = null;
  let this.right = null;
}


/**
* @param {TreeNode} t
* @return {String}
*/

var tree2str = function(t) {
    if(t===null)
        return "";
    if(t.left===null && t.right===null)
        return t.val+"";
    if(t.right===null)
        return t.val+"("+tree2str(t.left)+")";
    return t.val+"("+tree2str(t.left)+")("+tree2str(t.right)+")";
};

//method 1
var tree2str = function(t) {
  let str="";
  str= makeStr(t,str);
  return str;  
};

function makeStr(t,str){
  if(t===null) return str;
  if(t.left===null&&t.right===null){
      str=str+t.val
      return str; 
  } 
  if(t.left&&t.right){
      str=t.val+"("+makeStr(t.left,str)+")"+"("+makeStr(t.right,str)+")";
  }else if(t.left){
      str=t.val+"("+makeStr(t.left,str)+")";
  }else if(t.right){
      str=t.val+"()"+"("+makeStr(t.right,str)+")";
  }
  return str;
}