/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeTWo = function(l1,l2){
  let head = new ListNode();
  let h = head;
  while(l1 && l2) {
      if(l1.val < l2.val){
          head.next = l1;
          l1 = l1.next;
      }else{
          head.next = l2;
          l2 = l2.next;
      }
      head = head.next;
  }
  head.next = l1?l1:l2;
  return h.next;
}
var mergeKLists = function(lists) {
  if (!lists.length) return null;
  if (lists.length===1) return lists[0];
  lists.splice(0,2,mergeTWo(lists[0],lists[1]))
  return mergeKLists(lists)
};