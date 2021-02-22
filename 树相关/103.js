// 如果从左至右，我们每次将被遍历到的元素插入至双端队列的末尾。

// 如果从右至左，我们每次将被遍历到的元素插入至双端队列的头部。

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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  // 两层的数组
  const arr = [];
  // 循环的数组
  const queue = [root];
  let flag = true;
  while (queue.length) {
      const len = queue.length;
      const res = [];
      for (let i = 0; i < len; i++) {
          const node = queue.shift();
          if (flag) {
              res.push(node.val);
          }
          else{
              res.unshift(node.val)
          }
          node.left && queue.push(node.left)
          node.right && queue.push(node.right)

      }
      arr.push(res);
      flag=!flag
  }
  return arr
};