/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {

  const buildTree = (arr) => {
  let treeArr = [],
      t = new TreeNode();

  if (!arr.length) {
      return [];
  } else if (arr.length === 1) {
      t.val = arr[0];
      treeArr.push(t);
      return treeArr;
  } else if (arr.length === 2) {
      t.val = arr[1];
      t.left = new TreeNode(arr[0]);
      treeArr.push(t);
      t = new TreeNode(arr[0]);
      t.right = new TreeNode(arr[1]);
      treeArr.push(t);
      return treeArr;
  }

  arr.forEach((val, idx, array) => {
      let leftTreeArr = buildTree(array.slice(0, idx));
      let rightTreeArr = buildTree(array.slice(idx + 1, array.length));
 
      if (leftTreeArr.length && rightTreeArr.length) {
          leftTreeArr.forEach(leftNode => {
              rightTreeArr.forEach(rightNode => {
                  t = new TreeNode(val);
                  if (leftNode) t.left = leftNode;
                  if (rightNode) t.right = rightNode;
                  treeArr.push(t);
              })
          });
      } else if (leftTreeArr.length && !rightTreeArr.length) {
          leftTreeArr.forEach(leftNode => {
              t = new TreeNode(val);
              if (leftNode) t.left = leftNode;
              treeArr.push(t);
          });
      } else if (!leftTreeArr.length && rightTreeArr.length) {
          rightTreeArr.forEach(rightNode => {
              t = new TreeNode(val);
              if (rightNode) t.right = rightNode;
              treeArr.push(t);
          });
      }
  })
  return treeArr;
}

  let arr = new Array(n).fill(0);
  arr = arr.map((item, index) => item = index + 1);

  return buildTree(arr);
};