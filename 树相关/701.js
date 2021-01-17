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
 * @param {number} val
 * @return {TreeNode}
 */

// 二叉搜索树中的插入操作

// 只要碰到有空的位置，就插进去
var insertIntoBST = function (root, val) {
  const newNode = new TreeNode(val);
  if (!root) return newNode;
  if (val < root.val) {
      if (root.left === null) {
          root.left = newNode;
      }
      else {
          insertIntoBST(root.left, val)
      }
  }
  if(val > root.val){
      if(root.right === null){
           root.right = newNode;
      }
      else {
          insertIntoBST(root.right, val)
      }
  }
  return root
};

// 只插入到最后
var insertIntoBST = function (root, val) {
  const newNode = new TreeNode(val);
  if (!root) return newNode;
  if (val < root.val) {
      root.left= insertIntoBST(root.left, val)
  }
  if(val > root.val){
      root.right= insertIntoBST(root.right, val)
  }
  return root
};