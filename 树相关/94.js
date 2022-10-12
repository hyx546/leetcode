/**
 * 94. 二叉树的中序遍历
 * 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 
 * root = [1,null,2,3]
 * [1,3,2]
 */

/** 递归，隐式的栈 */
// var inorderTraversal = function (root) {
//     const result = [];
//     function test(root) {
//         if (!root) return;
//         test(root.left);
//         result.push(root.val);
//         test(root.right);
//     }
//     test(root);
//     return result;
// };

/** 迭代，显式的栈 */
var inorderTraversal = function (root) {
    const stack = [];
    const result = [];
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        result.push(root.val);
        root = root.right;
    }
    return result;
};