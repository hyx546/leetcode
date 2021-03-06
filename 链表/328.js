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
var oddEvenList = function (head) {
  if(!head) return null;
  let evenHead = head.next;
  let old = head,event = evenHead;
  while(event && event.next){
      old.next = event.next;
      old = old.next;
      event.next = old.next;
      event = event.next
  }
  old.next = evenHead
  return head
};