/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 234. 回文链表
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    const arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    const len = arr.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (arr[i] !== arr[len - 1 - i]) {
            return false;
        }
    }
    return true;
};