/*
107 Binary Tree Level Order Traversal II
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(root===null) return [];
    let levelMap=new Map();
    let arr=[root];
    levelMap.set(root,1);
    let order={1:[root.val]};
    let visited=[root];
    while(visited.length!==0){
        let curr=visited.shift();
        let currLevel=levelMap.get(curr)+1;
        if(curr.left){
            visited.push(curr.left);
            levelMap.set(curr.left,currLevel);
            let val=curr.left.val;
            order.hasOwnProperty(currLevel)? order[currLevel].push(val):order[currLevel]=[val]
        }
        if(curr.right){
            visited.push(curr.right);
            levelMap.set(curr.right,currLevel);
            let val=curr.right.val;
            order.hasOwnProperty(currLevel)? order[currLevel].push(val):order[currLevel]=[val]
        }
        
    }
    //console.log(order);
    let level=Object.keys(order).sort((a,b)=>b-a);
    let res=[];
    level.forEach((k)=>{
        res.push(order[k]);
    })
    return res;   
};