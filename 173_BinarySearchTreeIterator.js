/*
173.Binary Search Tree Iterator

implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

Calling next() will return the next smallest number in the BST.

Note: next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.
*/
/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
    this.root=root;
    this.nxt=null;
    this.traversal=[];

};
/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
    while(this.root){
        this.traversal.push(this.root);
        this.root=this.root.left;
    }
    if (this.traversal.length===0) return false;
    let tmp=this.traversal.pop();
    this.nxt=tmp.val;
    this.root=tmp.right;

    return true;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
    return this.nxt;
};
