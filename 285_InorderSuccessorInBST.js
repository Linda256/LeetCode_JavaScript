/*
285 Inorder Successor in BST
Given a binary search tree and a node in it, find the in-order successor of that node in the BST.

Note: If the given node has no in-order successor in the tree, return null.

Example 1:

Input: root = [2,1,3], p = 1

  2
 / \
1   3

Output: 2
Example 2:

Input: root = [5,3,6,2,4,null,null,1], p = 6

      5
     / \
    3   6
   / \
  2   4
 /
1

Output: null
*/


// method 1: better performance
var inorderSuccessor = function(root, p) {
    let succ=null;
    let curr=root;
    while(curr!==null){
        if(p.val<curr.val){
            succ=curr;
            curr=curr.left;
        }else{
            curr=curr.right;
        }
    }
    return succ;
}

//method 2
const minNode = function(successor, val){
    while(!!successor.left){
        successor = successor.left
    }
    return successor
}

const inorderSuccessor = function(root, p) {
    let nodeToFind = p, succ = null

    // if right subtree is not null do the following: traverse right subtree and find the min key val in the right subtree
    if(nodeToFind.right){
        return minNode(nodeToFind.right)
    }

    // if right subtree is null, then start from root node and do following: travel down tree, if nodes data > roots data, go right otherwise go left
    while(!!root){
        if(nodeToFind.val < root.val){
            succ = root
            root = root.left
        }
        else if(nodeToFind.val > root.val) root = root.right
        else break
    }
    return succ
}