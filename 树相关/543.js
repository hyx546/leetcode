/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 543. 二叉树的直径
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let count = 0;
    const dfs = (root) => {
        if (!root) return 0;

        const leftDep = dfs(root.left);
        const rightDep = dfs(root.right);

        count = Math.max(count, rightDep + leftDep);

        return Math.max(leftDep, rightDep) + 1;
    };
    dfs(root);
    return count;
};