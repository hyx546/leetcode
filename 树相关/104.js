/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    // 队列
    // if (!root) return 0;

    // const queue = [root];
    // let sum = 0;

    // while (queue.length) {
    //     sum++;
    //     const len = queue.length;
    //     for (let i = 0; i < len; i++) {
    //         const node = queue.shift();
    //         node.left && queue.push(node.left);
    //         node.right && queue.push(node.right);
    //     }
    // }
    // return sum;



    // 递归
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};