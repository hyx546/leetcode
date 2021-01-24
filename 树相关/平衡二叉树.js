/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

//  一个字段判断，省去递归
var isBalanced = function (root) {
  let ans = true;
  const dfs = (node) => {
      if (ans === true) {
          if (!node) return true;
          const left = dfs(node.left);
          const right = dfs(node.right);
          if (Math.abs(left - right) > 1) {
              ans = false;
          }
          return Math.max(left, right) + 1
      }
  }
  dfs(root);
  return ans;
};

// 递归
var dfs = (root) => {
  return root ? Math.max(dfs(root.left), dfs(root.right)) + 1 : 0
}
var isBalanced = function (root) {
  if(!root) return true;
  return Math.abs(dfs(root.left) - dfs(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
};