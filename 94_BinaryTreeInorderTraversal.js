94. Binary Tree Inorder Traversal

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
