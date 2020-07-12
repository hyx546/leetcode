/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let s = new Set();
  while(head) {
      if(!s.has(head)) {
          s.add(head)
          head =  head.next
      }
      else {
          return head
      }
  }
  return null
};