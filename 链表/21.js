/**
 * 21. 合并两个有序链表
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let head = cummyNode = new ListNode(0);
    while (list1 && list2) {
        if (list2.val <= list1.val) {
            cummyNode.next = list2;
            list2 = list2.next;
        }
        else {
            cummyNode.next = list1;
            list1 = list1.next;
        }
        cummyNode = cummyNode.next;
    }
    cummyNode.next = list2 ? list2 : list1;
    return head.next;
};