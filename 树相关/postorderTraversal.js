/**
 * 145. 二叉树的后序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    if (!root) return [];
    const result = [];

    const postorder = (root) => {
        if (!root) return;
        postorder(root.left);
        postorder(root.right);
        result.push(root.val);
    };

    postorder(root);
    return result;
};

var postorderTraversal = function (root) {
    if (!root) return [];
    const result = [];
    const stack = [root];

    while (stack.length) {
        const node = stack.pop();
        result.unshift(node.val);
        node.left && stack.push(node.left);
        node.right && stack.push(node.right);
    }
    return result;
};