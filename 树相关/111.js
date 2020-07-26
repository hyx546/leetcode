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
var minDepth = function(root) {
  if(!root) return 0;
  let level = 0;
  let queue = [root]

  while (queue.length) {
  level += 1;

  let len = queue.length;
  while (len--) {
    let node = queue.shift();
    if (!node.left && !node.right) {
      return level;
    }
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    console.log(queue)
  }
}
  return level;
};