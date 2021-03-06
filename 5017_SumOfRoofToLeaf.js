/*
1022. Sum of Root To Leaf Binary Numbers
Given a binary tree, each node has value 0 or 1.  Each root-to-leaf path represents a binary number starting with the most significant bit.  For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.

For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.

Return the sum of these numbers modulo 10^9 + 7.



Example 1:



Input: [1,0,1,0,1,0,1]
Output: 22
Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22


Note:

The number of nodes in the tree is between 1 and 1000.
node.val is 0 or 1.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    let result =[];
    rootToLeaf(root,result,root.val.toString());
    let sum=0;
    result.forEach(str=>{
        sum+=parseInt(str,2)
    })
    return sum;
};

function rootToLeaf(root,result,str){
    if(root.left===null && root.right===null){
        result.push(str);
    }
    if(root.left){
        rootToLeaf(root.left,result,str+root.left.val)
    }
    if(root.right){
        rootToLeaf(root.right,result,str+root.right.val)
    }
}