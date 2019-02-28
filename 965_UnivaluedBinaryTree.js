/**

965 UnivaluedBinaryTree
A binary tree is univalued if every node in the tree has the same value.

Return true if and only if the given tree is univalued.


Example 1:

Input: [1,1,1,1,1,null,1]
Output: true

 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    let isUnival = true;
    let curr = root;
    let children=[];
    if(curr.left) children.push(curr.left);
    if(curr.right) children.push(curr.right);
    while(children.length>0){
        let prev = curr; 
        curr=children.pop();
        if(curr.val!=prev.val) return false;  
        if(curr.left) children.push(curr.left);
        if(curr.right) children.push(curr.right);
         
    }
    return isUnival; 
};