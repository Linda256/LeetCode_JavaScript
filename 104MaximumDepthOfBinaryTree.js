/* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
* }
*/
/**
* @param {TreeNode} root
* @return {number}
*/
var maxDepth = function(root) {
   if(root===null) return 0;
   let maxDepth=1;
   let visited=[root];
   let levelMap= new Map();
   levelMap.set(root,1); 
   while(visited.length!==0){
       let curr=visited.pop();
       let currLevel=levelMap.get(curr)+1;
       if(curr.left){
           visited.push(curr.left);
           levelMap.set(curr.left, currLevel);
           maxDepth=Math.max(maxDepth,currLevel);
       }
       if(curr.right){
           visited.push(curr.right);
           levelMap.set(curr.right, currLevel);
           maxDepth=Math.max(maxDepth,currLevel);
       }     
   }    
   return maxDepth;
};

//method 2
var maxDepth = function(root) {
    if(root===null) return 0;
    return Math.max(maxDepth(root.left),maxDepth(root.right))+1;
};

//method 3
var maxDepth = function(root) {
    if(root===null) return 0;
    let left=maxDepth(root.left)+1;
    let right=maxDepth(root.right)+1;
    return Math.max(left,right);
};