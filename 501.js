/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 501. 二叉搜索树中的众数
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
    const map = new Map();
    let maxCount = 0, maxNode = new Set();

    const dfs = (root) => {
        if (!root) return;
        const count = (map.get(root.val) || 0) + 1;
        if (count > maxCount) {
            maxCount = count;
            maxNode.clear();
            maxNode.add(root.val);
        }
        else if (count === maxCount) {
            maxNode.add(root.val);
        }
        map.set(root.val, count);
        dfs(root.left);
        dfs(root.right);
    };
    dfs(root);
    return Array.from(maxNode);
};