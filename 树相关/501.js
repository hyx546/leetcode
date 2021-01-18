// 二叉搜索树中的众数

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  let maxCount = 0;
  let pre = 0;
  let count = 0;
  let model = [];

  const update = (value) => {
      if (value === pre) {
          count++
      }
      else {
          pre = value;
          count = 1;
      }
      if (count > maxCount) {
          model=[value]
          maxCount = count;
      }
      else if(count === maxCount){
          model.push(value);
      }
  }

  const preo = (root) => {
      if (!root) return null;
      preo(root.left);
      update(root.val);
      preo(root.right);
  }

  preo(root)

  return model
};