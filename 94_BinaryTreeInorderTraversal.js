/*94. Binary Tree Inorder Traversal
Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
*/
//method1 ES6
var inorderTraversal = function(root) {

    if (!root) {
        return [];
    }

    return [
        ...inorderTraversal(root.left),
        root.val,
        ...inorderTraversal(root.right)
    ];

};

//method2
var inorderTraversal = function(root) {
    let visited=[];
    if (!root) return visited;
    return inOrderT(root,visited);
}


 var inOrderT= function(curr,visited){
        if (curr.left) visited = inOrderT(curr.left,visited);
        visited.push(curr.val);
        if (curr.right) visited = inOrderT(curr.right,visited);
        return visited;
};

//method 3
const inorderTraversal = root => {
  const traversed = [];

  if (!root) {
    return traversed;
  }

  const nodes = [root];
  let currentNode = root.left;

  while (currentNode || nodes.length) {
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.left;
    }

    currentNode = nodes.pop();
    traversed.push(currentNode.val);
    currentNode = currentNode.right;
  }

  return traversed;
}
