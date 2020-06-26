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
var removeDuplicateNodes = function(head) {
  if(!head) return null;
  const map ={};
  map[head.val] = true;
  let node = head.next;
  let pre = head;
  while(node) {
      if(map[node.val]){
          pre.next = node.next
      }
      else{
          map[node.val]=true;
          pre=pre.next
      }
      node = node.next
  }
  return head
};