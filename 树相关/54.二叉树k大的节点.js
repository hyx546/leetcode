/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

// 获取中序遍历 递减
var kthLargest = function (root, k) {
  var res = [];
  const pre = (root) => {
      if (!root) return null;
      pre(root.left)
      res.push(root.val);
      pre(root.right);
      return res
  }
  pre(root);

  return res[res.length-k]
};



// 反中序遍历 递增

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
  let count=0;
  let result=0;
  const pre = (node) => {
      if(!node) return null;
      pre(node.right);
      count++;
      if(count === k) {
          result = node.val
          return 
      }
      pre(node.left);
  }
  pre(root);

  return result
};