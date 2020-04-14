/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let nums1=[];
  let nums2=[];
  while(l1){
      nums1.push(l1.val);
      l1=l1.next
  }
  while(l2){
      nums2.push(l2.val);
      l2=l2.next
  }
  let sum =0 ;
  let sums =[];
  let count =0 ;
  let n1,n2;
  for(let i=nums1.length-1,j=nums2.length-1;i>=0||j>=0;i--,j--){
     n1= nums1[i] ? nums1[i] : 0;
     n2= nums2[j] ? nums2[j] : 0;
     sum=(n1+n2)+count
     sums.push(sum%10);
     count = parseInt(sum/10);
  }
  count === 1?sums.push(1):'';
  let nodes =[];
  for(let i=sums.length-1;i>=0;i--) {
      let node={}
      node.val=sums[i]
      node.next=null;
      nodes.push(node)
  }
  for(let i=0;i<nodes.length;i++){
      nodes[i].next=nodes[i+1]
  }
  return nodes[0]
};