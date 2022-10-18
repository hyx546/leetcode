/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * 429. N 叉树的层序遍历
 * @param {Node|null} root
 * @return {number[][]}
 */

/** 层次遍历 */
var levelOrder = function (root) {
    if (!root) return [];
    const result = [], queue = [root];

    while (queue.length) {
        const len = queue.length;
        const level = [];
        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            level.push(node.val);
            for (let j = 0; j < node.children.length; j++) {
                queue.push(node.children[j]);
            }
        }
        result.push(level);
    }
    return result;
};


/** 递归 */
var levelOrder = function (root) {
    if (!root) return [];
    const result = [];
    const levelFun = (root, level) => {
        if (result.length === level) {
            result.push([]);
        }
        result[level].push(root.val);
        for (let i = 0; i < root.children.length; i++) {
            levelFun(root.children[i], level + 1);
        }
    };
    levelFun(root, 0);
    return result;
};