/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 114. 二叉树展开为链表
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    let node = [];

    const test = (root) => {
        if (!root) return;
        node.push(root);
        test(root.left);
        test(root.right);
    };

    test(root);
    for (let i = 1; i < node.length; i++) {
        const pre = node[i - 1], cur = node[i];
        pre.left = null;
        pre.right = cur;
    }
};