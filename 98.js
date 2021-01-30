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
 * @return {boolean}
 */

//  中序遍历递增
var isValidBST = function (root) {
  if (!root) return true;
  const res = [];
  let flag = true;
  const dfs = (node) => {
    if (!node) return;

    dfs(node.left);
    const a = res.pop();
    if (a >= node.val) {
      flag = false;
      return;
    }
    res.push(node.val)
    dfs(node.right)

  }
  dfs(root)

  return flag

};



// 左子树比根小， 右子树比根大
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
 * @return {boolean}
 */
var helper = (node,low,high) => {
  if(!node) return true;
  if(node.val <= low || node.val >=high){
      return false;
  }
  return helper(node.left,low,node.val) && helper(node.right,node.val,high);

}
var isValidBST = function(root) {
 
  return helper(root,-Infinity,Infinity)
};