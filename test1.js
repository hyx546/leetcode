
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;
    const node = preorder.shift();
    console.log(node, inorder);
    const index = inorder.findIndex((val) => val === node);
    const root = new TreeNode(node);
    root.left = buildTree(preorder, inorder.slice(0, index));
    root.right = buildTree(preorder, inorder.slice(index + 1));
    return root;
};

console.log(buildTree(preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]));