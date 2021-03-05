/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 // 采用归并排序，时间:nlogn,空间logn
const merge = (a, b) => {
  let node = new ListNode(null);
  let temp = node;
  while (a && b) {
      if (a.val < b.val) {
          node.next = a;
          a = a.next
      } else {
          node.next = b;
          b = b.next
      }
      node = node.next
  }
  if(a) node.next = a;
  if(b) node.next = b;
  return temp.next
}
var sortList = function (head) {
  if (!head || !head.next) return head;
  let slow = fast = head;
  let preSlow = null;
  while (fast && fast.next) {
      preSlow= slow;
      slow = slow.next;
      fast = fast.next.next
  }
  preSlow.next = null;
  return merge(sortList(head), sortList(slow))
};