// 1302. 层数最深叶子节点的和
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 层次遍历
var deepestLeavesSum = function (root) {
  if (!root) return 0;
  const arr = []
  const queue = [root];
  while (queue.length) {
    const len = queue.length;
    const res = []
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      res.push(node.val)
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      
    }
    arr.push(res)
  }
  return arr[arr.length-1].reduce((pre,next) => pre+next,0)
};