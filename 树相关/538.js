/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 538. 把二叉搜索树转换为累加树
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
    if (!root) return root;
    let newRoot = root;
    const arr = [];
    const dfs = (newRoot) => {
        if (!newRoot) return;
        dfs(newRoot.left);
        arr.push(newRoot.val);
        dfs(newRoot.right);
    };

    const sum = (num) => {
        return arr.reduce((a, b) => b >= num ? a + b : a, 0);
    };

    const newDfs = (root) => {
        if (!root) return;
        newDfs(root.left);
        const val = sum(root.val);
        root.val = val;
        newDfs(root.right);
    };

    dfs(newRoot);
    newDfs(root);
    return root;
};


// 中序递归反向
var convertBST = function (root) {
    let sum = 0;
    const dfs = (root) => {
        if (!root) return;
        dfs(root.right);
        sum += root.val;
        root.val = sum;
        dfs(root.left);
    };
    dfs(root);
    return root;
};