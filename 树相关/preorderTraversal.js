
/**
 * 144. 二叉树的前序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    const result = [];

    const preorder = (root) => {
        if (!root) return;
        result.push(root.val);
        preorder(root.left);
        preorder(root.right);
    };
    preorder(root);
    return result;
};

/**
 * 需要注意，因为是栈，所以是先push 右，再左
 * @param {*} root 
 * @returns 
 */
var preorderTraversal = function (root) {
    if (!root) return [];
    const result = [], stack = [root];
    while (stack.length) {
        root = stack.pop();
        result.push(root.val);
        root.right && stack.push(root.right);
        root.left && stack.push(root.left);
    }
    return result;
};