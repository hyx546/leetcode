/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 257. 二叉树的所有路径
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    const result = [];
    const dfs = (root, path) => {
        if (root) {
            path += root.val.toString();
            if (!root.left && !root.right) {
                result.push(path);
            }
            else {
                path += '->';
                dfs(root.left, path);
                dfs(root.right, path);
            }
        }
    };

    dfs(root, '');
    return result;
};