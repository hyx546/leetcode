/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 99. 恢复二叉搜索树;
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
    let prev = new TreeNode(-Infinity);
    let a1 = a2 = null;
    const dfs = (root) => {
        if (!root) return;
        dfs(root.left);
        if (prev.val > root.val) {
            a2 = root;
            if (!a1) {
                a1 = prev;
            }
        }
        prev = root;
        dfs(root.right);
    };
    dfs(root);

    if (a1 && a2) {
        const val = a1.val;
        a1.val = a2.val;
        a2.val = val;
    }
};