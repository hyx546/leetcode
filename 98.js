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
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (!root) return true;
  const res = [];
  let flag = true;
  const dfs = (node) => {
    if (!node) return;

    dfs(node.left);
    const a = res.pop();
    if (a >= node.val) {
      flag = false;
      return;
    }
    res.push(node.val)
    dfs(node.right)

  }
  dfs(root)

  return flag

};