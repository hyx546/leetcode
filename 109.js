/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 109. 有序链表转换二叉搜索树
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    const arr = [];

    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    const dfs = (arr, left, right) => {
        if (left > right) return null;
        if (left === right) return new TreeNode(arr[left]);
        else if (right - left === 1) {
            let node = new TreeNode(arr[right]);
            node.left = new TreeNode(arr[left]);
            return node;
        }

        const mid = Math.floor((right + left + 1) / 2);

        const node = new TreeNode(arr[mid]);
        node.left = dfs(arr, left, mid - 1);
        node.right = dfs(arr, mid + 1, right);
        return node;
    };

    return dfs(arr, 0, arr.length - 1);
};