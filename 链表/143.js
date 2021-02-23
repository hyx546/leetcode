/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  // 1.找中点
  let fast = mid = head;
  while (fast && fast.next) {
      mid = mid.next;
      fast = fast.next.next
  }
  // mid 就是右半边需要反转的链表

  // 2.右边链表反转
  let pre = null;
  let cur = mid;
  while (cur) {
      const next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
  }
  // pre就是反转后的链表的
  // 3.因为两个链表的最大相差不超过1，可以直接合并两个链表
  let l1 = head;
  let l2 = pre;
  while (l2 && l1) {
      let nxt = l1.next
      l1.next = l2
      l2 = l2.next
      l1.next.next = nxt
      l1 = nxt
  }
  
  return head
};