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

//  使用单指针
//  时间复杂度为O(n)
//  空间复杂度为O(1) ，只用了常数存储
var middleNode = function(head) {
  let len=0;
  let k=0;
  let node = head;

  // 先循环计算出链表的长度
  while(node){
      len++;
      node = node.next;
  }
  node = head;

  // 循环到一半的时候返回中间节点
  while(k<Math.floor(len/2)){
      node = node.next;
      k++;
  }

  return node
};


// 使用快慢指针
//  时间复杂度为O(n)
//  空间复杂度为O(1) ，只用了常数存储
var middleNode = function(head) {
  let slow=fast=head;
  // 慢指针走一步，快指针走两部
  // 当快指针到达终点时，慢指针到达中点
  while(fast && fast.next){
      slow = slow.next;
      fast = fast.next.next;
  }

  return slow
};