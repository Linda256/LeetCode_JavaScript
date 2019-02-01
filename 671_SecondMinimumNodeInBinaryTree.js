/*
671 Second Minimum Node in a Binary Tree

Given a non-empty special binary tree consisting of nodes with the non-negative value, where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes.

Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree.

If no such second minimum value exists, output -1 instead.
*/

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
var findSecondMinimumValue = function(root) {
    let curr=root;
    let smallest = root.val;
    let secSmall = Infinity;
    let children = [];
    if(curr.left) children.push(curr.left);
    if(curr.right) children.push(curr.right);
    while(children.length>0){
        curr=children.pop();
        if (curr.val<smallest) smallest = curr.val;
        if (curr.val>smallest && curr.val<secSmall) secSmall=curr.val;
        if(curr.left) children.push(curr.left);
        if(curr.right) children.push(curr.right);
    }
    if (secSmall===Infinity) return -1;
    return secSmall   
};