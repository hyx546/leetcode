/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * 116. 填充每个节点的下一个右侧节点指针
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (!root) return root;
    const queue = [root];

    while (queue.length) {
        const len = queue.length;

        for (let i = 0; i < len; i++) {
            const node = queue.shift();

            if (i < len - 1) {
                node.next = queue[0];
            }
            node.left && (queue.push(node.left));
            node.right && (queue.push(node.right));
        }
    }
    return root;


};