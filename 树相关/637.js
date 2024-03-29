/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 637. 二叉树的层平均值
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    const queue = [root];
    const result = [];

    while (queue.length) {
        const len = queue.length;
        let sum = 0;
        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            sum += node.val;
            node.left && (queue.push(node.left));
            node.right && (queue.push(node.right));
        }
        result.push(sum / len);
    }
    return result;
};