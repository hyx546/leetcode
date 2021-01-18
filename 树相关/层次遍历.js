/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root) return [];
  // 两层的数组
  const arr =[];
  // 循环的数组
  const queue = [root];
  while(queue.length){
    const len = queue.length;
    const res =[];
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      res.push(node.val);
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    arr.push(res)
  }
  return arr
};