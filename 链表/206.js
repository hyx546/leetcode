/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 206. 反转链表
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    const arr = [];

    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    arr.reverse();

    let node = headNode = new ListNode(null);

    for (let item of arr) {
        node.next = new ListNode(item);
        node = node.next;
    }
    return headNode.next;

    // let pre = null;

    // while (head) {
    //     const temp = head.next;
    //     head.next = pre;
    //     pre = head;
    //     head = temp;
    // }

    // return pre;
};