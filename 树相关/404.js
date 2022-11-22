/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 404. 左叶子之和
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    let result = 0, sum = 0;

    const dfs = (root) => {
        if (!root) return 0;

        if (root && !root.left && !root.right) {
            return root.val;
        }

        sum = dfs(root.left);
        sum && (result += sum);
        dfs(root.right);
    };
    dfs(root);

    return result;
};