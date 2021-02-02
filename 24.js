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
var reverseList = function(head) {
  let prev = null;
  let cunrret = head;
  while(cunrret) {
    //  保存下一个结点
      const next = cunrret.next;
      // 箭头指向前一个
      cunrret.next = prev;
      //  前一个链点重新赋值
      prev = cunrret;
      cunrret = next;
  }
  return prev
};