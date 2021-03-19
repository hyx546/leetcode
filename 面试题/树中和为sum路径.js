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
 * @param {number} target
 * @return {number[][]}
 */
 var pathSum = function (root, target) {
  let res = [], arr = [];
  function test(node, sum) {
      if (!node) return;
      sum -= node.val;
      arr.push(node.val)
      if (sum === 0 && !node.left && !node.right) {
          res.push([...arr]);
      }
      test(node.left, sum);
      test(node.right, sum);
      arr.pop();
  }

  test(root, target);

  return res;
};