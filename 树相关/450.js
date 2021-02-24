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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return root;
  if (root.val < key) {
      root.right = deleteNode(root.right, key)
  }
  else if (root.val > key) {
      root.left = deleteNode(root.left, key)
  }
  // root.val相等
  else {
      // 叶子节点
      if (!root.left && !root.right) {
          root = null;
      }
      // 但叶子节点
      else if (root.left && !root.right) {
          root = root.left;
      }
      else if (root.right && !root.left) {
          root = root.right;
      }
      // 都存在
      else if (root.left && root.right) {
          let cur = root.right;
          while (cur.left) {
              cur = cur.left
          }
          root.val = cur.val;
          root.right = deleteNode(root.right, cur.val)
      }
  }
  return root
};